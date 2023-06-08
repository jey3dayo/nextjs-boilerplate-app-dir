import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from '@/lib/class-names';

const layoutStyle = 'relative inline-flex items-center justify-center transition-all';
const designStyle = 'rounded';
const focusVisibleStyle =
  'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
const disabledStyle = 'disabled:pointer-events-none disabled:opacity-50';

const variants = cva([layoutStyle, designStyle, focusVisibleStyle, disabledStyle].join(' '), {
  variants: {
    variant: {
      none: '',
      default: 'bg-light hover:bg-light/90 dark:bg-primary-600 hover:dark:bg-primary-600/90',
      accent: 'bg-accent-200  hover:bg-accent-200/90',
      dark: 'hover:bg-primary-200/10',
      inherit: 'bg-inherit',
    },
    outline: {
      none: '',
      default: 'border',
    },
    size: {
      default: 'p-2',
      sm: 'p-1',
      lg: 'p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    outline: 'none',
  },
});

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, outline, ...props }, ref) => {
    return <button className={classNames(variants({ variant, size, outline, className }))} ref={ref} {...props} />;
  },
);
IconButton.displayName = 'IconButton';

export { IconButton, variants as iconButtonVariants };