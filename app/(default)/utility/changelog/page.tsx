export const metadata = {
  title: 'Roadmap - Golden Guardians',
  description: 'Page description',
}

import PaginationClassic from '@/components/pagination-classic'
import User01 from '@/public/images/user-32-01.png'
import User02 from '@/public/images/user-32-02.png'
import User07 from '@/public/images/user-32-07.png'
import Image from 'next/image'

export default function Roadmap() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8 sm:flex sm:items-center sm:justify-between">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Changelog ✨</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">

            {/* Add board button */}
            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
              <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Add Entry</span>
            </button>

          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="m-auto mt-8 max-w-3xl">

            {/* Filters */}
            <div className="mb-2 xl:-translate-x-16 xl:pl-32">
              <ul className="-m-1 flex flex-wrap">
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-500 px-3 py-1 text-sm font-medium leading-5 text-white shadow-sm duration-150 ease-in-out">View All</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Announcements</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Bug Fix</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Product</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Exciting News</button>
                </li>
              </ul>
            </div>

            {/* Posts */}
            <div className="xl:-translate-x-16">
              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">8 July, 2021</div>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <h2 className="mb-3 text-2xl font-bold text-slate-800 dark:text-slate-100">Released version 2.0</h2>
                      <div className="mb-4 flex flex-nowrap items-center space-x-2">
                        <div className="flex items-center">
                          <a className="mr-2 block shrink-0" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User07} width={32} height={32} alt="User 04" />
                          </a>
                          <a className="block text-sm font-semibold text-slate-800 dark:text-slate-100" href="#0">
                            Simona Lürwer
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-center text-xs font-medium text-emerald-600 dark:bg-emerald-400/30 dark:text-emerald-400">Product</div>
                        </div>
                      </div>
                    </header>
                    <div className="space-y-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                  </div>
                </div>
              </article>
              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">6 July, 2021</div>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <h2 className="mb-3 text-2xl font-bold text-slate-800 dark:text-slate-100">Feature Name is now public 🎉</h2>
                      <div className="mb-4 flex flex-nowrap items-center space-x-2">
                        <div className="flex items-center">
                          <a className="mr-2 block shrink-0" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User02} width={32} height={32} alt="User 04" />
                          </a>
                          <a className="block text-sm font-semibold text-slate-800 dark:text-slate-100" href="#0">
                            Danielle Cohen
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-center text-xs font-medium text-amber-600 dark:bg-amber-400/30 dark:text-amber-400">Announcement</div>
                        </div>
                      </div>
                    </header>
                    <div className="space-y-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                  </div>
                </div>
              </article>
              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">4 July, 2021</div>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <h2 className="mb-3 text-2xl font-bold text-slate-800 dark:text-slate-100">Bugs fixed, issues, and more</h2>
                      <div className="mb-4 flex flex-nowrap items-center space-x-2">
                        <div className="flex items-center">
                          <a className="mr-2 block shrink-0" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User01} width={32} height={32} alt="User 04" />
                          </a>
                          <a className="block text-sm font-semibold text-slate-800 dark:text-slate-100" href="#0">
                            Patrick Kumar
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-rose-100 px-2.5 py-1 text-center text-xs font-medium text-rose-500 dark:bg-rose-500/30 dark:text-rose-400">Bug Fix</div>
                        </div>
                      </div>
                    </header>
                    <div className="space-y-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                      <ul className="list-inside list-disc space-y-1">
                        <li>E-commerce: Better lorem ipsum generator.</li>
                        <li>Booking: Lorem ipsum post generator.</li>
                        <li>Retail: Better lorem ipsum generator.</li>
                        <li>Services: Better lorem ipsum generator.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">2 July, 2021</div>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <h2 className="mb-3 text-2xl font-bold text-slate-800 dark:text-slate-100">Thanks, everyone 🙌</h2>
                      <div className="mb-4 flex flex-nowrap items-center space-x-2">
                        <div className="flex items-center">
                          <a className="mr-2 block shrink-0" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User02} width={32} height={32} alt="User 04" />
                          </a>
                          <a className="block text-sm font-semibold text-slate-800 dark:text-slate-100" href="#0">
                            Danielle Cohen
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-center text-xs font-medium text-sky-600 dark:bg-sky-500/30 dark:text-sky-400">Exciting News</div>
                        </div>
                      </div>
                    </header>
                    <div className="space-y-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Pagination */}
            <div className="mt-6 xl:-translate-x-16 xl:pl-32">
              <PaginationClassic />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}