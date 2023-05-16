import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const accessWhitelist = ['/dashboard'];

export default withAuth(
  async function middleware(req) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/dashboard', req.url));
  },
  {
    callbacks: {
      authorized({ req, token }) {
        return accessWhitelist.includes(req.nextUrl.pathname) || !!token;
      },
    },
  },
);

export const config = {
  matcher: ['/:path*'],
};
