import { Provider } from '@/components/provider';
import { titles } from '@/constants';

export const metadata = {
  title: titles.admin,
};

export default function RootLayout(props: ReactProps) {
  return <Provider>{props.children}</Provider>;
}
