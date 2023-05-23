import { Session } from 'next-auth';

export type SessionWithUser = Session & {
  user?: {
    id?: string | null | undefined;
  };
};
