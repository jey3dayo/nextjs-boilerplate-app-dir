import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Logo from '@/../public/dalle-cap.svg';
import UserIcon from '@/components/common/user-icon';
import { navigation } from '@/components/header/constants';
import Menu from '@/components/header/menu';
import Popover from '@/components/header/popover';
import { subTitle } from '@/config';
import { env } from '@/env.mjs';

const appName = env.NEXT_PUBLIC_APP_NAME;

export default function Header(): React.JSX.Element {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-primary p-2 @container">
      <Link href="/">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <span className="fill-current">
            <Image
              className="mx-auto h-12 w-12 rounded-full md:h-auto md:w-20 md:rounded-none"
              src={Logo}
              alt="Logo"
              width="50"
              height="32"
              priority
            />
          </span>
          <div className="pb-2 pl-2">
            <div className="pt-0 text-xl font-semibold tracking-wide">{appName}</div>
            <div className="text-xs font-semibold tracking-tighter">{subTitle}</div>
          </div>
        </div>
      </Link>

      <Popover />

      <div className="hidden w-full grow @md:flex @md:w-auto @md:items-center">
        <div className="grow text-lg">
          {navigation.map(v => (
            <Link
              key={v.href}
              href={v.href}
              className="mx-3 mt-0 inline-block rounded-md px-3 py-2 font-medium text-neutral-200 hover:bg-neutral-400 hover:text-white"
              aria-current="page"
            >
              {v.name}
            </Link>
          ))}
        </div>
        <Menu>
          <Suspense fallback={<>loading</>}>
            {/* @ts-expect-error Server Component */}
            <UserIcon className="h-8 w-8" />
          </Suspense>
        </Menu>
      </div>
    </nav>
  );
}
