import {
  AlertTriangle,
  HelpCircle,
  Loader2,
  Menu,
  Moon,
  Plus,
  Settings,
  SunMedium,
  User,
  X,
  type Icon,
} from 'lucide-react';

const Icons = {
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

type Size = 'none' | 'sm' | 'md' | 'lg';

const iconSizes: Record<Size, number | undefined> = {
  none: undefined,
  lg: 28,
  md: 24,
  sm: 20,
};

export { Icons, iconSizes };
export type { Icon as LucideIcon, Size };
