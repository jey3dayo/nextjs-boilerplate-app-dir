import { DefaultSession, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { prismaClient } from '@/lib/prisma';

type UserId = PrismaClient.user['id'];
type Role = 'user' | 'admin';

declare module 'next-auth' {
  interface Session {
    user: {
      id: UserId | null | undefined;
      role: Role | null | undefined;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: UserId;
    role?: Role;
    exp?: number;
  }
}
