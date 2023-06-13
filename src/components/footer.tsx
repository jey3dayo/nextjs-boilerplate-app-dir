import { env } from '@/env.mjs';

export default function Footer() {
  return (
    <footer className="flex h-[4vh] min-h-[1.5rem] items-center justify-center border-t border-dark/20 dark:border-light/10">
      <span className="text-sm text-dark dark:text-medium">
        <span className="px-0.5">©</span>
        <span>2023 {env.NEXT_PUBLIC_APP_NAME ?? ''}, Inc.</span>
      </span>
    </footer>
  );
}
