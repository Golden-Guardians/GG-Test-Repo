export const metadata = {
  title: 'Shop 2 - Golden Guardians',
  description: 'Page description',
}

import PaginationClassic from '@/components/pagination-classic'
import ShopCards07 from '../shop-cards-07'
import ShopSidebar from '../shop-sidebar'

export default function Shop2() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-5">

        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Find the right product for you ✨</h1>

      </div>

      {/* Page content */}
      <div className="mt-9 flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0">

        {/* Sidebar */}
        <ShopSidebar />

        {/* Content */}
        <div>

          {/* Filters */}
          <div className="mb-5">
            <ul className="-m-1 flex flex-wrap">
              <li className="m-1">
                <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-500 px-3 py-1 text-sm font-medium leading-5 text-white shadow-sm duration-150 ease-in-out">View All</button>
              </li>
              <li className="m-1">
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Featured</button>
              </li>
              <li className="m-1">
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Newest</button>
              </li>
              <li className="m-1">
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Price - Low To High</button>
              </li>
              <li className="m-1">
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">Price - High to Low</button>
              </li>
            </ul>
          </div>

          <div className="mb-4 text-sm italic text-slate-500 dark:text-slate-400">67.975 Items</div>

          {/* Cards 1 (Video Courses) */}
          <div>
            <div className="grid grid-cols-12 gap-6">
              <ShopCards07 />
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <PaginationClassic />
          </div>

        </div>

      </div>
    </div>
  )
}