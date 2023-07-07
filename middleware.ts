import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { accessAllowPages, adminPages, loginPage } from '@/config';
import { checkPath } from '@/lib/check-path';
import { isExpired } from '@/lib/date';
import { debug } from '@/lib/log';
import { getHeaders } from '@/lib/middleware-utils';
import { checkAdmin } from '@/lib/next-auth/role';
import { baseFullUrl as requestUrl } from './constants/api';

// proxy環境下でのredirect用
export default withAuth(
  async function middleware(req: NextRequest) {
    debug(`[middleware][${req.method}] ${req.nextUrl.pathname}`);
    const responseInit = { request: { headers: getHeaders(req) } };

    // 認証がいらないページか確認
    if (checkPath(req.nextUrl.pathname, accessAllowPages)) return NextResponse.next(responseInit);

    // redirect
    if (req.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/dashboard', requestUrl));

    // 認証
    const token = await getToken({ req });
    const isAuth = !!token;

    // token.expが切れていたらリダイレクト
    // FIXME: 404の場合はリダイレクトしない
    if (!isAuth || isExpired(token?.exp)) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;

      return NextResponse.redirect(new URL(`${loginPage}?from=${encodeURIComponent(from)}`, requestUrl));
    }

    // admin管理ページの場合、権限確認
    if (checkPath(req.nextUrl.pathname, adminPages)) {
      const isAdmin = isAuth ? checkAdmin(token?.role) : false;
      return isAdmin ? null : NextResponse.redirect(new URL('/error?code=403', requestUrl));
    }

    return NextResponse.next(responseInit);
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

const config = {
  matcher: ['/', `/((?!${accessAllowPages.join('|')}).*)`],
};

export { config };
