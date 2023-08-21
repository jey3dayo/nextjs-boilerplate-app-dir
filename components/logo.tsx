import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import logo from 'public/image/dalle-cap.svg';

export function Logo({ width, height, className, ...props }: { width?: number; height?: number; className?: string }) {
  return (
    <Image
      src={logo as StaticImport}
      alt="ロゴ"
      width={width ?? 100}
      height={height ?? 80}
      className={className}
      priority
      {...props}
    />
  );
}
