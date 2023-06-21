import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

export function SessionProvider(props: ReactProps) {
  return <NextAuthSessionProvider>{props.children}</NextAuthSessionProvider>;
}
