import { useInView } from 'react-intersection-observer';
import { classNames } from '@/lib/class-names';

export function InView(props: ReactProps) {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={classNames(
        'transition-all will-change-[transform,opacity] duration-300',
        inView ? 'opacity-100' : 'opacity-0',
        inView && 'animate-in slide-in-from-bottom-40 ease-in-out',
      )}
    >
      {props.children}
    </div>
  );
}
