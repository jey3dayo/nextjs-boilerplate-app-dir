import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/app/mdx-components';
import Article from '@/components/docs/article';
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

  if (!doc) {
    null;
  }

  return doc;
}

async function Page(props: PageProps) {
  const doc = getDocFromParams(props.params);
  if (!doc) notFound();

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <Article>
        <div>::zdocsPageHeader::</div>
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <div>::DocsPager::</div>
      </Article>
      <DashboardTableOfContents toc={toc} />
    </main>
  );

  // return (
  //   <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
  //     <div className="mx-auto w-full min-w-0">
  //       <DocsPageHeader heading={doc.title} text={doc.description} />
  //       <Mdx code={doc.body.code} />
  //       <hr className="my-4 md:my-6" />
  //       <DocsPager doc={doc} />
  //     </div>
  //     <div className="hidden text-sm xl:block">
  //       <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
  //         <DashboardTableOfContents toc={toc} />
  //       </div>
  //     </div>
  //   </main>
  // )
}

export default Page;
