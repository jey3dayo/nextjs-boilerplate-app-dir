type Navigation = {
  name: string;
  href: string;
  requiredAdmin: boolean;
  current?: boolean;
};

const links = {
  '/admin': 'ユーザ管理',
};

export const navigation: Navigation[] = [
  { name: 'example1', href: '#example1', requiredAdmin: false, current: false },
  { name: 'example2', href: '#example2', requiredAdmin: false, current: false },
  { name: links['/admin'], href: '/admin', requiredAdmin: true, current: false },
];

export const profileNavigation: Navigation[] = [
  { name: 'ダッシュボード', href: '/dashboard', requiredAdmin: false },
  { name: 'ユーザ管理', href: '/admin', requiredAdmin: true },
];
