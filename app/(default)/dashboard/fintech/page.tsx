export const metadata = {
  title: 'Fintech - Golden Guardians',
  description: 'Page description',
}

import Datepicker from '@/components/datepicker'
import FintechCard01 from './fintech-card-01'
import FintechCard02 from './fintech-card-02'
import FintechCard03 from './fintech-card-03'
import FintechCard04 from './fintech-card-04'
import FintechCard05 from './fintech-card-05'
import FintechCard06 from './fintech-card-06'
import FintechCard07 from './fintech-card-07'
import FintechCard08 from './fintech-card-08'
import FintechCard09 from './fintech-card-09'
import FintechCard10 from './fintech-card-10'
import FintechCard11 from './fintech-card-11'
import FintechCard12 from './fintech-card-12'
import FintechCard13 from './fintech-card-13'
import FintechCard14 from './fintech-card-14'
import FintechIntro from './fintech-intro'

export default function Fintech() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

      {/* Page header */}
      <div className="mb-5 sm:flex sm:items-center sm:justify-between">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Fintech ✨</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">

          {/* Datepicker built with flatpickr */}
          <Datepicker align="right" />

          {/* Add account button */}
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
            <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="ml-2 hidden xs:block">Add Account</span>
          </button>

        </div>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">

        {/* Page Intro */}
        <FintechIntro />
        {/* Line chart (Portfolio Returns) */}
        <FintechCard01 />
        {/* Credit Card */}
        <FintechCard02 />
        {/* Bar chart (Cash Flow) */}
        <FintechCard03 />
        {/* Horizontal bar chart (Cash Flow by Account) */}
        <FintechCard04 />
        {/* Table (Recent Expenses) */}
        <FintechCard05 />
        {/* Table (Recent Earnings) */}
        <FintechCard06 />
        {/* Line chart (Saving Goals) */}
        <FintechCard07 />
        {/* Line chart (Growth Portfolio) */}
        <FintechCard08 />
        {/* Pie chart (Portfolio Value) */}
        <FintechCard09 />
        {/* Line charts (Stock graphs) */}
        <FintechCard10 />
        <FintechCard11 />
        <FintechCard12 />
        <FintechCard13 />
        {/* Table (Market Trends) */}
        <FintechCard14 />        

      </div>
    </div>
  )
}
