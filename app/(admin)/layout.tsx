import { AdminOnly } from '@/components/access-control';
import { Layout } from '@/components/layout';
import { titles } from '@/constants';

export const metadata = {
  title: titles.admin,
};

export default function RootLayout(props: ReactProps) {
  return (
    <Layout>
      <AdminOnly>{props.children}</AdminOnly>
    </Layout>
  );
}
