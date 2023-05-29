'use client';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { profileNavigation as navigation } from '@/components/header/constants';
import classNames from '@/lib/class-names';

const generateButtonStyle = (active: boolean) => {
  return classNames(
    active ? 'bg-primary-400 text-white' : 'text-primary-700',
    'block px-2 py-2 text-sm rounded-md group w-full items-center text-sm',
  );
};

export default function CustomMenu({ children }: ReactProps) {
  const { data } = useSession();
  const user = data?.user;

  return (
    <Menu as="div" className="relative ml-3 inline-block text-left">
      <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-primary-800">
        <span className="sr-only">ユーザメニュー</span>
        <>{children}</>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-light shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="p-1">
            {user ? (
              <>
                <Menu.Item>
                  <div className={classNames('', 'block px-2 py-2 text-sm text-dark')}>{user?.name}</div>
                </Menu.Item>
                <hr className="py-1" />
                {navigation.map((v, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <Link href={v.href} className={generateButtonStyle(active)}>
                        {v.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </>
            ) : null}

            <Menu.Item>
              {({ active }) =>
                user ? (
                  <div className={generateButtonStyle(active)} onClick={() => signOut()}>
                    サインアウト
                  </div>
                ) : (
                  <div className={generateButtonStyle(active)} onClick={() => signIn()}>
                    サインイン
                  </div>
                )
              }
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
