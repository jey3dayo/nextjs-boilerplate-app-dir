import { AdminOnly } from '@/components/access-control';
import { Layout } from '@/components/layout';
import { Provider } from '@/components/provider';

export const metadata = {
  title: '管理画面',
  description: 'ユーザや予定の管理',
};

export default function RootLayout(props: ReactProps) {
  return (
    <Provider>
      <Layout>
        <AdminOnly>{props.children}</AdminOnly>
      </Layout>
    </Provider>
  );
}
