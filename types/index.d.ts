import type { ReactElement } from 'react';
import type { NextPage, NextPageWithLayout } from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
}

declare module 'next/app' {
  type AppPropsWithLayout<P = object> = AppProps<P> & {
    Component: NextPageWithLayout<P>;
  };
}
