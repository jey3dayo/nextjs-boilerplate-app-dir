'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Transition, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { navigation } from '@/components/header/constants';
import { Logo } from '@/components/svg';
import classNames from '@/lib/class-names';

export default function CustomPopover(): JSX.Element {
  const { data } = useSession();
  const user = data?.user;

  return (
    <Popover>
      {({ open }) => (
        <div className="@md:hidden">
          <Popover.Button
            className={classNames(
              open ? 'bg-dark' : '',
              'inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-dark/50 hover:text-white',
            )}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute left-0 top-0 w-full origin-top-right p-2 transition">
              <div className="divide-y-2 divide-primary-100 rounded-lg bg-light shadow-lg ring-1 ring-black/5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="fill-dark">
                      <Logo className="h-8 w-auto" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className="inline-flex items-center justify-center rounded-md bg-light p-2
                        text-dark/60
                        hover:bg-primary-100 hover:text-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-my-3 flex items-center rounded-md p-3 text-dark hover:bg-dark/5"
                        >
                          <span className="ml-3 text-base font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div>
                    <Link
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-dark px-4 py-2 shadow-sm hover:bg-dark"
                    >
                      <span className="ml-3 text-base font-medium text-light">
                        {user ? (
                          <span onClick={() => signOut()}>サインアウト</span>
                        ) : (
                          <span onClick={() => signIn()}>サインイン</span>
                        )}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
