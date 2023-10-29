export const metadata = {
  title: 'Roadmap - Golden Guardians',
  description: 'Page description',
}

import User01 from '@/public/images/user-28-01.png'
import User02 from '@/public/images/user-28-02.png'
import User03 from '@/public/images/user-28-03.png'
import User05 from '@/public/images/user-28-05.png'
import User06 from '@/public/images/user-28-06.png'
import User08 from '@/public/images/user-28-08.png'
import User09 from '@/public/images/user-28-09.png'
import Image from 'next/image'

export default function Roadmap() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8 sm:flex sm:items-center sm:justify-between">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Roadmap ✨</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">

            {/* Add board button */}
            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
              <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Add Event</span>
            </button>

          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="m-auto mt-8 max-w-3xl">

            {/* Posts */}
            <div className="xl:-translate-x-16">

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="mb-4 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100 xl:mb-0 xl:leading-7">2021 Q1</h2>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <div className="mb-6 flex flex-nowrap items-center space-x-2">
                        {/* Avatars */}
                        <div className="-ml-px flex shrink-0 -space-x-3">
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User05} width={28} height={28} alt="User 05" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User08} width={28} height={28} alt="User 08" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User09} width={28} height={28} alt="User 09" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User06} width={28} height={28} alt="User 06" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-center text-xs font-medium text-emerald-600 dark:bg-emerald-400/30 dark:text-emerald-400">Completed</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Proof-of-Funds Compliance Key</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Activity Feed Integration</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="mb-4 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100 xl:mb-0 xl:leading-7">2021 Q2</h2>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <div className="mb-6 flex flex-nowrap items-center space-x-2">
                        {/* Avatars */}
                        <div className="-ml-px flex shrink-0 -space-x-3">
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User03} width={28} height={28} alt="User 03" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User05} width={28} height={28} alt="User 05" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User01} width={28} height={28} alt="User 01" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-center text-xs font-medium text-indigo-600 dark:bg-indigo-500/30 dark:text-indigo-400">Working on</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Proof-of-Funds Compliance Key</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Activity Feed Integration</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="mb-4 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100 xl:mb-0 xl:leading-7">2021 Q3</h2>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <div className="mb-6 flex flex-nowrap items-center space-x-2">
                        {/* Avatars */}
                        <div className="-ml-px flex shrink-0 -space-x-3">
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User06} width={28} height={28} alt="User 03" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User05} width={28} height={28} alt="User 05" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User09} width={28} height={28} alt="User 01" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-center text-xs font-medium text-amber-600 dark:bg-amber-400/30 dark:text-amber-400">Planned</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="mb-4 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100 xl:mb-0 xl:leading-7">2021 Q4</h2>
                  </div>
                  <div className="grow border-b border-slate-200 pb-6 dark:border-slate-700">
                    <header>
                      <div className="mb-6 flex flex-nowrap items-center space-x-2">
                        {/* Avatars */}
                        <div className="-ml-px flex shrink-0 -space-x-3">
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User06} width={28} height={28} alt="User 03" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User02} width={28} height={28} alt="User 02" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-center text-xs font-medium text-amber-600 dark:bg-amber-400/30 dark:text-amber-400">Planned</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 ml-2.5 h-full w-0.5 -translate-x-1/2 translate-y-3 self-start bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="mb-1 flex items-center">
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="h-5 w-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="pl-9 text-lg font-bold text-slate-800 dark:text-slate-100">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}