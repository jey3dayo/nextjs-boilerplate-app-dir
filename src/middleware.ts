import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { accessWhitelist } from '@/config';
import checkPath from '@/lib/check-path';

export default withAuth(
  async function middleware(req) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/dashboard', req.url));
  },
  {
    callbacks: {
      authorized({ req, token }) {
        // /api は通す
        return checkPath(req.nextUrl.pathname, accessWhitelist) || !!token;
      },
    },
  },
);

export const config = {
  matcher: ['/:path*'],
};
