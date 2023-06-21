import Link from 'next/link';
import { Avatar } from '@/components/avatar';
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
import { SignInOut } from '@/components/user-menu/sign-in-out';
import { SwitchTheme } from '@/components/user-menu/switch-theme';
import { profileNavigation as navigation } from '@/constants';
import { getCurrentUser } from '@/lib/next-auth/session';

export async function UserMenu() {
  const user = await getCurrentUser();

  return (
    <DropdownMenuRoot modal={false}>
      <DropdownMenuTrigger className="shadow-focus rounded-full">
        <Avatar
          name={user?.name ?? null}
          image={user?.image ?? null}
          aria-label="Customise options"
          className="inline-block"
        />
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
            <SwitchTheme />
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignInOut isLogin={!!user?.name} />
          </DropdownMenuItem>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
