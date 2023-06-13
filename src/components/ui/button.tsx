import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from '@/lib/class-names';

const layoutStyle = 'relative inline-flex items-center justify-center transition-all';
const designStyle = 'rounded';
const focusVisibleStyle =
  'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
// const ringColorStyle = 'ring-offset-red-500 ring-red-500';
const disabledStyle = 'disabled:pointer-events-none disabled:opacity-50';

const variants = cva([layoutStyle, designStyle, focusVisibleStyle, disabledStyle].join(' '), {
  variants: {
    variant: {
      default: 'bg-light hover:bg-light/90 dark:bg-primary-600 hover:dark:bg-primary-600/90',
      accent: 'bg-accent-200  hover:bg-accent-200/90',
      dark: 'bg-primary-500 hover:bg-primary-200/10',
      inherit: 'bg-inherit',
      avatar: 'rounded-full bg-inherit outline-none',
    },
    size: {
      default: '',
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4',
    },
    shadow: {
      default: '',
      dark: 'shadow-[0_2px_10px] shadow-dark focus:shadow-[0_0_0_2px] focus:shadow-light',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    shadow: 'default',
  },
});

type ButtonVariants = VariantProps<typeof variants>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shadow, ...props }, ref) => {
    return <button className={classNames(variants({ variant, size, shadow, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, variants as buttonVariants };
export type { ButtonProps, ButtonVariants };
