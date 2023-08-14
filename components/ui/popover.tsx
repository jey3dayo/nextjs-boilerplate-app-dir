'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cva, VariantProps } from 'class-variance-authority';
import { Icon, iconSizes } from '@/components/ui/icon';
import { cx } from '@/lib/class-names';

const PopoverRoot = PopoverPrimitive.Root;
const PopoverPortal = PopoverPrimitive.Portal;

const PopoverAnchor = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Anchor>,
  PopoverPrimitive.PopoverAnchorProps
>(({ ...props }, ref) => <PopoverPrimitive.Anchor ref={ref} {...props} />);
PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName;

const popoverAnchorChildVariants = cva('', {
  variants: {
    variant: {
      default: 'absolute left-0 top-2 w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type PopoverAnchorChildVariants = VariantProps<typeof popoverAnchorChildVariants>;

interface PopoverAnchorChildProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof popoverAnchorChildVariants> {}

const PopoverAnchorChild = React.forwardRef<HTMLDivElement, PopoverAnchorChildProps>(
  ({ className, variant, ...props }, ref) => {
    return <div className={cx(popoverAnchorChildVariants({ variant, className }))} ref={ref} {...props} />;
  },
);
PopoverAnchorChild.displayName = 'PopoverAnchorChild';

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverPrimitive.PopoverContentProps & {
    sticky?: 'always';
  }
>(({ className, sticky, children, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    sticky={sticky ?? 'always'}
    className={cx(
      className,
      'theme focus shadow-focus w-[94vw] rounded px-8 py-4 opacity-95',
      'state-open-slide-in transition will-change-[transform,opacity] animate-in',
    )}
    {...props}
  >
    <div className="flex flex-col gap-4 px-2">{children}</div>
  </PopoverPrimitive.Content>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const popoverTriggerVariants = cva('', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type PopoverTriggerVariants = VariantProps<typeof popoverTriggerVariants>;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverPrimitive.PopoverTriggerProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Trigger className={cx(popoverTriggerVariants({ className }))} ref={ref} {...props} />
));
PopoverTrigger.displayName = 'PopoverTrigger';

const popoverCloseVariants = cva('', {
  variants: {
    variant: {
      default: cx(
        'absolute inline-flex justify-center items-center',
        'rounded cursor-default shadow-focus',
        'right-1 top-1 h-8 w-8',
        'bg-medium-hover',
      ),
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type PopoverCloseVariants = VariantProps<typeof popoverCloseVariants>;

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  PopoverPrimitive.PopoverCloseProps & {
    variant?: 'default';
  }
>(({ className, variant, children, ...props }, ref) => (
  <PopoverPrimitive.Close
    className={cx(popoverCloseVariants({ variant, className }))}
    ref={ref}
    aria-label="メニューを閉じる"
    {...props}
  >
    {children ? children : <Icon name="x" className="text-theme-inverse" size={iconSizes['md']} />}
  </PopoverPrimitive.Close>
));
PopoverClose.displayName = 'PopoverClose';

export { PopoverRoot, PopoverTrigger, PopoverAnchor, PopoverPortal, PopoverClose, PopoverAnchorChild, PopoverContent };
export type { PopoverAnchorChildProps, PopoverAnchorChildVariants, PopoverTriggerVariants, PopoverCloseVariants };
