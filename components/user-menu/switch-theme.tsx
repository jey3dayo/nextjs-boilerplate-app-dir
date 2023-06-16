'use client';

import React from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-themes';

export default function MenuItemWithSwitchTheme() {
  const { toggleTheme } = useTheme();

  return <DropdownMenuItem onClick={toggleTheme}>テーマ切替</DropdownMenuItem>;
}
