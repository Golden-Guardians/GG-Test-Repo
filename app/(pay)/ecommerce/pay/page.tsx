export const metadata = {
  title: 'Pay - Golden Guardians',
  description: 'Page description',
}

import Logo from '@/components/ui/logo'
import Link from 'next/link'
import PayForm from './pay-form'

export default function Pay() {
  return (
    <>
      <header className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#182235]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="-mb-px flex h-16 items-center justify-between">

            {/* Logo */}
            <Logo />

            <Link className="block rounded-full bg-slate-100 text-slate-500 hover:text-slate-600 dark:bg-slate-700 dark:text-slate-400 dark:hover:text-slate-300" href="/ecommerce/cart">
              <span className="sr-only">Back</span>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path className="fill-current" d="M15.95 14.536l4.242-4.243a1 1 0 111.415 1.414l-4.243 4.243 4.243 4.242a1 1 0 11-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 01-1.414-1.415l4.243-4.242-4.243-4.243a1 1 0 011.414-1.414l4.243 4.243z" />
              </svg>
            </Link>

          </div>
        </div>
      </header>

      <PayForm />
    </>
  )
}