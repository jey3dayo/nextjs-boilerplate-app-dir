import Image from 'next/image';
import { UserIcon } from '@heroicons/react/20/solid';
import classNames from '@/lib/class-names';
import { getServerSession } from '@/lib/next-auth/server-utils';

// TODO: ログアウトしてもserverSessionが生きてるので、revokeできるようにする
export default async function CustomUserIcon({ className }: { className: string }) {
  const session = await getServerSession();
  return session?.user?.image ? (
    <Image
      className={classNames('cursor-pointer rounded-full bg-light object-scale-down dark:bg-dark', className)}
      src={session.user.image}
      alt="User icon"
      width={32}
      height={32}
    />
  ) : (
    <UserIcon fill="currentColor" className={classNames('text-white', className)} />
  );
}
