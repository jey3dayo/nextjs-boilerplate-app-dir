import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { accessWhitelist } from '@/config';
import checkPath from '@/lib/check-path';

export default withAuth(
  async function middleware(req) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/dashboard', req.url));
    if (req.nextUrl.pathname === '/admin/users') return NextResponse.rewrite(new URL('/admin', req.url));
  },
  {
    callbacks: {
      authorized({ req, token }) {
        // FIXME: imageは通す
        if (/.png|.jpg|.svg/.test(req.nextUrl.pathname)) return true;

        // /api は通す
        return checkPath(req.nextUrl.pathname, accessWhitelist) || !!token;
      },
    },
  },
);

export const config = {
  matcher: ['/:path*'],
};
