import { cn } from '@/lib/class-names';

export function Container(props: ReactProps) {
  return <div className={cn('container flex-1 px-1 py-0 md:py-2 lg:px-8', props.className)}>{props.children}</div>;
}

export function HeroContainer(props: ReactProps) {
  return <div className={cn('container flex-1', props.className)}>{props.children}</div>;
}
