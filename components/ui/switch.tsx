import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';
import { cx } from '@/lib/class-names';

const thumbLayoutStyle = 'block w-[21px] h-[21px]';
const thumbDesignStyle = 'bg-white rounded-full h-[25px] w-[42px]';
const thumbAnimationStyle =
  'transition-transform duration-100 translate-x-0.5 data-[state=checked]:translate-x-[19px] will-change-[transform,opacity] ease-in-out';
const switchThumbVariants = cva([thumbLayoutStyle, thumbDesignStyle, thumbAnimationStyle].join(' '), {
  variants: {
    variant: {
      default: '',
      warning: '',
      none: '',
    },
    shadow: {
      default: 'shadow-focus shadow',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    shadow: 'default',
  },
});

type SwitchThumbVariants = VariantProps<typeof switchThumbVariants>;

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Thumb>,
  SwitchPrimitives.SwitchProps & SwitchThumbVariants
>(({ className, variant, shadow, children, ...props }, ref) => (
  <SwitchPrimitives.Thumb className={cx(switchThumbVariants({ variant, shadow, className }))} ref={ref} {...props}>
    {children}
  </SwitchPrimitives.Thumb>
));
SwitchThumb.displayName = SwitchPrimitives.Thumb.displayName;

const rootLayoutStyle = 'relative outline-none cursor-default';
const rootDesignStyle = 'h-[25px] w-[42px] cursor-pointer rounded-full';
const rootAnimationStyle = 'transition will-change-[transform,opacity] ease-in-out';
const disabledStyle = 'disabled:cursor-not-allowed disabled:opacity-60';
const switchRootVariants = cva([rootLayoutStyle, rootDesignStyle, rootAnimationStyle, disabledStyle].join(' '), {
  variants: {
    variant: {
      default: 'bg-input data-[state=checked]:bg-primary',
      warning: 'bg-input data-[state=checked]:bg-destructive',
      accent: 'bg-input data-[state=checked]:bg-accent',
      none: '',
    },
    shadow: {
      default: 'shadow-focus shadow',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    shadow: 'default',
  },
});

type SwitchRootVariants = VariantProps<typeof switchRootVariants>;

const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchPrimitives.SwitchProps & SwitchRootVariants
>(({ className, variant, shadow, children, ...props }, ref) => (
  <SwitchPrimitives.Root className={cx(switchRootVariants({ variant, shadow, className }))} ref={ref} {...props}>
    {children}
  </SwitchPrimitives.Root>
));
SwitchRoot.displayName = SwitchPrimitives.Root.displayName;

export { SwitchRoot, switchRootVariants, SwitchThumb, switchThumbVariants };
export type { SwitchRootVariants, SwitchThumbVariants };
