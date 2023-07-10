'use client';

import { Bars } from 'react-loader-spinner';
import { color } from '@/styles/colors';

const size = 80;

export function Loader() {
  return (
    <Bars
      height={size}
      width={size}
      color={color.dark}
      ariaLabel="読込中"
      wrapperClass="flex min-h-screen flex-1 flex-col items-center px-4"
    />
  );
}
