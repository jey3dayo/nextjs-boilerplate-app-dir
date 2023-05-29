import classNames from '@/lib/class-names';

export default function Label(props: { className?: string; htmlFor: string; children: string }) {
  return (
    <label
      className={classNames('mb-2 block text-sm font-bold text-dark dark:text-light', props.className ?? '')}
      htmlFor={props.htmlFor}
    >
      {props.children}
    </label>
  );
}
