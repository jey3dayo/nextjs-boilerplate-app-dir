import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
// TODO: Implement these components
import { Callout } from '@/components/mdx/callout';
import { MdxCard } from '@/components/mdx/mdx-card';
import { cx } from '@/lib/class-names';

type Props = {
  className?: string;
};

const components = {
  h1: ({ className, ...props }: Props) => (
    <h1 className={cx('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} />
  ),
  h2: ({ className, ...props }: Props) => (
    <h2
      className={cx('mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: Props) => (
    <h3 className={cx('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props} />
  ),
  h4: ({ className, ...props }: Props) => (
    <h4 className={cx('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
  ),
  h5: ({ className, ...props }: Props) => (
    <h5 className={cx('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />
  ),
  h6: ({ className, ...props }: Props) => (
    <h6 className={cx('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)} {...props} />
  ),
  a: ({ className, ...props }: Props) => (
    <a className={cx('font-medium underline underline-offset-4', className)} {...props} />
  ),
  p: ({ className, ...props }: Props) => (
    <p className={cx('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: Props) => <ul className={cx('my-6 ml-6 list-disc', className)} {...props} />,
  ol: ({ className, ...props }: Props) => <ol className={cx('my-6 ml-6 list-decimal', className)} {...props} />,
  li: ({ className, ...props }: Props) => <li className={cx('mt-2', className)} {...props} />,
  blockquote: ({ className, ...props }: Props) => (
    <blockquote className={cx('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cx('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: Props) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cx('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cx('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),
  th: ({ className, ...props }: Props) => (
    <th
      className={cx(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: Props) => (
    <td
      className={cx('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: Props) => (
    <pre className={cx('mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4', className)} {...props} />
  ),
  code: ({ className, ...props }: Props) => (
    <code className={cx('relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm', className)} {...props} />
  ),
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
