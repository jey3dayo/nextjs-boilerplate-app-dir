import { env } from '@/env.mjs';

export function Footer() {
  return (
    <footer className="border-gray-color-4 flex h-[4vh] min-h-[1.5rem] items-center justify-center border-t">
      <span className="text-sm text-dark dark:text-medium">
        <span className="px-0.5">©</span>
        <span>2023 {env.NEXT_PUBLIC_APP_NAME ?? ''}, Inc.</span>
      </span>
    </footer>
  );
}
