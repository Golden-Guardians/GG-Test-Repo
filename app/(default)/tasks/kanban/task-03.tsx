import Image from 'next/image'
import UserImage01 from '@/public/images/user-28-03.jpg'
import UserImage02 from '@/public/images/user-28-10.jpg'

export default function Task03() {
  return (
    <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      {/* Body */}
      <div className="mb-3">
        {/* Title */}
        <h2 className="mb-1 font-semibold text-slate-800 dark:text-slate-100">Change license and remove references to products</h2>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="-ml-px flex shrink-0 -space-x-3">
          <a className="block" href="#0">
            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={UserImage01} width={28} height={28} alt="User 03" />
          </a>
          <a className="block" href="#0">
            <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={UserImage02} width={28} height={28} alt="User 10" />
          </a>
        </div>
        {/* Right side */}
        <div className="flex items-center">
          {/* Replies button */}
          <button className="ml-3 flex items-center text-slate-400 hover:text-indigo-500  dark:text-slate-500 dark:hover:text-indigo-500">
            <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <div className="text-sm text-slate-500 dark:text-slate-400">4</div>
          </button>
          {/* Attach button */}
          <button className="ml-3 text-slate-400 hover:text-indigo-500  dark:text-slate-500 dark:hover:text-indigo-500">
            <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}