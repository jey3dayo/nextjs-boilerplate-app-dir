import { HeroContainer } from 'components/container';
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
    <HeroContainer className="py-4 sm:px-12 sm:py-32">
      <div className="max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl sm:mx-0">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">アクセス制限</h2>
          <p className="mt-2 text-lg leading-8 sm:mt-6">{message}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mx-0 sm:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:flex sm:grid-cols-2 sm:gap-x-10">
            <a href="/api/auth/signin">
              {titles.signIn} <span aria-hidden="true">&rarr;</span>
            </a>
            {navigation.map((link) => (
              <a key={link.title} href={link.href}>
                {link.title} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
