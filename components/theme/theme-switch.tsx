'use client';

import { Size } from '@/components/ui/icon';
import { DarkIconButton, LightIconButton } from '@/components/ui/icon-button';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from '@/hooks/use-themes';

export function ThemeSwitch({ size = 'sm' }: { size?: Size }) {
  const mounted = useMounted();
  const { resolvedTheme, toggleTheme } = useTheme();

  if (!mounted) return <DarkIconButton className="mx-1" variant="icon" size={size} onClick={toggleTheme} />;

  return resolvedTheme === 'dark' ? (
    <DarkIconButton className="mx-1" variant="icon" size={size} onClick={toggleTheme} />
  ) : (
    <LightIconButton className="mx-1" variant="icon" size={size} onClick={toggleTheme} />
  );
}
