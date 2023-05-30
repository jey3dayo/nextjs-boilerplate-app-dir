import { getServerSession as _getServerSession } from 'next-auth/next';
import { ROLE_ADMIN } from '@/constants';

export function checkAdmin(role: number | null): boolean {
  return !!role && role === ROLE_ADMIN;
}
