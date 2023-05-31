import Image from 'next/image';
import { UserIcon } from '@heroicons/react/20/solid';
import classNames from '@/lib/class-names';
import { getCurrentUser } from '@/lib/next-auth/session';

// TODO: ログアウトしてもserverSessionが生きてるので、revokeできるようにする
export default async function CustomUserIcon({ className }: { className: string }) {
  const user = await getCurrentUser();

  return user?.image ? (
    <Image
      className={classNames('cursor-pointer rounded-full bg-light object-scale-down dark:bg-dark', className)}
      src={user.image}
      alt="User icon"
      width={32}
      height={32}
    />
  ) : (
    <UserIcon fill="currentColor" className={classNames('text-white', className)} />
  );
}
