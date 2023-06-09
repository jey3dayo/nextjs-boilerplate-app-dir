import {
  User,
  X,
  type Icon as LucideIcon,
  Menu,
  SunMedium,
  Loader2,
  Settings,
  Plus,
  AlertTriangle,
  HelpCircle,
  Moon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  user: User,
  close: X,
  menu: Menu,
  spinner: Loader2,
  settings: Settings,
  add: Plus,
  warning: AlertTriangle,
  help: HelpCircle,
  sun: SunMedium,
  moon: Moon,
};

export type Size = 'sm' | 'md' | 'lg';

export const iconSizes: Record<Size, number> = {
  lg: 28,
  md: 24,
  sm: 20,
};
