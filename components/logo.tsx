'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import logoDark from 'public/image/dalle-cap-dark.svg';
import logoLight from 'public/image/dalle-cap.svg';
import { defaultTheme } from '@/config';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from '@/hooks/use-themes';

export function Logo({ width, height, className, ...props }: { width?: number; height?: number; className?: string }) {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  const src = (resolvedTheme === defaultTheme ? logoLight : logoDark) as StaticImport;
  if (!mounted)
    return (
      <Image
        src={logoDark as StaticImport}
        alt="ロゴ"
        width={width ?? 100}
        height={height ?? 80}
        className={className}
        priority
        {...props}
      />
    );

  return (
    <Image src={src} alt="ロゴ" width={width ?? 100} height={height ?? 80} className={className} priority {...props} />
  );
}
