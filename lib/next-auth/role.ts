export const ROLE_USER = 'user';
export const ROLE_ADMIN = 'admin';

export function checkAdmin(role: string | null | undefined): boolean {
  return !!role && role === ROLE_ADMIN;
}
