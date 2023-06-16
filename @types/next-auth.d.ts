import { User, Session, DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

type UserId = string;
type RoleId = number;

declare module 'next-auth' {
  interface Session {
    user: {
      id: UserId | null | undefined;
      role: RoleId | null | undefined;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: UserId;
    role?: RoleId;
    exp?: number;
  }
}
