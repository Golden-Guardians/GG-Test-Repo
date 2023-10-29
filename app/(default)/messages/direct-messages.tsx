import { useFlyoutContext } from '@/app/flyout-context'
import UserImage01 from '@/public/images/user-32-01.jpeg'
import UserImage02 from '@/public/images/user-32-02.jpeg'
import UserImage03 from '@/public/images/user-32-03.jpeg'
import UserImage04 from '@/public/images/user-32-04.jpeg'
import UserImage05 from '@/public/images/user-32-05.jpeg'
import UserImage06 from '@/public/images/user-32-06.jpeg'
import Image from 'next/image'

export default function DirectMessages() {
  const { setFlyoutOpen } = useFlyoutContext()

  return (
    <div className="mt-4">
      <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">Direct messages</div>
      <ul className="mb-6">
        <li className="-mx-2">
          <button className="flex w-full items-center justify-between rounded bg-indigo-500/30 p-2" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <Image className="mr-2 h-8 w-8 rounded-full" src={UserImage01} width={32} height={32} alt="User 01" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Dominik Lamakani</span>
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <div className="inline-flex rounded-full bg-indigo-400 px-2 text-center text-xs font-medium leading-5 text-white">2</div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex w-full items-center justify-between rounded p-2" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <Image className="mr-2 h-8 w-8 rounded-full" src={UserImage02} width={32} height={32} alt="User 02" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Tisha Yanchev</span>
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <div className="inline-flex rounded-full bg-indigo-400 px-2 text-center text-xs font-medium leading-5 text-white">4</div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex w-full items-center justify-between rounded p-2" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <Image className="mr-2 h-8 w-8 rounded-full" src={UserImage03} width={32} height={32} alt="User 03" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Jerzy Wierzy</span>
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <Image className="h-5 w-5 shrink-0 rounded-full" src={UserImage03} width="20" height="20" alt="User 03" />
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex w-full items-center justify-between rounded p-2" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <Image className="mr-2 h-8 w-8 rounded-full" src={UserImage04} width={32} height={32} alt="User 04" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Adrian Przetocki</span>
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <svg className="h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex w-full items-center justify-between rounded p-2" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <Image className="mr-2 h-8 w-8 rounded-full" src={UserImage05} width={32} height={32} alt="User 05" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Simona Lürwer</span>
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <svg className="h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex w-full items-center justify-between rounded p-2" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <Image className="mr-2 h-8 w-8 rounded-full" src={UserImage06} width={32} height={32} alt="User 06" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Mary Roszczewski</span>
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <svg className="h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
      </ul>
    </div>
  )
}