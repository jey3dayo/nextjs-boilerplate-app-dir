import { RoleName } from '@/types/user';
import { navigation, profileNavigation } from '@/constants';
import { checkAdmin } from '@/lib/next-auth/role';

export function getNavigationByRole(role: RoleName | null | undefined) {
  const isAdmin = role ? checkAdmin(role) : false;
  return navigation.filter((link) => (link.requiredAdmin === true ? isAdmin : true));
}

export function getProfileNavigationByRole(role: RoleName | null | undefined) {
  const isAdmin = role ? checkAdmin(role) : false;
  return profileNavigation.filter((link) => (link.requiredAdmin === true ? isAdmin : true));
}
