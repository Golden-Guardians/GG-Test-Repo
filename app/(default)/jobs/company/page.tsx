export const metadata = {
  title: 'Company - Golden Guardians',
  description: 'Page description',
}

import CompanyBg from '@/public/images/company-bg.png'
import CompanyImage from '@/public/images/company-icon-01.svg'
import Image from 'next/image'
import JobsItem from '../jobs-item'

export default function Jobs() {

  // Some dummy jobs data
  const jobs = [
    // Group 1
    [
      {
        id: 0,
        image: CompanyImage,
        company: 'Company 01',
        role: 'Senior Software Engineer Backend',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 7',
        type: 'New',
        fav: false,
      },
      {
        id: 1,
        image: CompanyImage,
        company: 'Company 02',
        role: 'React.js Software Developer',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 6',
        type: 'New',
        fav: true,
      },
      {
        id: 2,
        image: CompanyImage,
        company: 'Company 03',
        role: 'Senior Full Stack Rails Developer',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 6',
        type: 'New',
        fav: false,
      },
    ],
    // Group 2
    [
      {
        id: 0,
        image: CompanyImage,
        company: 'Company 01',
        role: 'Senior Web App Designer',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 3',
        type: '',
        fav: false,
      },
      {
        id: 1,
        image: CompanyImage,
        company: 'Company 02',
        role: 'Senior UI/UX Designer',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 3',
        type: '',
        fav: false,
      },
    ],
    // Group 3
    [
      {
        id: 0,
        image: CompanyImage,
        company: 'Company 01',
        role: 'Financial Planning & Analysis Manager',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 2',
        type: '',
        fav: false,
      },
      {
        id: 1,
        image: CompanyImage,
        company: 'Company 02',
        role: 'Senior Consultant Growth Strategy',
        link: '/jobs/post',
        details: 'Full-time / Remote / London, UK',
        date: 'Jan 2',
        type: '',
        fav: false,
      },
    ],
  ]

  return (
    <>
      {/* Profile background */}
      <div className="h-56 bg-slate-200 dark:bg-slate-900">
        <Image className="h-full w-full object-cover" src={CompanyBg} width={2560} height={440} alt="Company background" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-slate-50 pb-6 text-center dark:border-slate-700 dark:bg-slate-800/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Avatar */}
            <div className="-mt-12 mb-2">
              <div className="-ml-1 -mt-1 inline-flex sm:mb-0">
                <Image className="rounded-full border-4 border-white dark:border-slate-900" src={CompanyImage} width={104} height={104} alt="Avatar" />
              </div>
            </div>

            {/* Company name and info */}
            <div className="mb-4">
              <h2 className="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-100">Revolut Ltd</h2>
              <p>We're building a financial superapp that combines all the best tools into one place 🚀</p>
            </div>

            {/* Meta */}
            <div className="inline-flex flex-wrap justify-center space-x-4 sm:justify-start">
              <div className="flex items-center">
                <svg className="h-4 w-4 shrink-0 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                  <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                </svg>
                <span className="ml-2 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">London, UK</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 shrink-0 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                  <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                </svg>
                <a className="ml-2 whitespace-nowrap text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                  revolut.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-6 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Open Positions at Revolut Ltd</h3>

          {/* Job list */}
          <div className="space-y-6">
            {/* Group 1 */}
            <div>
              <h4 className="mb-4 font-medium text-slate-800 dark:text-slate-100">Programming</h4>
              {/* Job list */}
              <div className="space-y-2">
                {jobs[0].map(job => (
                  <JobsItem
                    key={job.id}
                    job={job} />
                ))}
              </div>
            </div>

            {/* Group 2 */}
            <div>
              <h4 className="mb-4 font-medium text-slate-800 dark:text-slate-100">Design</h4>
              {/* Job list */}
              <div className="space-y-2">
                {jobs[1].map(job => (
                  <JobsItem
                    key={job.id}
                    job={job} />
                ))}
              </div>
            </div>

            {/* Group 3 */}
            <div>
              <h4 className="mb-4 font-medium text-slate-800 dark:text-slate-100">Management / Finance</h4>
              {/* Job list */}
              <div className="space-y-2">
                {jobs[2].map(job => (
                  <JobsItem
                    key={job.id}
                    job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}
