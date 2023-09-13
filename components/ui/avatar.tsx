import * as React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import type { AvatarFallbackProps, AvatarImageProps, AvatarProps } from '@radix-ui/react-avatar';
import { cn } from '@/lib/class-names';

const AvatarRoot = React.forwardRef<React.ElementRef<typeof Avatar.Root>, AvatarProps>(
  ({ className, ...props }, ref) => (
    <Avatar.Root
      ref={ref}
      className={cn(
        'inline-flex h-9 w-9 select-none items-center justify-center overflow-hidden rounded-full bg-dark align-middle',
        className,
      )}
      {...props}
    />
  ),
);
AvatarRoot.displayName = Avatar.Root.displayName;

const AvatarImage = React.forwardRef<React.ElementRef<typeof Avatar.Image>, AvatarImageProps>(
  ({ src, alt, className, ...props }, ref) => (
    <Avatar.Image
      ref={ref}
      alt={alt ?? undefined}
      src={src ?? undefined}
      className={cn('h-full w-full rounded-[inherit] object-cover', className)}
      {...props}
    />
  ),
);
AvatarImage.displayName = Avatar.Image.displayName;

const AvatarFallback = React.forwardRef<React.ElementRef<typeof Avatar.Fallback>, AvatarFallbackProps>(
  ({ delayMs, className, ...props }, ref) => (
    <Avatar.Fallback
      ref={ref}
      delayMs={delayMs ?? 600}
      className={cn('flex h-full w-full items-center justify-center bg-light', className)}
      {...props}
    />
  ),
);
AvatarFallback.displayName = Avatar.Fallback.displayName;

export { AvatarRoot, AvatarImage, AvatarFallback };
export type { AvatarProps };
