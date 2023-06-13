'use client';

import { User } from 'next-auth';
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/ui/icons';
import { color } from '@/styles/colors';

export default function AvatarIcon(props: { name: User['name']; src: User['image'] }) {
  return (
    <AvatarRoot>
      <AvatarImage src={props?.src} alt={props?.name} />
      <AvatarFallback>
        <Icons.user color={color.dark} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
