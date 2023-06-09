'use client';

import { useState, useEffect } from 'react';
import { IconButton } from '@/components/ui/icon-button';
import { iconSizes, Size } from '@/components/ui/icons';
import { Icons } from '@/components/ui/icons';
import { useTheme } from '@/hooks/use-themes';
import { color } from '@/styles/colors';

const iconColor = color.light;

const defaultTheme = 'dark';

const ThemeSwitch = ({ size = 'sm' }: { size?: Size }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setTheme(resolvedTheme ?? defaultTheme);
  }, [setTheme, resolvedTheme]);

  if (!mounted) {
    return (
      <IconButton className="mx-1" variant="dark" size={size}>
        <Icons.moon color={iconColor} size={iconSizes[size]} />
      </IconButton>
    );
  }

  return (
    <IconButton className="mx-1" variant="dark" size={size} onClick={toggleTheme}>
      {theme === 'light' ? (
        <Icons.sun color={iconColor} size={iconSizes[size]} />
      ) : (
        <Icons.moon color={iconColor} size={iconSizes[size]} />
      )}
    </IconButton>
  );
};

export default ThemeSwitch;
