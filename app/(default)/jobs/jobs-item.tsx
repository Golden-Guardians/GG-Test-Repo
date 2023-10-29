import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface Job {
  id: number
  image: StaticImageData
  company: string
  role: string
  link: string
  details: string
  date: string
  type: string
  fav: boolean
}

export default function JobsItem({ job }: { job: Job }) {
  return (
    <div
      className={`rounded-sm border px-5 py-4 shadow-lg ${job.type === 'Featured' ? 'border-amber-300 bg-amber-50 dark:border-amber-400/50 dark:bg-amber-400/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'}`}
    >
      <div className="items-center justify-between space-x-2 space-y-4 md:flex md:space-y-0">
        {/* Left side */}
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="mt-1 h-9 w-9 shrink-0">
            <Image className="h-9 w-9 rounded-full" src={job.image} width={36} height={36} alt={job.company} />
          </div>
          <div>
            <Link className="inline-flex font-semibold text-slate-800 dark:text-slate-100" href={job.link}>
              {job.role}
            </Link>
            <div className="text-sm">{job.details}</div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-4 pl-10 md:pl-0">
          <div className="whitespace-nowrap text-sm italic text-slate-500 dark:text-slate-400">{job.date}</div>
          {job.type && (
            <div
              className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${
                job.type === 'Featured' ? 'bg-amber-100 text-amber-600 dark:bg-amber-400/30 dark:text-amber-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-400/30 dark:text-emerald-400'
              }`}
            >
              {job.type}
            </div>
          )}
          <button className={`${job.fav ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400 dark:text-slate-600 dark:hover:text-slate-500'}`}>
            <span className="sr-only">Bookmark</span>
            <svg className="h-4 w-3 fill-current" width="12" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}