import { ContentRoot } from '@/components/content-root';
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
        <ContentRoot>{props.children}</ContentRoot>
      </Layout>
    </Provider>
  );
}
