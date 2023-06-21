import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export function Layout(props: ReactProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
