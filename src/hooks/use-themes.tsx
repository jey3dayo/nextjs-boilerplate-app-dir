import { useTheme as useNextTheme } from 'next-themes';
import { Theme } from '@/@types/next-themes';

export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  return {
    theme: theme as Theme,
    setTheme: setTheme as (theme: Theme) => void,
    resolvedTheme: resolvedTheme as Theme,
  };
};
