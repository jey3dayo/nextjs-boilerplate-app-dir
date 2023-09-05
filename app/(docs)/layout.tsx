import { Container } from '@/components/container';
import Header from '@/components/docs/header';
import { HeadlessLayout } from '@/components/layout';

export default function DocsLayout({ children }: RootLayoutProps) {
  return (
    <HeadlessLayout>
      <Header />
      <Container>{children}</Container>
    </HeadlessLayout>
  );
}
