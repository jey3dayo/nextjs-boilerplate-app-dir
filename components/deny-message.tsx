import { signIn } from 'next-auth/react';
import { HeroContentRoot } from '@/components/content-root';
import { titles } from '@/constants';
import { getNavigationByRole } from '@/lib/navigation';
import { getCurrentUser } from '@/lib/next-auth/session';

const defaultMessage = 'アクセスできません';

export async function DenyMessage({
  message = defaultMessage,
}: {
  message?: string;
  linkText?: string;
  href?: string;
}) {
  const user = await getCurrentUser();
  const navigation = getNavigationByRole(user?.role);
  return (
    <HeroContentRoot>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 md:rounded lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">アクセス制限</h2>
            <p className="mt-6 text-lg leading-8">{message}</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="/api/auth/signin">
                {titles.signIn} <span aria-hidden="true">&rarr;</span>
              </a>
              {navigation.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeroContentRoot>
  );
}
