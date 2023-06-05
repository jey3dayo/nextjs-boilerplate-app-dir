import React from 'react';
import Link from 'next/link';
import Logo from '@/components/common/logo';
import Popover from '@/components/header/popover';
import Menu from '@/components/user-menu';
import { subTitle } from '@/config';
import { navigation } from '@/constants';
import { env } from '@/env.mjs';
import classNames from '@/lib/class-names';
import { getCurrentUser } from '@/lib/next-auth/session';

const appName = env.NEXT_PUBLIC_APP_NAME;
const height = 'h-[8vh] md:h-[7vh]';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <div>
      <nav
        className={classNames(
          'flex flex-wrap items-center justify-between bg-dark/90 px-2 @container md:fixed md:left-0 md:top-0 md:w-full',
          height,
        )}
      >
        <Link href="/" className="mr-6 flex shrink-0 items-center text-white">
          <div className="mx-auto h-auto w-10 @md:h-auto @md:w-16">
            <Logo />
          </div>
          <div className="pb-2 pl-2">
            <div className="pt-0 text-xl font-semibold tracking-wide">{appName}</div>
            <div className="text-xs font-semibold tracking-tighter">{subTitle}</div>
          </div>
        </Link>

        <Popover />

        <div className="hidden w-full @md:flex @md:w-auto @md:items-center @md:justify-between">
          <div className="grow text-lg">
            {navigation.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="mx-3 mt-0 inline-block rounded-md px-3 py-2 font-medium text-light hover:bg-dark hover:text-white"
                aria-current="page"
              >
                {v.name}
              </Link>
            ))}
          </div>
          <Menu user={user} />
        </div>
      </nav>
      {/* FIXME: height固定*/}
      <div className={classNames('hidden md:flex', height)} />
    </div>
  );
}
