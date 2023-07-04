import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import { callbacks } from '@/lib/next-auth/callbacks';
import { providers } from '@/lib/next-auth/provider';
import { prismaClient } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30days
  },
  providers,
  callbacks,
};
