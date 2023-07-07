import { ContentRoot } from '@/components/content-root';
import { Layout } from '@/components/layout';

export const metadata = {
  title: 'サンプル',
  description: 'サンプル実装',
};

export default function RootLayout(props: ReactProps) {
  return (
    <Layout>
      <ContentRoot>{props.children}</ContentRoot>
    </Layout>
  );
}
