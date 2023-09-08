'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Icons } from '@/components/ui/icon';
import { cx } from '@/lib/class-names';

const SelectRoot = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectPortal = SelectPrimitive.Portal;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cx(
      'text-foreground',
      'inline-flex h-10 w-full items-center justify-between px-3 py-2',
      'whitespace-nowrap rounded-md border border-input bg-transparent text-sm leading-none placeholder:text-muted-foreground',
      'data-[placeholder]:text-primary-color-5',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'shadow-focus',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <Icons.chevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cx(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md',
        'bg-popover text-foreground',
        'shadow',
        position === 'popper' && 'translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cx(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cx('py-1.5 pl-6 pr-9', 'text-xs font-semibold leading-6 text-weak', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cx(
      'relative flex h-6 select-none items-center pl-6 pr-9',
      'rounded-md text-xs leading-none text-foreground',
      'data-[highlighted]:bg-primary data-[highlighted]:text-light data-[highlighted]:outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted',
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
      <Icons.check className="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cx('m-1 h-px bg-border', className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.SelectScrollUpButton
    ref={ref}
    className={cx('flex h-6 cursor-default items-center justify-center bg-background text-primary-color-6', className)}
    {...props}
  />
));
SelectScrollUpButton.displayName = SelectPrimitive.SelectScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.SelectScrollDownButton
    ref={ref}
    className={cx('flex h-6 cursor-default items-center justify-center bg-background text-primary-color-6', className)}
    {...props}
  />
));
SelectScrollDownButton.displayName = SelectPrimitive.SelectScrollDownButton.displayName;

const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectViewport>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectViewport>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.SelectViewport ref={ref} className={cx('p-1', className)} {...props} />
));
SelectViewport.displayName = SelectPrimitive.SelectViewport.displayName;

export {
  SelectRoot,
  SelectGroup,
  SelectValue,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectViewport,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
