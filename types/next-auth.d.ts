import { DefaultSession, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { RoleName, UserId } from '@/types/user';

declare module 'next-auth' {
  interface Session {
    user: {
      id: UserId | null | undefined;
      role: RoleName | null | undefined;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: UserId;
    role?: RoleName;
    exp?: number;
  }
}
