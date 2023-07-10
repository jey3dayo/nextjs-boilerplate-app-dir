import { Layout } from '@/components/layout';
import { Provider } from '@/components/provider';
import { titles } from '@/constants';

export const metadata = {
  title: titles.errorPage,
};

export default function RootLayout(props: ReactProps) {
  return (
    <Provider>
      <Layout>{props.children}</Layout>
    </Provider>
  );
}
