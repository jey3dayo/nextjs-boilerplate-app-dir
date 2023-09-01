import { useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Theme } from '@/types/next-themes';
import { defaultTheme } from '@/config';

export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const toggleTheme = () => setTheme(theme === defaultTheme ? 'light' : 'dark');

  useEffect(() => {
    setTheme(resolvedTheme ?? defaultTheme);
  }, [setTheme, resolvedTheme]);

  return {
    theme: theme as Theme,
    setTheme: setTheme as (theme: Theme) => void,
    resolvedTheme: (resolvedTheme ?? defaultTheme) as Theme,
    toggleTheme: toggleTheme,
  };
};
