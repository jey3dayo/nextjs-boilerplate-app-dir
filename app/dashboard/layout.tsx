import Layout from '@/components/layout';

export const metadata = {
  title: 'ダッシュボード',
};

export default function RootLayout(props: ReactProps) {
  return <Layout>{props.children}</Layout>;
}
