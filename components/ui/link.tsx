import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { classNames } from '@/lib/class-names';

const variants = cva('', {
  variants: {
    variant: {
      default: '',
      outline: 'shadow-focus mx-3 mt-0 inline-block rounded-md px-3 py-2 font-medium text-light hover:bg-dark',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Variants = VariantProps<typeof variants>;

interface Props extends React.LinkHTMLAttributes<HTMLLinkElement>, Variants {}

const Link = React.forwardRef<HTMLLinkElement, Props>(({ className, variant, children, ...props }, ref) => {
  return (
    <Link className={classNames(variants({ variant, className }))} ref={ref} {...props}>
      {children}
    </Link>
  );
});
Link.displayName = 'Link';

export { Link, variants as linkVariants };
export type { Props as LinkProps, Variants as LinkVariants };
