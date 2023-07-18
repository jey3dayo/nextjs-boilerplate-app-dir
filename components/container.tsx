import { cx } from '@/lib/class-names';

export function Container(props: ReactProps) {
  return (
    <div className={cx('relative isolate overflow-hidden px-1 py-0 md:py-2 lg:px-8', props.className)}>
      {props.children}
    </div>
  );
}

export function HeroContainer(props: ReactProps) {
  return <div className={cx('container isolate flex grow overflow-hidden', props.className)}>{props.children}</div>;
}
