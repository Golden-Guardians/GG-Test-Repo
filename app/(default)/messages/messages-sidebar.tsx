'use client'

import { useFlyoutContext } from '@/app/flyout-context'
import ChannelMenu from '@/components/channel-menu'
import DirectMessages from './direct-messages'
import Channels from './channels'

export default function MessagesSidebar() {
  const { flyoutOpen } = useFlyoutContext()

  return (
    <div
      id="messages-sidebar"
      className={`absolute inset-y-0 z-20 -mr-px w-full transition-transform duration-200 ease-in-out md:static md:inset-y-auto md:w-auto md:translate-x-0${
        flyoutOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="no-scrollbar sticky top-16 h-[calc(100dvh-64px)] shrink-0 overflow-y-auto overflow-x-hidden border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 md:w-[18rem] xl:w-[20rem]">
        {/* #Marketing group */}
        <div>
          {/* Group header */}
          <div className="sticky top-0 z-10">
            <div className="flex h-16 items-center border-b border-slate-200 bg-white px-5 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex w-full items-center justify-between">
                {/* Channel menu */}
                <ChannelMenu />
                {/* Edit button */}
                <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                  <svg className="h-4 w-4 fill-current text-slate-500" viewBox="0 0 16 16">
                    <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Search form */}
            <form className="relative">
              <label htmlFor="msg-search" className="sr-only">
                Search
              </label>
              <input id="msg-search" className="form-input w-full bg-white pl-9 dark:bg-slate-800" type="search" placeholder="Search…" />
              <button className="group absolute inset-0 right-auto" type="submit" aria-label="Search">
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
            {/* Direct messages */}
            <DirectMessages />
            {/* Channels */}
            <Channels />
          </div>
        </div>
      </div>
    </div>
  )
}