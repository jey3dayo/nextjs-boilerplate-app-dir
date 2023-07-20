'use client';

import { Icons } from '@/components/ui/icons';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { cx } from '@/lib/class-names';

function prettyDate(date: number | Date | undefined) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(function ({ id, title, action, timestamp, ...props }) {
        return (
          <Toast key={id} {...props}>
            <ToastTitle>{title}</ToastTitle>

            <ToastDescription asChild>
              <time dateTime={timestamp?.toISOString()}>{prettyDate(timestamp)}</time>
            </ToastDescription>

            <ToastAction asChild altText="閉じる">
              <button
                className={cx(
                  'inline-flex h-8 items-center justify-center rounded px-2',
                  'text-theme text-xs font-medium leading-6',
                  'shadow-focus hover:shadow',
                )}
              >
                <Icons.close className="h-4 w-4" />
              </button>
            </ToastAction>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
