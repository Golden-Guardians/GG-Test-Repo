'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function TransactionDropdown({
  align,
}: {
  align?: 'left' | 'right',
}) {
  return (
    <Menu as="div" className="relative inline-flex">
      <Menu.Button className="group inline-flex items-center justify-center">
        <div className="flex items-center truncate">
          <span className="truncate font-medium text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">My Personal Account</span>
          <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-indigo-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </Menu.Button>
      <Transition
        className={`absolute top-full z-10 mt-1 min-w-[11rem] origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items as="ul" className="focus:outline-none">
          <Menu.Item as="li">
            {({ active }) => (
              <Link className={`flex px-3 py-1 text-sm font-medium ${active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`} href="#0">
                Business Account
              </Link>
            )}
          </Menu.Item>
          <Menu.Item as="li">
            {({ active }) => (
              <Link className={`flex px-3 py-1 text-sm font-medium ${active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`} href="#0">
                Family Account
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}