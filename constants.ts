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

export const ROLE_USER = 'user';
export const ROLE_ADMIN = 'admin';

export const messages = {
  invalidAccess: '不正なアクセスです',
  invalidToken: 'トークンの検証に失敗しました',
  userNotFound: '不正が見つかりません',
  needLogin: 'ログインしてください',
  cantAccess: 'アクセス権がありません',
  notFound: 'イベントがありません',
};
