import { classNames } from '@/lib/class-names';

export function HeroContainer(props: ReactProps) {
  return <div className={classNames('isolate flex grow overflow-hidden', props.className)}>{props.children}</div>;
}
