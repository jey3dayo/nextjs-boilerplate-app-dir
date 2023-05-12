import Link from 'next/link';
import React, { Suspense } from 'react';
import { navigation } from '@/components/header/constants';
import Menu from '@/components/header/menu';
import Popover from '@/components/header/popover';
import { Logo } from '@/components/svg';
import { appName } from '@/constants';
import { fetcher } from '@/lib/fetcher';

export default function Header(): React.JSX.Element {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-primary p-3 @container">
      <Link href="/">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <span className="fill-current">
            <Logo size={8} />
          </span>
          <span className="text-xl font-semibold tracking-tight">{appName}</span>
        </div>
      </Link>

      <Popover />

      <div className="hidden w-full grow @md:flex @md:w-auto @md:items-center">
        <div className="grow text-lg">
          {navigation.map(v => (
            <Link
              key={v.href}
              href={v.href}
              className="mx-3 mt-0 inline-block rounded-md px-3 py-2 font-medium text-teal-200 hover:bg-teal-400 hover:text-white"
              aria-current="page"
            >
              {v.name}
            </Link>
          ))}
        </div>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Greeting />
        </Suspense>
        <Menu />
      </div>
    </nav>
  );
}

async function Greeting() {
  const user: User = await fetcher('/api/user', { cache: 'no-store' });
  return <div>{`こんにちは${user.name}さん`}</div>;
}

