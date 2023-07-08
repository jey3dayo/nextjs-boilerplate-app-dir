'use client';

import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { MenuIconButton } from '@/components/ui/icon-button';
import {
  PopoverAnchor,
  PopoverAnchorChild,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useCurrentUser } from '@/hooks/use-next-auth';
import { classNames } from '@/lib/class-names';
import { getNavigationByRole } from '@/lib/navigation';

export function Popover(): JSX.Element {
  const { status, user } = useCurrentUser();
  const navigation = getNavigationByRole(user?.role);

  return (
    <PopoverRoot modal={false}>
      <PopoverTrigger asChild>
        <MenuIconButton variant="dark" size="md" />
      </PopoverTrigger>
      <PopoverAnchor asChild>
        <PopoverAnchorChild />
      </PopoverAnchor>
      <PopoverPortal>
        <PopoverContent>
          <div className="mt-9">
            <nav className="grid gap-y-8">
              {navigation.map((v) => (
                <Link
                  key={v.name}
                  href={v.href}
                  className={classNames(
                    '-my-3 flex items-center rounded-md p-3',
                    'hover:bg-dark/50 hover:text-light dark:hover:bg-light/50 dark:hover:text-light',
                  )}
                >
                  <span className="ml-3 text-base font-medium">{v.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mb-2 mt-6">
            <Link
              href="#"
              className={classNames(
                'flex w-full items-center justify-center rounded-md px-4 py-2',
                'border border-transparent bg-dark shadow-sm hover:bg-dark dark:bg-light',
              )}
            >
              <span className="font-medium text-light dark:text-dark">
                {status === 'authenticated' ? (
                  <span onClick={() => signOut()}>サインアウト</span>
                ) : (
                  <span onClick={() => signIn()}>サインイン</span>
                )}
              </span>
            </Link>
          </div>
          <PopoverClose />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  );
}
