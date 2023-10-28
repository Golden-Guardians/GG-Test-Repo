'use client'

import { useFlyoutContext } from '@/app/flyout-context'
import { StaticImageData } from 'next/image'
import MailItem from './mail-item'

export interface Mail {
  id: number
  open: boolean
  image: StaticImageData
  name: string
  email: string
  date: string
  recipients: string[]
  excerpt: string
  message: string
}

export default function InboxBody({ mails }: { mails: Mail[]}) {
  const { flyoutOpen, setFlyoutOpen } = useFlyoutContext()

  return (
    <div
      className={`flex grow flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${flyoutOpen ? 'translate-x-1/3' : 'translate-x-0'
        }`}
    >
      {/* Header */}
      <div className="sticky top-16">
        <div className="flex h-16 items-center justify-between border-b border-slate-200 bg-slate-50 px-4 dark:border-slate-700 dark:bg-[#161F32] sm:px-6 md:px-5">
          {/* Buttons on the left side */}
          <div className="flex">
            {/* Close button */}
            <button
              className="mr-4 text-slate-400 hover:text-slate-500 md:hidden"
              onClick={() => setFlyoutOpen(!flyoutOpen)}
              aria-controls="inbox-sidebar"
              aria-expanded={flyoutOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
              </svg>
            </button>
            <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 fill-current text-amber-500" viewBox="0 0 16 16">
                <path d="M10 5.934 8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
              </svg>
            </button>
            <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
              </svg>
            </button>
            <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 fill-current text-indigo-500" viewBox="0 0 16 16">
                <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
              </svg>
            </button>
          </div>
          {/* Buttons on the right side */}
          <div className="flex items-center">
            <div className="mr-1 text-xs">
              <span className="font-medium dark:text-slate-300">10</span> <span className="text-slate-500 dark:text-slate-400">of</span> <span className="font-medium dark:text-slate-300">467</span>
            </div>
            <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="m10 13.4 1.4-1.4-4-4 4-4L10 2.6 4.6 8z" />
              </svg>
            </button>
            <button className="ml-2 shrink-0 rounded border border-slate-200 bg-white p-1.5 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M7 13.4 5.6 12l4-4-4-4L7 2.6 12.4 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grow p-4 sm:px-6 md:px-5">
        {/* Mail subject */}
        <header className="mb-4 sm:flex sm:items-start sm:justify-between">
          <h1 className="mb-1 ml-2 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100 sm:mb-0">Chill your mind with this amazing offer 🎉</h1>
          <button className="inline-flex whitespace-nowrap rounded-full bg-sky-100 px-2.5 py-1 text-center text-xs font-medium text-sky-600 dark:bg-sky-500/30 dark:text-sky-400">
            Exciting news
          </button>
        </header>

        {/* Messages box */}
        <div className="divide-y divide-slate-200 rounded-sm border border-slate-200 bg-white px-6 shadow-lg dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
          {mails.map(mail => (
            <MailItem
              key={mail.id}
              mail={mail} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0">
        <div className="flex h-16 items-center justify-between border-t border-slate-200 bg-white px-4 dark:border-slate-700 dark:bg-slate-900 sm:px-6 md:px-5">
          {/* Plus button */}
          <button className="mr-3 shrink-0 text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
            <span className="sr-only">Add</span>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
            </svg>
          </button>
          {/* Message input */}
          <form className="flex grow">
            <div className="mr-3 grow">
              <label htmlFor="message-input" className="sr-only">
                Type a message
              </label>
              <input
                id="message-input"
                className="form-input w-full border-transparent bg-slate-100 placeholder:text-slate-500 focus:bg-white dark:border-transparent dark:bg-slate-800 dark:focus:bg-slate-800"
                type="text"
                placeholder="Aa"
              />
            </div>
            <button type="submit" className="btn whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600">
              Send -&gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}