'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cx } from '@/lib/class-names';

const DropdownMenuRoot = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuArrow = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.DropdownMenuArrow>,
  DropdownMenuPrimitive.DropdownMenuArrowProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.DropdownMenuArrow ref={ref} className={cx('fill-white', className)} {...props} />
));
DropdownMenuArrow.displayName = DropdownMenuPrimitive.DropdownMenuArrow.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuPrimitive.DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cx('bg-theme-inverse mx-1 my-1 h-px', className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuPrimitive.DropdownMenuLabelProps & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(
      'px-2 pt-1 leading-5',
      'text-theme-accent select-none text-xs font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuPrimitive.DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cx(
      'min-w-8 z-50 mr-1 p-1',
      'theme rounded-md border text-popover-foreground shadow-md',
      'will-change-[transform] animate-in',
      'data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className,
    )}
    {...props}
  />
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuPrimitive.DropdownMenuItemProps & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(
      'item-center group relative mx-1 flex px-2 py-1 text-sm',
      'cursor-default select-none rounded-sm outline-none transition-colors',
      'data-[highlighted]:bg-theme-neutral data-[highlighted]:text-light',
      'data-[disabled]:pointer-events-none data-[disabled]:text-accentcolor-800 data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuArrow,
};
