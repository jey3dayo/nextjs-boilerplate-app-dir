'use client';

import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/ui/icons';
import { color } from '@/styles/colors';

export default function Avatar(props: { name: string | undefined; src: string | undefined }) {
  return (
    <AvatarRoot>
      <AvatarImage src={props.src} alt={props.name} />
      <AvatarFallback>
        <Icons.user color={color.dark} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
