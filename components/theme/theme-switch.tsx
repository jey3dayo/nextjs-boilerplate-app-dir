'use client';

import { Size } from '@/components/ui/icon';
import { DarkIconButton, LightIconButton } from '@/components/ui/icon-button';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from '@/hooks/use-themes';

export function ThemeSwitch({ size = 'sm' }: { size?: Size }) {
  const mounted = useMounted();
  const { resolvedTheme, toggleTheme } = useTheme();

  const DarkIconBtn = () => <DarkIconButton className="mx-1 bg-transparent" size={size} onClick={toggleTheme} />;
  if (!mounted) return <DarkIconBtn />;

  return resolvedTheme === 'dark' ? (
    <DarkIconBtn />
  ) : (
    <LightIconButton className="mx-1 bg-mauve-3/80" size={size} onClick={toggleTheme} />
  );
}
