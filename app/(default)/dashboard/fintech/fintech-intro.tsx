import FintechIcon01 from '@/public/images/company-icon-01.svg'
import FintechIcon02 from '@/public/images/company-icon-02.svg'
import FintechIcon03 from '@/public/images/company-icon-03.svg'
import FintechIcon04 from '@/public/images/company-icon-04.svg'
import UserImage from '@/public/images/user-64-14.jpeg'
import Image from 'next/image'

export default function FintechIntro() {
  return(
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <div className="px-5 py-6">
        <div className="md:flex md:items-center md:justify-between">
          {/* Left side */}
          <div className="mb-4 flex items-center md:mb-0">
            {/* Avatar */}
            <div className="mr-4">
              <Image className="inline-flex rounded-full" src={UserImage} width={64} height={64} alt="User" />
            </div>
            {/* User info */}
            <div>
              <div className="mb-2">
                Hey <strong className="font-medium text-slate-800 dark:text-slate-100">Mary</strong> 👋, this is your current balance:
              </div>
              <div className="text-3xl font-bold text-emerald-500">$47,347.09</div>
            </div>
          </div>
          {/* Right side */}
          <ul className="-ml-px flex shrink-0 flex-wrap justify-end -space-x-3 md:justify-start">
            <li>
              <a className="block" href="#0">
                <Image className="h-9 w-9 rounded-full" src={FintechIcon01} width={36} height={36} alt="Account 01" />
              </a>
            </li>
            <li>
              <a className="block" href="#0">
                <Image className="h-9 w-9 rounded-full" src={FintechIcon02} width={36} height={36} alt="Account 02" />
              </a>
            </li>
            <li>
              <a className="block" href="#0">
                <Image className="h-9 w-9 rounded-full" src={FintechIcon03} width={36} height={36} alt="Account 03" />
              </a>
            </li>
            <li>
              <a className="block" href="#0">
                <Image className="h-9 w-9 rounded-full" src={FintechIcon04} width={36} height={36} alt="Account 04" />
              </a>
            </li>
            <li>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-500 shadow-sm transition duration-150 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                <span className="sr-only">Add new user</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
