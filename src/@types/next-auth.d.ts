import { Session, DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  export interface JWT {
    id?: string | null | undefined;
    role?: number | null | undefined;
  }
}

declare module 'next-auth' {
  export interface Session {
    user: {
      id: string | null | undefined;
      role: number | null | undefined;
    } & DefaultSession['user'];
  }
}
