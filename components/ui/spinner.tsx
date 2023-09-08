import { Icons } from '@/components/ui/icon';

export function Spinner() {
  return (
    <Icons.loader size="sm" aria-hidden="true" aria-label="読込中" className="h-60 w-60 animate-spin text-foreground" />
  );
}
