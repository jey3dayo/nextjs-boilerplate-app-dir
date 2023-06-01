import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { checkAdmin } from './lib/next-auth/utils';
import { accessWhitelist, adminPages, loginPage } from '@/config';
import checkPath from '@/lib/check-path';

export default withAuth(
  async function middleware(req) {
    // 認証がいらないページか確認
    if (checkPath(req.nextUrl.pathname, accessWhitelist)) return null;

    // 認証
    const token = await getToken({ req });
    const isAuth = !!token;

    // token.expが切れていたらリダイレクト
    const isExpired = token?.exp && token.exp < Date.now() / 1000;
    if (!isAuth || isExpired) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;
      return NextResponse.redirect(new URL(`${loginPage}?from=${encodeURIComponent(from)}`, req.url));
    }

    // admin管理ページの場合、権限確認
    const isAdmin = isAuth ? checkAdmin(token?.role ?? 0) : false;
    if (checkPath(req.nextUrl.pathname, adminPages)) {
      return isAdmin ? null : NextResponse.rewrite(new URL('/error?code=403', req.url));
    }

    // redirect
    // if (req.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/dashboard', req.url));
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        return true;
      },
    },
  },
);

export const config = {
  matcher: ['/', '/((?!non-protected).*)'],
};
