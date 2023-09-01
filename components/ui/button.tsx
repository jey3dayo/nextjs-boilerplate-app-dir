import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cx } from '@/lib/class-names';

const styles = {
  layout: 'relative inline-flex items-center justify-center',
  design: 'rounded-md text-base font-medium',
  disabled: 'disabled:pointer-events-none disabled:opacity-50',
  animation: 'transition will-change-[transform,opacity] ease-in-out',
};

const variants = cva(Object.values(styles).join(' '), {
  variants: {
    variant: {
      default: 'bg-gray-color-8 text-foreground hover:bg-gray-color-7',
      dark: 'bg-weak hover:bg-weak/80',
      accent: 'bg-primary-color-8 text-light hover:bg-primary-color-7',
      icon: 'text-xs font-medium leading-6 text-foreground hover:bg-background/90',
      inherit: 'bg-inherit',
    },
    size: {
      none: '',
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4',
    },
    shadow: {
      none: '',
      default: 'shadow-focus',
      dark: 'shadow-deep',
      icon: 'shadow-focus hover:shadow',
    },
    duration: {
      '0': 'duration-0',
      '100': 'duration-100',
      '200': 'duration-200',
      '300': 'duration-300',
      '1000': 'duration-1000',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'none',
    shadow: 'default',
    duration: '300',
  },
});

type Variants = VariantProps<typeof variants>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, Variants {}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, shadow, duration, ...props }, ref) => {
    if (variant === 'icon') {
      size = 'sm';
      shadow = 'icon';
    }

    return <button className={cx(variants({ variant, size, shadow, duration, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, variants as buttonVariants };
export type { Props as ButtonProps, Variants as ButtonVariants };
