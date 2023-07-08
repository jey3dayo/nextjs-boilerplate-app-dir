import { ResponsiveRoot } from '@/components/content-root';
import { Layout } from '@/components/layout';

export const metadata = {
  title: 'ダッシュボード',
};

export default function RootLayout(props: ReactProps) {
  return (
    <Layout>
      <ResponsiveRoot>{props.children}</ResponsiveRoot>
    </Layout>
  );
}
