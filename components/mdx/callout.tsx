import { cx } from '@/lib/class-names';

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export function Callout({ children, icon, type = 'default', ...props }: CalloutProps) {
  return (
    <div
      className={cx('my-6 flex items-start rounded-md border border-l-4 p-4', {
        'border-red-11 bg-red-1': type === 'danger',
        'border-yellow-10 bg-yellow-1': type === 'warning',
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
