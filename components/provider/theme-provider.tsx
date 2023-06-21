import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider(props: ReactProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </NextThemesProvider>
  );
}
