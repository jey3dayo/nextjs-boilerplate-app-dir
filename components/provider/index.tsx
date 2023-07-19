'use client';

import { SessionProvider } from '@/components/provider/session-provider';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { TrackProvider } from '@/components/provider/track-provider';
import { Toaster } from '@/components/ui/toaster';

export function Provider(props: ReactProps) {
  return (
    <SessionProvider>
      <TrackProvider>
        <ThemeProvider>
          {props.children}
          <Toaster />
        </ThemeProvider>
      </TrackProvider>
    </SessionProvider>
  );
}
