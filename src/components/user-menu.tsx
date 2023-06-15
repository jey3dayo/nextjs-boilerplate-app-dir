'use client';

import React from 'react';
import Link from 'next/link';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
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
import { AvatarIconButton } from '@/components/ui/icon-button';
import { profileNavigation as navigation } from '@/constants';
import { useTheme } from '@/hooks/use-themes';

export default function UserMenu({ user }: { user: Session['user'] | undefined }) {
  const { toggleTheme } = useTheme();

  return (
    <DropdownMenuRoot modal={false}>
      <DropdownMenuTrigger asChild>
        <AvatarIconButton user={user} />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent sideOffset={5}>
          <span className="sr-only">ユーザメニュー</span>
          <div className="pointer-events-none flex h-5 select-none items-center justify-center text-sm">
            {user?.name}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>リンク</DropdownMenuLabel>
          {navigation.map((v) => (
            <Link key={v.href} href={v.href}>
              <DropdownMenuItem>{v.name}</DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={toggleTheme}>テーマ切り替え</DropdownMenuItem>
          </DropdownMenuGroup>
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
