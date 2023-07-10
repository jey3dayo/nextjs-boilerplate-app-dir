import { Layout } from '@/components/layout';
import { titles } from '@/constants';

export const metadata = {
  title: titles.dashboard,
};

export default function RootLayout(props: ReactProps) {
  return <Layout>{props.children}</Layout>;
}
