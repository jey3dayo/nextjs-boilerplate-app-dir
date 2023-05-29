import Layout from '@/components/layout';
import Provider from '@/components/provider';

export const metadata = {
  title: 'ダッシュボード',
};

export default function RootLayout(props: ReactProps) {
  return (
    <Provider>
      <Layout>{props.children}</Layout>
    </Provider>
  );
}
