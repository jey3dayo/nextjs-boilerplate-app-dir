'use client';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

const SessionProvider = (props: ReactProps) => {
  return <NextAuthSessionProvider>{props.children}</NextAuthSessionProvider>;
};

export default SessionProvider;
