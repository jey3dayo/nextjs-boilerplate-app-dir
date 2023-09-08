import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, VariantProps } from 'class-variance-authority';
import { Icons } from '@/components/ui/icon';
import { cx } from '@/lib/class-names';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cx(
      'fixed z-[2147483647] flex flex-col-reverse sm:flex-col',
      'bottom-0 right-0 m-0 w-[390px] max-w-full gap-2 p-[var(--viewport-padding)] [--viewport-padding:_25px]',
      'list-none outline-none',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  cx(
    'grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px]',
    "[grid-template-areas:_'title_action'_'description_action']",
    'pointer-events-auto overflow-hidden transition-all',
  ),
  {
    variants: {
      variant: {
        default: 'border border-border bg-background',
        destructive: 'group border-destructive bg-destructive text-destructive-foreground',
      },
      shadow: {
        default: 'shadow-md',
        none: '',
      },
      animation: {
        default: cx(
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
          'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
          'data-[swipe=move]:transition-none data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
          'data-[swipe=cancel]:translate-x-0',
          'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out',
        ),
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      shadow: 'default',
      animation: 'default',
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, shadow, animation, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cx(toastVariants({ variant, shadow, animation }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={cx('[grid-area:_action]', className)} {...props} />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cx(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <Icons.x className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cx('mb-1 text-sm font-medium text-foreground [grid-area:_title]', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cx('m-0 text-xs leading-[1.3] text-foreground opacity-60 [grid-area:_description]', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
