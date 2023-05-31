import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { checkAdmin } from './lib/next-auth/utils';
import { accessWhitelist, adminPages } from '@/config';
import checkPath from '@/lib/check-path';

export default withAuth(
  async function middleware(req) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/dashboard', req.url));
    if (req.nextUrl.pathname === '/admin/users') return NextResponse.rewrite(new URL('/admin', req.url));
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (/.png|.jpg|.svg/.test(req.nextUrl.pathname)) return true;

        // 公開ページと/apiは通す
        if (checkPath(req.nextUrl.pathname, accessWhitelist)) return true;

        // 認証
        const isAuth = !!token;

        // 管理者ページ
        const isAdmin = isAuth ? checkAdmin(token?.role ?? 0) : false;
        if (checkPath(req.nextUrl.pathname, adminPages)) return isAdmin;

        // 管理者もしくは認証済み
        return isAdmin || isAuth;
      },
    },
  },
);

export const config = {
  matcher: ['/:path*'],
};
