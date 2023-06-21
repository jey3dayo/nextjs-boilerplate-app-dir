'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-themes';

export function SwitchTheme() {
  const { toggleTheme } = useTheme();

  return <DropdownMenuItem onClick={toggleTheme}>テーマ切替</DropdownMenuItem>;
}
