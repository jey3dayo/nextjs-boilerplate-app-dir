'use client';

import { Size } from '@/components/ui/icon';
import { DarkIconButton, LightIconButton } from '@/components/ui/icon-button';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from '@/hooks/use-themes';

export function ThemeSwitch({ size = 'sm' }: { size?: Size }) {
  const mounted = useMounted();
  const { resolvedTheme, toggleTheme } = useTheme();

  const DarkIconBtn = () => <DarkIconButton className="mx-1 bg-weak-foreground" size={size} onClick={toggleTheme} />;
  const LightIconBtn = () => <LightIconButton className="mx-1 bg-weak-foreground" size={size} onClick={toggleTheme} />;

  if (!mounted) return <DarkIconBtn />;

  return resolvedTheme === 'dark' ? <DarkIconBtn /> : <LightIconBtn />;
}
