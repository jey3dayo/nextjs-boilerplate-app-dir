'use client';

import { useState, useEffect } from 'react';
import { IconButton } from '@/components/ui/icon-button';
import { Icons } from '@/components/ui/icons';
import { useTheme } from '@/hooks/use-themes';
import { color } from '@/styles/colors';

const iconSize = 20;
const iconColor = color.light;

const defaultTheme = 'dark';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setTheme(resolvedTheme ?? defaultTheme);
  }, []);

  if (!mounted) {
    return (
      <IconButton className="mx-1" variant="dark" size="sm">
        <Icons.moon color={iconColor} size={iconSize} />
      </IconButton>
    );
  }

  return (
    <IconButton className="mx-1" variant="dark" size="sm" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Icons.sun color={iconColor} size={iconSize} />
      ) : (
        <Icons.moon color={iconColor} size={iconSize} />
      )}
    </IconButton>
  );
};

export default ThemeSwitch;
