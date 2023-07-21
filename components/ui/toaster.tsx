'use client';

import { Button } from '@/components/ui/button';
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
              <Button variant="icon">
                <Icons.close className="h-4 w-4" />
              </Button>
            </ToastAction>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
