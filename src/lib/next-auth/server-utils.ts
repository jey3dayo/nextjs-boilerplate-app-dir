import { Session } from 'next-auth';
import { getServerSession as _getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/next-auth';

export function getServerSession(): Promise<Session | null> {
  return _getServerSession(authOptions);
}
