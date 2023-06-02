import { ROLE_ADMIN } from '@/constants';

export function checkAdmin(role: number | null): boolean {
  return !!role && role === ROLE_ADMIN;
}

export function isTokenExpired(exp: number | undefined): Boolean {
  return exp !== undefined && exp < Math.floor(Date.now() / 1000);
}
