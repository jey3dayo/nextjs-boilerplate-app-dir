import { Container } from '@/components/container';
import { titles } from '@/constants';

export const metadata = {
  title: titles.users,
};

export default function RootLayout(props: RootLayoutProps) {
  return <Container>{props.children}</Container>;
}
