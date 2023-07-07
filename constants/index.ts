export const guestUserName = 'ゲストユーザー';

type Navigation = {
  name: string;
  href: string;
  requiredAdmin: boolean;
  current?: boolean;
};

export const navigation: Navigation[] = [
  { name: 'ダッシュボード', href: '/dashboard', requiredAdmin: false, current: false },
  { name: '管理ツール', href: '/admin', requiredAdmin: true, current: false },
];

export const profileNavigation: Navigation[] = [
  { name: 'sample', href: '/sample', requiredAdmin: false, current: false },
  { name: 'ダッシュボード', href: '/dashboard', requiredAdmin: false },
  { name: '管理ツール', href: '/admin', requiredAdmin: true },
];
