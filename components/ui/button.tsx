import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { classNames } from '@/lib/class-names';

const layoutStyle = 'relative inline-flex items-center justify-center';
const designStyle = 'rounded-lg text-base font-medium';
const disabledStyle = 'disabled:pointer-events-none disabled:opacity-50';
const animationStyle = 'transition will-change-[transform,opacity] ease-in-out';

const variants = cva([layoutStyle, designStyle, disabledStyle, animationStyle].join(' '), {
  variants: {
    variant: {
      default: 'bg-theme-neutral-hover text-light',
      dark: 'bg-medium-hover',
      accent: 'bg-theme-accent-hover text-light',
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
      dark: 'shadow-simple',
    },
    transition: {
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
    transition: '300',
  },
});

type Variants = VariantProps<typeof variants>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, Variants {}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, shadow, transition, ...props }, ref) => {
    return (
      <button className={classNames(variants({ variant, size, shadow, transition, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, variants as buttonVariants };
export type { Props as ButtonProps, Variants as ButtonVariants };
