'use client';

import { useState, useEffect } from 'react';
import { DarkIconButton, LightIconButton } from '@/components/ui/icon-button';
import { Size } from '@/components/ui/icons';
import { useTheme } from '@/hooks/use-themes';

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
    return <DarkIconButton className="mx-1" variant="dark" size={size} />;
  }

  return theme === 'light' ? (
    <LightIconButton className="mx-1" variant="dark" size={size} onClick={toggleTheme} />
  ) : (
    <DarkIconButton className="mx-1" variant="dark" size={size} onClick={toggleTheme} />
  );
};

export default ThemeSwitch;
