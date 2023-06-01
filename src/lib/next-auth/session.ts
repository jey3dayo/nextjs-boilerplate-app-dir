import { getServerSession as _getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/next-auth';

export function getServerSession() {
  return _getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getServerSession();
  return session?.user;
}
