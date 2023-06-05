import { User } from 'next-auth';
import { UserIcon } from 'lucide-react';
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { palette } from '@/styles';

export default function AvatarIcon(props: { name: User['name']; src: User['image'] }) {
  return (
    <AvatarRoot>
      <AvatarImage src={props?.src ?? undefined} alt={props?.name ?? undefined} />
      <AvatarFallback>
        <UserIcon color={palette.dark} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
