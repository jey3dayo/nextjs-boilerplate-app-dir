import { DefaultSession, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

type UserId = string;
type Role = string;

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
