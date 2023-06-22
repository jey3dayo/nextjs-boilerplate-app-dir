import { env } from '@/env.mjs';
import { Provider } from '@/components/provider';
import { nextFont } from '@/lib/next-font';
import '@/styles/globals.css';

export const metadata = {
  title: env.NEXT_PUBLIC_APP_NAME,
  description: 'Generated by create next app',
};

export default function RootLayout(props: ReactProps) {
  return (
    <html lang="ja" className={nextFont.className} suppressHydrationWarning={true}>
      <body>
        <Provider>
          <main>{props.children}</main>
        </Provider>
      </body>
    </html>
  );
}
