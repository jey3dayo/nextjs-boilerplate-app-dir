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
  SunMedium,
  User,
  X,
  type LucideIcon,
} from 'lucide-react';

const Icons = {
  x: X,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  user: User,
  check: Check,
  menu: Menu,
  help: HelpCircle,
  warning: AlertTriangle,
  loader: Loader2,
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
export type { LucideIcon as Icon, Size };
