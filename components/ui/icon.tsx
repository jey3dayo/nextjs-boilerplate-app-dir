import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};
type Size = 'none' | 'sm' | 'md' | 'lg';

const iconSizes: Record<Size, number | undefined> = {
  none: undefined,
  lg: 28,
  md: 24,
  sm: 20,
};

export { Icon, iconSizes };
export type { Size };
