'use client';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment } from 'react';
import { profileNavigation } from '@/components/header/constants';
import classNames from '@/lib/class-names';

export default function CustomMenu(): JSX.Element {
  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex rounded-full bg-teal-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-teal-800">
        <span className="sr-only">ユーザメニュー</span>
        <UserIcon className="h-8 w-8" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
          {profileNavigation.map((v, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <Link
                  href={v.href}
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  {v.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
