import { useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Theme } from '@/types/next-themes';

const defaultTheme = 'dark';

export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    setTheme(resolvedTheme ?? defaultTheme);
  }, [setTheme, resolvedTheme]);

  return {
    theme: theme as Theme,
    setTheme: setTheme as (theme: Theme) => void,
    resolvedTheme: resolvedTheme as Theme,
    toggleTheme: toggleTheme,
  };
};
