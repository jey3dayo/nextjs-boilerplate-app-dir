import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { classNames } from '@/lib/class-names';

const layoutStyle = 'appearance-none flex items-center justify-center w-full';
const designStyle = 'leading-tight rounded bg-transparent';
const inputStyle = 'text-theme file:text-sm file:font-medium file:bg-transparent placeholder:text-muted-foreground';
const disabledStyle = 'disabled:cursor-not-allowed disabled:opacity-50';
const animationStyle = 'transition will-change-[transform,opacity] ease-in-out';
const variants = cva([layoutStyle, designStyle, inputStyle, disabledStyle, animationStyle].join(' '), {
  variants: {
    variant: {
      text: 'h-10 px-3 py-2',
      range: 'bg-input-range h-2 cursor-pointer',
      none: '',
    },
    textSize: {
      sm: 'text-sm',
      lg: 'text-lg',
      xs: 'text-xs',
      none: '',
    },
    border: {
      default: 'border file:border-0',
      none: '',
    },
    shadow: {
      default: 'shadow-focus shadow',
      none: '',
    },
    focus: {
      default:
        'focus:border-theme-accent focus:ring-theme-accent focus:outline-none focus:ring-[2px] focus:ring-offset-0',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'text',
    textSize: 'none',
    border: 'default',
    shadow: 'none',
    focus: 'default',
  },
});

type Variants = VariantProps<typeof variants>;

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, Variants {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ type, variant, textSize, border, shadow, focus, className, ...props }, ref) => {
    // 初期化上書
    switch (type) {
      case 'range':
        variant = variant ?? 'range';
        border = border ?? 'none';
        focus = focus ?? 'none';
        break;
      default:
    }
    return (
      <input
        type={type}
        className={classNames(variants({ variant, textSize, border, shadow, focus, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input, variants as inputVariants };
export type { Props as InputProps, Variants as InputVariants };
