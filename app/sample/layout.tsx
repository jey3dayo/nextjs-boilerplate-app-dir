import { HeroContentRoot } from '@/components/content-root';
import { HeroLayout } from '@/components/layout';

export const metadata = {
  title: 'サンプル',
  description: 'サンプル実装',
};

export default function RootLayout(props: ReactProps) {
  return <HeroLayout>{props.children}</HeroLayout>;
}
