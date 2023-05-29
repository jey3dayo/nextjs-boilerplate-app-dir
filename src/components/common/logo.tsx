import React from 'react';
import Image from 'next/image';
import logo from 'public/dalle-cap.svg';

export default function Logo({ width, height }: { width?: string; height?: string }) {
  return <Image src={logo} alt="logo" width={Number(width ?? 100)} height={Number(height ?? 80)} priority />;
}
