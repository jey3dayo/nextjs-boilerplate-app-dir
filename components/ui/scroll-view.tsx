'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { cn } from '@/lib/class-names';

export function OffsetAdaptiveView({
  className,
  children,
  offset,
  offsetClass,
}: ReactProps & { offset: number; offsetClass: string }) {
  const [{ y }] = useWindowScroll();

  return (
    <div
      className={cn(
        className,
        'transition-all duration-300 will-change-[transform,opacity]',
        Number(y) > offset && offsetClass,
      )}
    >
      {children}
    </div>
  );
}
