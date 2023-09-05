'use client';

import HelloWorld from '@/app/hello.mdx';
import Article from '@/components/docs/article';
import Toc from '@/components/docs/toc';

export default function DocPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <Article>
        <HelloWorld />
      </Article>
      <Toc />
    </main>
  );
}
