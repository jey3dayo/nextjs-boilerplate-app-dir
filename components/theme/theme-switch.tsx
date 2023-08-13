'use client';

import { Size } from '@/components/ui/icon';
import { DarkIconButton, LightIconButton } from '@/components/ui/icon-button';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from '@/hooks/use-themes';

export function ThemeSwitch({ size = 'sm' }: { size?: Size }) {
  const mounted = useMounted();
  const { resolvedTheme, toggleTheme } = useTheme();

  if (!mounted) return <div className="pl-11" />;

  return resolvedTheme === 'light' ? (
    <LightIconButton className="mx-1" variant="dark" size={size} onClick={toggleTheme} />
  ) : (
    <DarkIconButton className="mx-1" variant="dark" size={size} onClick={toggleTheme} />
  );
}
