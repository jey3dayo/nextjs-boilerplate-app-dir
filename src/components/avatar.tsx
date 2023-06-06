'use client';
import { User } from 'next-auth';
import { UserIcon } from 'lucide-react';
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { colors } from '@/styles/colors';

export default function AvatarIcon(props: { name: User['name']; src: User['image'] }) {
  return (
    <AvatarRoot>
      <AvatarImage src={props?.src} alt={props?.name} />
      <AvatarFallback>
        <UserIcon color={colors.dark} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
