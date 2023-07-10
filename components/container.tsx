import { classNames } from '@/lib/class-names';

export function Container(props: ReactProps) {
  return <div className={classNames('isolate flex overflow-hidden', props.className)}>{props.children}</div>;
}

export function HeroContainer(props: ReactProps) {
  return <div className={classNames('isolate flex grow overflow-hidden', props.className)}>{props.children}</div>;
}
