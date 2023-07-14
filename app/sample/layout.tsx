import { HeroLayout } from '@/components/layout';
import { titles } from '@/constants';

export const metadata = {
  title: titles.sample,
};

export default function RootLayout(props: RootLayoutProps) {
  return <HeroLayout>{props.children}</HeroLayout>;
}
