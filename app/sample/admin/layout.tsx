import { AdminOnly } from '@/components/access-control';
import { titles } from '@/constants';

export const metadata = {
  title: titles.dashboard,
};

export default function RootLayout(props: RootLayoutProps) {
  return <AdminOnly>{props.children}</AdminOnly>;
}
