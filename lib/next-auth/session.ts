import 'server-only';
import { Session } from 'next-auth';
import { getServerSession as _getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/next-auth';
import { debug } from '@/lib/log';

export function getServerSession() {
  return _getServerSession(authOptions);
}

export async function getCurrentUser(): Promise<Session['user'] | undefined> {
  const session = await getServerSession();
  debug({ session });
  return session?.user;
}
