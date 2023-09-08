import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/app/mdx-components';
import Article from '@/components/docs/article';
import { DocsPageHeader } from '@/components/docs/page-header';
import { DocsPager } from '@/components/docs/pager';
import { DashboardTableOfContents } from '@/components/docs/toc';
import { getTableOfContents } from '@/lib/toc';

type PageProps = {
  params: {
    slug: string[];
  };
};

function getDocFromParams(params: PageProps['params']) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  return doc ?? notFound();
}

async function Page(props: PageProps) {
  const doc = getDocFromParams(props.params);
  if (!doc) notFound();

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <Article>
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </Article>
      <DashboardTableOfContents toc={toc} />
    </main>
  );
}

export default Page;
