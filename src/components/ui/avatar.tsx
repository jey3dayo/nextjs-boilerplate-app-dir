import * as React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import classNames from '@/lib/class-names';

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof Avatar.Root>,
  React.ComponentPropsWithoutRef<typeof Avatar.Root>
>(({ className, ...props }, ref) => (
  <Avatar.Root
    ref={ref}
    className={classNames(
      'inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full bg-dark align-middle',
      className,
    )}
    {...props}
  />
));
AvatarRoot.displayName = Avatar.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Avatar.Image>,
  React.ComponentPropsWithoutRef<typeof Avatar.Image>
>(({ className, ...props }, ref) => (
  <Avatar.Image
    ref={ref}
    className={classNames('h-full w-full rounded-[inherit] object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = Avatar.Root.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Avatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof Avatar.Fallback>
>(({ className, ...props }, ref) => (
  <Avatar.Fallback
    ref={ref}
    delayMs={200}
    className={classNames('flex h-full w-full items-center justify-center bg-light', className)}
    {...props}
  />
));
AvatarImage.displayName = Avatar.Root.displayName;

export { AvatarRoot, AvatarImage, AvatarFallback };
