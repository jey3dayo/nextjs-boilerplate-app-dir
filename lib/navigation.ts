import { Role } from '@/types/user';
import { navigation, profileNavigation } from '@/constants';
import { checkAdmin } from '@/lib/next-auth/role';

export function getNavigationByRole(role: Role | null | undefined) {
  const isAdmin = role ? checkAdmin(role) : false;
  return navigation.filter((link) => (link.requiredAdmin === true ? isAdmin : true));
}

export function getProfileNavigationByRole(role: Role | null | undefined) {
  const isAdmin = role ? checkAdmin(role) : false;
  return profileNavigation.filter((link) => (link.requiredAdmin === true ? isAdmin : true));
}
