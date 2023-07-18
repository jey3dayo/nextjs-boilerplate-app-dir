import { useInView } from 'react-intersection-observer';
import { cx } from '@/lib/class-names';

export function InView(props: ReactProps) {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cx(
        'transition-all duration-300 will-change-[transform,opacity]',
        inView ? 'opacity-100' : 'opacity-0',
        inView && 'ease-in-out animate-in slide-in-from-bottom-40',
      )}
    >
      {props.children}
    </div>
  );
}
