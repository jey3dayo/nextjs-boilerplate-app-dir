import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { VariantProps, cva } from 'class-variance-authority';
import { InputNames } from '@/@types/ui';
import { classNames } from '@/lib/class-names';

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

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & Variants, 'htmlFor'> {
  htmlFor: InputNames;
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, Props>(
  ({ className, htmlFor, variant, children, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      htmlFor={htmlFor}
      className={classNames(variants({ variant, className }))}
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
export type { Props as LabelProps, Variants as LabelVariants };
