import * as React from 'react';
import { Button, ButtonVariants } from '@/components/ui/button';
import { Icon, iconSizes } from '@/components/ui/icon';
import { color } from '@/styles/colors';

const defaultIconColor = color.light;

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  iconColor?: string;
}

const MenuIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, variant, iconColor, ...props }, ref) => (
    <Button className={className} variant={variant} size={size} aria-label="メニュー" ref={ref} {...props}>
      <Icon name="menu" color={iconColor ?? defaultIconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
MenuIconButton.displayName = 'MenuIconButton';

const DarkIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, variant, iconColor, ...props }, ref) => (
    <Button className={className} variant={variant} size={size} aria-label="ダークモード" ref={ref} {...props}>
      <Icon name="moon" color={iconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
DarkIconButton.displayName = 'DarkIconButton';

const LightIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, variant, iconColor, ...props }, ref) => (
    <Button className={className} variant={variant} size={size} aria-label="ライトモード" ref={ref} {...props}>
      <Icon name="sun" color={iconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
LightIconButton.displayName = 'LightIconButton';

export { MenuIconButton, DarkIconButton, LightIconButton };
export type { IconButtonProps };
