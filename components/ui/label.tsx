import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, VariantProps } from 'class-variance-authority';
import { InputNames } from '@/types/ui';
import { cx } from '@/lib/class-names';

const variants = cva('', {
  variants: {
    variant: {
      default: 'block text-sm font-medium',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Variants = VariantProps<typeof variants>;

interface LabelProps extends Omit<LabelPrimitive.LabelProps & Variants, 'htmlFor'> {
  htmlFor: InputNames;
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, htmlFor, variant, children, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} htmlFor={htmlFor} className={cx(variants({ variant, className }))} {...props}>
      {children}
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
export type { LabelProps, Variants as LabelVariants };
