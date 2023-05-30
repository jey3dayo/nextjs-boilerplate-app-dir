type Navigation = {
  name: string;
  href: string;
  requiredAdmin: boolean;
  current?: boolean;
};

const links = {
  '/admin/users': 'ユーザ管理',
};

export const navigation: Navigation[] = [
  { name: 'example1', href: '#example1', requiredAdmin: false, current: false },
  { name: 'example2', href: '#example2', requiredAdmin: false, current: false },
  { name: links['/admin/users'], href: '/admin/users', requiredAdmin: true, current: false },
];

export const profileNavigation: Navigation[] = [{ name: 'ダッシュボード', href: '/dashboard', requiredAdmin: false }];

export const ROLE_USER = 1;
export const ROLE_ADMIN = 2;
