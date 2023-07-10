import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { accessAllowPages, loginPage } from '@/config';
import { checkPath } from '@/lib/check-path';
import { isExpired } from '@/lib/date';
import { debug } from '@/lib/log';
import { getHeaders } from '@/lib/middleware-utils';

// proxy環境下でのredirect用
export default withAuth(
  async function middleware(req: NextRequest) {
    debug(`[middleware][${req.method}] ${req.nextUrl.pathname}`);
    const responseInit = { request: { headers: getHeaders(req) } };

    // 認証がいらないページか確認
    if (checkPath(req.nextUrl.pathname, accessAllowPages)) return NextResponse.next(responseInit);

    // redirect
    if (req.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/dashboard', req.url));

    // token.expが切れていたらリダイレクト
    const token = await getToken({ req });
    if (token && isExpired(token?.exp)) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;

      return NextResponse.redirect(new URL(`${loginPage}?from=${encodeURIComponent(from)}`, req.url));
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
