import Link from 'next/link';
import { Doc } from 'contentlayer/generated';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';
import { docsConfig } from '@/constants/docs';
import { cn } from '@/lib/class-names';

interface Link {
  items?: Link[];
  title: string;
  href: string;
}

export function DocsPager({ doc }: { doc: Doc }) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: 'ghost', shadow: 'none' }), 'py-2 pl-2 pr-3')}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: 'ghost', shadow: 'none' }), 'ml-auto py-2 pl-2 pr-3')}
        >
          {pager.next.title}
          <Icons.chevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav as Link[]), null];
  const activeIndex = flattenedLinks.findIndex((link) => doc.slug === link?.href);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: Link[]): Link[] {
  return links.reduce((flat: Link[], link: Link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
