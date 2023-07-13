'use client';

import * as React from 'react';
import { User } from '@prisma/client';
import { AvatarFallback, AvatarImage, AvatarProps, AvatarRoot } from '@/components/ui/avatar';
import { Icons } from '@/components/ui/icons';
import { color } from '@/styles/colors';

export const Avatar = React.forwardRef<React.ElementRef<typeof AvatarRoot>, AvatarProps & Pick<User, 'name' | 'image'>>(
  ({ name, image, className, ...props }, ref) => {
    return (
      <AvatarRoot ref={ref} className={className} {...props}>
        <AvatarImage alt={name ?? undefined} src={image ?? undefined} />
        <AvatarFallback>
          <Icons.user color={color.dark} className={className} />
        </AvatarFallback>
      </AvatarRoot>
    );
  },
);
Avatar.displayName = 'Avatar';
