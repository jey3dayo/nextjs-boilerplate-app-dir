import React from 'react';
import { Session } from 'next-auth';
import Avatar from '@/components/avatar';
import { Button, ButtonVariants } from '@/components/ui/button';
import { Icons, iconSizes } from '@/components/ui/icons';
import { color } from '@/styles/colors';

const defaultIconColor = color.light;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  iconColor?: string;
}

const MenuIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, variant, iconColor, ...props }, ref) => (
    <Button className={className} variant={variant} size={size} aria-label="メニュー" ref={ref} {...props}>
      <Icons.menu color={iconColor ?? defaultIconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
MenuIconButton.displayName = 'MenuIconButton';

const DarkIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, variant, iconColor, ...props }, ref) => (
    <Button className={className} variant={variant} size={size} aria-label="ダークモード" ref={ref} {...props}>
      <Icons.moon color={iconColor ?? defaultIconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
DarkIconButton.displayName = 'DarkIconButton';

const LightIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, variant, iconColor, ...props }, ref) => (
    <Button className={className} variant={variant} size={size} aria-label="ライトモード" ref={ref} {...props}>
      <Icons.moon color={iconColor ?? defaultIconColor} size={size ? iconSizes[size] : undefined} />
    </Button>
  ),
);
LightIconButton.displayName = 'LightIconButton';

export interface AvatarIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  user?: Session['user'];
}
const AvatarIconButton = React.forwardRef<HTMLButtonElement, AvatarIconButtonProps>((props, ref) => (
  <Button variant="avatar" shadow="dark" aria-label="Customise options" ref={ref} {...props}>
    <Avatar name={props.user?.name} src={props.user?.image} />
  </Button>
));
AvatarIconButton.displayName = 'AvatarIconButton';

export { AvatarIconButton, MenuIconButton, DarkIconButton, LightIconButton };
