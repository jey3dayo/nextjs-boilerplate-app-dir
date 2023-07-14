import { Layout } from '@/components/layout';
import { titles } from '@/constants';

export const metadata = {
  title: titles.dashboard,
};

export default function RootLayout(props: RootLayoutProps) {
  return <Layout>{props.children}</Layout>;
}
