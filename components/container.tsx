import { classNames } from '@/lib/class-names';

export function Container(props: ReactProps) {
  return (
    <div className={classNames('relative isolate overflow-hidden px-1 py-0 md:py-2 lg:px-8', props.className)}>
      {props.children}
    </div>
  );
}

export function HeroContainer(props: ReactProps) {
  return (
    <div className={classNames('container isolate flex grow overflow-hidden', props.className)}>{props.children}</div>
  );
}
