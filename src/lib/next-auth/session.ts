import 'server-only';
import { Session } from 'next-auth';
import { getServerSession as _getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/next-auth';

export function getServerSession() {
  return _getServerSession(authOptions);
}

export async function getCurrentUser(): Promise<Session['user'] | undefined> {
  const session = await getServerSession();
  return session?.user;
}
