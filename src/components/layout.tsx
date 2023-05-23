import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Layout({ children }: ReactProps): React.JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
