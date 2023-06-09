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
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { IconButton } from '@/components/ui/icon-button';
import { profileNavigation as navigation } from '@/constants';

export default function UserMenu({ user }: { user: Session['user'] | undefined }) {
  return (
    <DropdownMenuRoot modal={false}>
      <DropdownMenuTrigger asChild>
        <IconButton variant="avatar" shadow="dark" aria-label="Customise options">
          <Avatar name={user?.name} src={user?.image} />
        </IconButton>
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
