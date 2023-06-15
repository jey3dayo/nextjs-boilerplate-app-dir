import React from 'react';
import Image from 'next/image';
import logo from 'public/image/dalle-cap.svg';

export default function Logo({
  width,
  height,
  className,
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image src={logo} alt="ロゴ" width={width ?? 100} height={height ?? 80} className={className} priority {...props} />
  );
}
