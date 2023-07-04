import { ROLE_ADMIN } from '@/constants';

export function checkAdmin(role: string | null): boolean {
  return !!role && role === ROLE_ADMIN;
}
