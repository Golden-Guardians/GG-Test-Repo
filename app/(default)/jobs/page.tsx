export const metadata = {
  title: 'Jobs - Golden Guardians',
  description: 'Page description',
}

import PaginationNumeric from '@/components/pagination-numeric'
import Image06 from '@/public/images/company-icon-01.svg'
import Image07 from '@/public/images/company-icon-02.svg'
import Image03 from '@/public/images/company-icon-03.svg'
import Image01 from '@/public/images/company-icon-05.svg'
import Image02 from '@/public/images/company-icon-06.svg'
import Image04 from '@/public/images/company-icon-07.svg'
import Image05 from '@/public/images/company-icon-08.svg'
import JobsItem from './jobs-item'
import JobsSidebar from './jobs-sidebar'
import DropdownSort from './sort-dropdown'

export default function Jobs() {

  // Some dummy jobs data
  const jobs = [
    {
      id: 0,
      image: Image01,
      company: 'Company 01',
      role: 'Senior Web App Designer',
      link: '/jobs/post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 4',
      type: 'Featured',
      fav: false,
    },
    {
      id: 1,
      image: Image01,
      company: 'Company 02',
      role: 'Senior Full Stack Engineer',
      link: '/jobs/post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 7',
      type: 'New',
      fav: true,
    },
    {
      id: 2,
      image: Image02,
      company: 'Company 03',
      role: 'Ruby on Rails Engineer',
      link: '/jobs/post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 7',
      type: 'New',
      fav: false,
    },
    {
      id: 3,
      image: Image03,
      company: 'Company 04',
      role: 'Senior Software Engineer Backend',
      link: '/jobs/post',
      details: 'Full-time / Remote / Anywhere',
      date: 'Jan 7',
      type: 'New',
      fav: false,
    },
    {
      id: 4,
      image: Image04,
      company: 'Company 05',
      role: 'React.js Software Developer',
      link: '/jobs/post',
      details: 'Full-time / Remote / London, UK',
      date: 'Jan 6',
      type: 'New',
      fav: true,
    },
    {
      id: 5,
      image: Image05,
      company: 'Company 06',
      role: 'Senior Full Stack Rails Developer',
      link: '/jobs/post',
      details: 'Part-time / Remote / Milan, IT',
      date: 'Jan 6',
      type: 'New',
      fav: false,
    },
    {
      id: 6,
      image: Image06,
      company: 'Company 07',
      role: 'Principal Software Engineer',
      link: '/jobs/post',
      details: 'Freelance / Remote / London, UK',
      date: 'Jan 6',
      type: 'New',
      fav: false,
    },
    {
      id: 7,
      image: Image04,
      company: 'Company 08',
      role: 'Contract React Native Engineer',
      link: '/jobs/post',
      details: 'Contract / Remote / Miami, FL',
      date: 'Jan 6',
      type: 'New',
      fav: false,
    },
    {
      id: 8,
      image: Image05,
      company: 'Company 09',
      role: 'Senior Client Engineer (React & React Native)',
      link: '/jobs/post',
      details: 'Full-time / Remote / Lincoln, NE',
      date: 'Jan 5',
      type: 'New',
      fav: false,
    },
    {
      id: 9,
      image: Image07,
      company: 'Company 10',
      role: 'QA Automation Engineer',
      link: '/jobs/post',
      details: 'Contract / Remote / Anywhere',
      date: 'Jan 5',
      type: 'New',
      fav: false,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

      {/* Page header */}
      <div className="mb-5 sm:flex sm:items-center sm:justify-between">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Search For Jobs ✨</h1>
        </div>

        {/* Post a job button */}
        <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
          <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span className="ml-2 hidden xs:block">Post A Job</span>
        </button>

      </div>

      {/* Page content */}
      <div className="mt-9 flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0">

        {/* Sidebar */}
        <JobsSidebar />

        {/* Content */}
        <div className='w-full'>

          {/* Search form */}
          <div className="mb-5">
            <form className="relative">
              <label htmlFor="search" className="sr-only">Search</label>
              <input id="search" className="form-input w-full bg-white pl-9 dark:bg-slate-800" type="search" placeholder="Search job title or keyword…" />
              <button className="group absolute inset-0 right-auto" type="submit" aria-label="Search">
                <svg className="ml-3 mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Jobs header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm italic text-slate-500 dark:text-slate-400">Showing 289 Jobs</div>
            {/* Sort */}
            <div className="text-sm">
              <span>Sort by </span>
              <DropdownSort align="right" />
            </div>
          </div>

          {/* Jobs list */}
          <div className='space-y-2'>
            {jobs.map(job => (
              <JobsItem
                key={job.id}
                job={job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <PaginationNumeric />
          </div>

        </div>

      </div>

    </div>
  )
}
