import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { accessWhitelist, adminPages, loginPage } from '@/config';
import { checkPath } from '@/lib/check-path';
import { isExpired } from '@/lib/date';
import { debug } from '@/lib/log';
import { checkAdmin } from '@/lib/next-auth/utils';

export default withAuth(
  async function middleware(req) {
    debug('called', req.nextUrl.pathname);

    // redirect
    if (req.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/dashboard', req.url));

    // 認証がいらないページか確認
    if (checkPath(req.nextUrl.pathname, accessWhitelist)) return null;

    // 認証
    // XXX: tokenが取れなくなる時がある
    const token = await getToken({ req });
    const isAuth = !!token;

    // token.expが切れていたらリダイレクト
    if (!isAuth || isExpired(token?.exp)) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;
      return NextResponse.redirect(new URL(`${loginPage}?from=${encodeURIComponent(from)}`, req.url));
    }

    // admin管理ページの場合、権限確認
    if (checkPath(req.nextUrl.pathname, adminPages)) {
      const isAdmin = isAuth ? checkAdmin(token?.role ?? 0) : false;
      return isAdmin ? null : NextResponse.redirect(new URL('/error?code=403', req.url));
    }

    return null;
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
