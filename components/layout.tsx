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

export function HeroLayout(props: ReactProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
