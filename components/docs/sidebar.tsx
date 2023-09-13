'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsConfig, NavItem } from '@/constants/docs';
import { cn } from '@/lib/class-names';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-12">
      {docsConfig.sidebarNav.map((item) => (
        <div key={item.title} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">{item.title} </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {item.items.map((item) => (
              <Item key={item.href} item={item} pathname={pathname} />
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

export function Item({ item, pathname }: { item: NavItem; pathname: string | null }) {
  return !item.disabled && item.href ? (
    <Link
      href={item.href}
      className={cn('flex w-full items-center rounded-md p-2 hover:underline', {
        'bg-muted': pathname === item.href,
      })}
      target={item.external ? '_blank' : ''}
      rel={item.external ? 'noreferrer' : ''}
    >
      {item.title}
    </Link>
  ) : (
    <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">{item.title}</span>
  );
}
