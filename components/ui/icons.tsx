import {
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  HelpCircle,
  Loader2,
  Menu,
  Moon,
  Plus,
  Settings,
  SunMedium,
  User,
  X,
} from 'lucide-react';

const Icons = {
  add: Plus,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  close: X,
  help: HelpCircle,
  menu: Menu,
  moon: Moon,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  user: User,
  warning: AlertTriangle,
};

type Size = 'none' | 'sm' | 'md' | 'lg';

const iconSizes: Record<Size, number | undefined> = {
  none: undefined,
  lg: 28,
  md: 24,
  sm: 20,
};

export { Icons, iconSizes };
export type { Size };
