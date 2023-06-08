'use client';

import React from 'react';
import Link from 'next/link';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Avatar from '@/components/avatar';
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuArrow,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { profileNavigation as navigation } from '@/constants';

export default function UserMenu({ user }: { user: Session['user'] | undefined }) {
  return (
    <DropdownMenuRoot modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-dark shadow-[0_2px_10px] shadow-dark outline-none hover:bg-red-300 focus:shadow-[0_0_0_2px] focus:shadow-light"
          aria-label="Customise options"
        >
          <Avatar name={user?.name} src={user?.image} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent sideOffset={5}>
          <span className="sr-only">ユーザメニュー</span>
          <div className="pointer-events-none flex h-5 select-none items-center justify-center text-sm text-dark/90">
            {user?.name}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>リンク</DropdownMenuLabel>
          {navigation.map((v) => (
            <Link key={v.href} href={v.href}>
              <DropdownMenuItem>{v.name}</DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {user ? <div onClick={() => signOut()}>サインアウト</div> : <div onClick={() => signIn()}>サインイン</div>}
          </DropdownMenuItem>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
