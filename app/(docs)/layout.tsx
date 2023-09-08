import { Container } from '@/components/container';
import { Layout } from '@/components/layout';

export default function DocsLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
}
