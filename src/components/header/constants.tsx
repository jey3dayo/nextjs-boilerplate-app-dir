type Navigation = {
  name: string;
  href: string;
  current?: boolean;
};

export const navigation: Navigation[] = [
  { name: 'example1', href: '#example1', current: false },
  { name: 'example2', href: '#example2', current: false },
  { name: 'example3', href: '#example3', current: false },
];

export const profileNavigation: Navigation[] = [
  { name: 'サインイン', href: '/api/auth/signin' },
  { name: 'サインアウト', href: '/api/auth/signout' },
];
