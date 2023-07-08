export const guestUserName = 'ゲストユーザー';

export const titles = {
  dashboard: 'ダッシュボード',
  admin: '管理ツール',
  sample: 'サンプル',
  sampleAdmin: 'サンプルAdmin',
};

type Navigation = {
  name: string;
  href: string;
  requiredAdmin: boolean;
  current?: boolean;
};

export const navigation: Navigation[] = [
  { name: titles.dashboard, href: '/dashboard', requiredAdmin: false, current: false },
  { name: titles.admin, href: '/admin', requiredAdmin: true, current: false },
];

export const profileNavigation: Navigation[] = [
  { name: titles.sample, href: '/sample', requiredAdmin: false, current: false },
  { name: titles.sampleAdmin, href: '/sample/admin', requiredAdmin: false, current: false },
  { name: titles.dashboard, href: '/dashboard', requiredAdmin: false },
  { name: titles.admin, href: '/admin', requiredAdmin: true },
];
