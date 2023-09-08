import * as React from 'react';
import { Button, ButtonVariants } from '@/components/ui/button';
import { Icons, iconSizes } from '@/components/ui/icon';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  iconColor?: string;
}

const MenuIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, iconColor, ...props }, ref) => (
    <Button className={className} variant="icon" size={size} aria-label="メニュー" ref={ref} {...props}>
      <Icons.menu color={iconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
MenuIconButton.displayName = 'MenuIconButton';

const DarkIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, iconColor, ...props }, ref) => (
    <Button className={className} variant="icon" size={size} aria-label="ダークモード" ref={ref} {...props}>
      <Icons.moon color={iconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
DarkIconButton.displayName = 'DarkIconButton';

const LightIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, iconColor, ...props }, ref) => (
    <Button className={className} variant="icon" size={size} aria-label="ライトモード" ref={ref} {...props}>
      <Icons.sun color={iconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
LightIconButton.displayName = 'LightIconButton';

const CloseIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, iconColor, ...props }, ref) => (
    <Button className={className} variant="icon" size={size} aria-label="閉じる" ref={ref} {...props}>
      <Icons.x color={iconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
CloseIconButton.displayName = 'CloseIconButton';

export { MenuIconButton, DarkIconButton, LightIconButton, CloseIconButton };
export type { IconButtonProps };
