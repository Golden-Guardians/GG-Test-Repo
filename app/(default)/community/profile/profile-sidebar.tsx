"use client"

import { useFlyoutContext } from "@/app/flyout-context"
import UserImage01 from "@/app/images/user-32-01.jpg"
import UserImage02 from "@/app/images/user-32-02.jpg"
import UserImage03 from "@/app/images/user-32-03.jpg"
import UserImage04 from "@/app/images/user-32-04.jpg"
import UserImage05 from "@/app/images/user-32-05.jpg"
import UserImage06 from "@/app/images/user-32-06.jpg"
import UserImage08 from "@/app/images/user-32-08.jpg"
import ProfileImage from "@/app/images/user-avatar-32.png"
import Image from "next/image"

export default function ProfileSidebar() {
  const { flyoutOpen, setFlyoutOpen } = useFlyoutContext()

  return (
    <div
      id="profile-sidebar"
      className={`absolute inset-y-0 z-20 -mr-px w-full transition-transform duration-200 ease-in-out md:static md:inset-y-auto md:w-auto md:translate-x-0${
        flyoutOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar sticky top-16 h-[calc(100dvh-64px)] shrink-0 overflow-y-auto overflow-x-hidden border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 md:w-[18rem] xl:w-[20rem]">
        {/* Profile group */}
        <div>
          {/* Group header */}
          <div className="sticky top-0 z-10">
            <div className="flex h-16 items-center border-b border-slate-200 bg-white px-5 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex w-full items-center justify-between">
                {/* Profile image */}
                <div className="relative">
                  <div className="flex grow items-center truncate">
                    <Image
                      className="mr-2 h-8 w-8 rounded-full"
                      src={ProfileImage}
                      width={32}
                      height={32}
                      alt="Group 01"
                    />
                    <div className="truncate">
                      <span className="font-semibold text-slate-800 dark:text-slate-100">
                        Acme Inc.
                      </span>
                    </div>
                  </div>
                </div>
                {/* Add button */}
                <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                  <svg
                    className="h-4 w-4 fill-current text-indigo-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Search form */}
            <form className="relative">
              <label htmlFor="profile-search" className="sr-only">
                Search
              </label>
              <input
                id="profile-search"
                className="form-input w-full bg-white pl-9 dark:bg-slate-800"
                type="search"
                placeholder="Search…"
              />
              <button
                className="group absolute inset-0 right-auto"
                type="submit"
                aria-label="Search"
              >
                <svg
                  className="ml-3 mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            {/* Team members */}
            <div className="mt-4">
              <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                Team members
              </div>
              <ul className="mb-6">
                <li className="-mx-2">
                  <button
                    className="w-full rounded bg-indigo-500/30 p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage08}
                          width={32}
                          height={32}
                          alt="User 08"
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Carolyn McNeail
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button
                    className="w-full rounded p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center truncate">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage06}
                          width={32}
                          height={32}
                          alt="User 06"
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Mary Roszczewski
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button
                    className="w-full rounded p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center truncate">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage03}
                          width={32}
                          height={32}
                          alt="User 03"
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Jerzy Wierzy
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button
                    className="w-full rounded p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center truncate">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage02}
                          width={32}
                          height={32}
                          alt="User 02"
                        />
                        <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900"></div>
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Tisha Yanchev
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button
                    className="w-full rounded p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center truncate">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage05}
                          width={32}
                          height={32}
                          alt="User 05"
                        />
                        <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900"></div>
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Simona Lürwer
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button
                    className="w-full rounded p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center truncate">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage04}
                          width={32}
                          height={32}
                          alt="User 04"
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Adrian Przetocki
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button
                    className="w-full rounded p-2"
                    onClick={() => setFlyoutOpen(false)}
                  >
                    <div className="flex items-center truncate">
                      <div className="relative mr-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={UserImage01}
                          width={32}
                          height={32}
                          alt="User 01"
                        />
                        <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900"></div>
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          Brian Halligan
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
