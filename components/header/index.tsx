import Link from 'next/link';
import { env } from '@/env.mjs';
import { Popover } from '@/components/header/popover';
import { Logo } from '@/components/logo';
import { ThemeSwitch } from '@/components/theme/theme-switch';
import { UserMenu } from '@/components/user-menu';
import { subTitle } from '@/config';
import { cx } from '@/lib/class-names';
import { getNavigationByRole } from '@/lib/navigation';
import { getCurrentUser } from '@/lib/next-auth/session';

const appName = env.NEXT_PUBLIC_APP_NAME;
const height = 'h-[8vh] md:h-[7vh] min-h-[52px]';

export async function Header() {
  const user = await getCurrentUser();
  const navigation = getNavigationByRole(user?.role);

  return (
    <header className="sticky z-20 border-b bg-background/80 px-0 md:left-0 md:top-0 md:w-full">
      <nav className={cx('flex h-16 flex-wrap items-center justify-between px-3 md:space-x-0 md:px-4', height)}>
        <Link href="/" className="mr-6 flex shrink-0 items-center rounded-sm px-1 text-foreground">
          <div className="mx-auto h-auto w-12 sm:h-auto sm:w-16">
            <Logo />
          </div>
          <div className="ml-2">
            <div className="pt-0 text-xl font-semibold tracking-wide">{appName}</div>
            <div className="text-xs font-semibold tracking-tighter">{subTitle}</div>
          </div>
        </Link>

        <div className="justify-end md:hidden">
          <ThemeSwitch size="md" />
          <Popover />
        </div>

        <div className="hidden w-full md:flex md:w-auto md:items-center md:justify-end">
          <div className="grow text-lg">
            {navigation.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="mx-3 mt-0 inline-block rounded-md px-3 py-2 font-medium hover:bg-background/90"
                aria-current="page"
              >
                {v.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch size="sm" />
          <UserMenu />
        </div>
      </nav>
    </header>
  );
}
