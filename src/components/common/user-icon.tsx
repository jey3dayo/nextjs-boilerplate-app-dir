import { UserIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import classNames from '@/lib/class-names';

export default async function CustomUserIcon({ className }: { className: string }) {
  const session = await getServerSession();
  return session?.user?.image ? (
    <Image
      className={classNames('cursor-pointer rounded-full bg-primary object-scale-down', className)}
      src={session.user.image}
      alt="User icon"
      width={32}
      height={32}
    />
  ) : (
    <UserIcon className={className} />
  );
}
