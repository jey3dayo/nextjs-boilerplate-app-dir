import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider(props: ReactProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </NextThemesProvider>
  );
}
