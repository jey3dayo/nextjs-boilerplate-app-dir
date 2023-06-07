'use client';

import SessionProvider from '@/components/provider/session-provider';
import ThemeProvider from '@/components/provider/theme-provider';
import TrackProvider from '@/components/provider/track-provider';

export default function Provider(props: ReactProps) {
  return (
    <SessionProvider>
      <TrackProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </TrackProvider>
    </SessionProvider>
  );
}
