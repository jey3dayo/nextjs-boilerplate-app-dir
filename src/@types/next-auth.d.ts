import { User, Session, DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

type UserId = string;
type RoleId = number;

declare module 'next-auth/jwt' {
  export interface JWT {
    id?: UserId | null | undefined;
    role?: RoleId | null | undefined;
    exp?: number | null | undefined;
  }
}

declare module 'next-auth' {
  export interface Session {
    user: {
      id: UserId | null | undefined;
      role: RoleId | null | undefined;
    } & DefaultSession['user'];
  }
}
