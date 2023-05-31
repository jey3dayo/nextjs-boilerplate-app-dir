import 'server-only';
import { getServerSession as _getServerSession } from 'next-auth/next';

// TODO: authOptionsが必要なら渡す
export function getServerSession() {
  return _getServerSession();
}

export async function getCurrentUser() {
  const session = await getServerSession();
  return session?.user;
}
