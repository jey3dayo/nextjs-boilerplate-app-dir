'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames from '@/lib/class-names';

const DropdownMenuRoot = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuArrow = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.DropdownMenuArrow>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.DropdownMenuArrow>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.DropdownMenuArrow ref={ref} className={classNames('fill-white', className)} {...props} />
));
DropdownMenuArrow.displayName = DropdownMenuPrimitive.DropdownMenuArrow.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={classNames('mx-1 my-1 h-px bg-dark', className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={classNames('px-2 pt-1 text-xs font-semibold leading-[20px] text-accent-600', inset && 'pl-8', className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={classNames(
      'text-popover-foreground z-50 mr-[5px] min-w-[8rem] rounded-md border bg-light p-1 shadow-md',
      'will-change-[transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className,
    )}
    {...props}
  />
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={classNames(
      'focus:bg-accent focus:text-accent-foreground group relative mx-1 flex cursor-default select-none items-center rounded-sm px-2 py-1 text-sm text-dark outline-none transition-colors',
      'data-[disabled]:pointer-events-none data-[highlighted]:bg-dark data-[disabled]:text-accent-800 data-[highlighted]:text-light data-[disabled]:opacity-50',
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
