export const guestUserName = 'ゲストユーザー';

export const titles = {
  signIn: 'サインイン',
  signOut: 'サインアウト',
  dashboard: 'ダッシュボード',
  admin: '管理ツール',
  sample: 'サンプル',
  sampleAdmin: 'サンプルAdmin',
  users: 'ユーザ管理',
  errorPage: 'エラーページ',
};

type Navigation = {
  title: string;
  href: string;
  requiredAdmin: boolean;
  current?: boolean;
};

export const navigation: Navigation[] = [
  { title: titles.dashboard, href: '/dashboard', requiredAdmin: false, current: false },
  // { name: titles.admin, href: '/admin', requiredAdmin: true, current: false },
];

export const profileNavigation: Navigation[] = [
  { title: titles.sample, href: '/sample', requiredAdmin: false, current: false },
  { title: titles.sampleAdmin, href: '/sample/admin', requiredAdmin: false, current: false },
  { title: titles.dashboard, href: '/dashboard', requiredAdmin: false },
  // { name: titles.admin, href: '/admin', requiredAdmin: true },
  { title: titles.users, href: '/users', requiredAdmin: true },
];
