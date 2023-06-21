'use client';
import React from 'react';

import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/ui/icons';
import { color } from '@/styles/colors';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarRoot>,
  React.ComponentPropsWithoutRef<typeof AvatarRoot> & {
    name: string | undefined;
    src: string | undefined;
  }
>(({ name, src, ...props }, ref) => {
  return (
    <AvatarRoot ref={ref} {...props}>
      <AvatarImage alt={name} src={src} />
      <AvatarFallback>
        <Icons.user color={color.dark} />
      </AvatarFallback>
    </AvatarRoot>
  );
});
Avatar.displayName = 'Avatar';

export default Avatar;
