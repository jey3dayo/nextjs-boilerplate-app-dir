import { UserIcon } from '@heroicons/react/20/solid';
import { getServerSession } from 'next-auth/next';
import classNames from '@/lib/class-names';

export default async function CustomUserIcon({ className }: { className: string }) {
  const session = await getServerSession();
  return session ? (
    <img
      className={classNames('cursor-pointer rounded-full object-scale-down', className)}
      src={session?.user?.image ?? undefined}
    />
  ) : (
    <UserIcon className={className} />
  );
}
