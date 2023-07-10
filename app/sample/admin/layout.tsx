import { AdminOnly } from '@/components/access-control';

export const metadata = {
  title: '管理者ページ',
  description: 'サンプル実装',
};

export default function RootLayout(props: ReactProps) {
  return <AdminOnly>{props.children}</AdminOnly>;
}
