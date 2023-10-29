export const metadata = {
  title: 'Pagination - Golden Guardians',
  description: 'Page description',
}

import PaginationClassic from '@/components/pagination-classic'
import PaginationNumeric from '@/components/pagination-numeric'
import PaginationNumeric02 from '@/components/pagination-numeric-2'

export default function PaginationLibrary() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Pagination ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="mt-8 space-y-8">

            {/* Option 1 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Option 1</h2>
              <div className="rounded-sm border border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-800">
                <PaginationNumeric />
              </div>
            </div>

            {/* Option 2 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Option 2</h2>
              <div className="rounded-sm border border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-800">
                <PaginationClassic />
              </div>
            </div>

            {/* Option 3 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Option 3</h2>
              <div className="rounded-sm border border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-800">
                <PaginationNumeric02 />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
