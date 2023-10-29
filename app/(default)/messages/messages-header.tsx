import { useFlyoutContext } from '@/app/flyout-context'
import User01 from '@/public/images/user-32-01.png'
import User02 from '@/public/images/user-32-07.png'
import Image from 'next/image'

export default function MessagesHeader() {
  const { flyoutOpen, setFlyoutOpen } = useFlyoutContext()

  return (
    <div className="sticky top-16">
      <div className="flex h-16 items-center justify-between border-b border-slate-200 bg-slate-50 px-4 dark:border-slate-700 dark:bg-[#161F32] sm:px-6 md:px-5">
        {/* People */}
        <div className="flex items-center">
          {/* Close button */}
          <button
            className="mr-4 text-slate-400 hover:text-slate-500 md:hidden"
            onClick={() => setFlyoutOpen(!flyoutOpen)}
            aria-controls="messages-sidebar"
            aria-expanded={flyoutOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* People list */}
          <div className="-ml-px flex -space-x-3">
            <a className="block" href="#0">
              <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User01} width={32} height={32} alt="User 01" />
            </a>
            <a className="block" href="#0">
              <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={User02} width={32} height={32} alt="User 04" />
            </a>
          </div>
        </div>
        {/* Buttons on the right side */}
        <div className="flex">
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
      </div>
    </div>
  )
}