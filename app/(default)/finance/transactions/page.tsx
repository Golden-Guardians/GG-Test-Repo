export const metadata = {
  title: 'Transactions - Golden Guardians',
  description: 'Page description',
}

import { FlyoutProvider } from '@/app/flyout-context'
import { SelectedItemsProvider } from '@/app/selected-items-context'
import DeleteButton from '@/components/delete-button'
import PaginationClassic from '@/components/pagination-classic'
import SearchForm from '@/components/search-form'
import { TransactionDetailProvider } from './transaction-context'
import TransactionDropdown from './transaction-dropdown'
import TransactionPanel from './transaction-panel'
import OrdersTable from './transactions-table'

import Image01 from '@/public/images/transactions-image-01.svg'
import Image02 from '@/public/images/transactions-image-02.svg'
import Image04 from '@/public/images/transactions-image-03.svg'
import Image05 from '@/public/images/transactions-image-04.svg'
import Image06 from '@/public/images/transactions-image-05.svg'
import Image07 from '@/public/images/transactions-image-06.svg'
import Image08 from '@/public/images/transactions-image-07.svg'
import Image09 from '@/public/images/transactions-image-08.svg'
import Image03 from '@/public/images/user-36-05.jpg'

function Transactions() {

  // Some dummy transactions data
  const transactions = [
    {
      id: 0,
      image: Image01,
      name: 'Form Builder CP',
      date: '22/01/2022',
      status: 'Pending',
      amount: '-$1,299.22',
    },
    {
      id: 1,
      image: Image02,
      name: 'Imperial Hotel ****',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$1,029.77',
    },
    {
      id: 2,
      image: Image03,
      name: 'Aprilynne Pills',
      date: '22/01/2022',
      status: 'Pending',
      amount: '+$499.99',
    },
    {
      id: 3,
      image: Image04,
      name: 'Google Limited UK',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$1,029.77',
    },
    {
      id: 4,
      image: Image05,
      name: 'Acme LTD UK',
      date: '22/01/2022',
      status: 'Pending',
      amount: '+$2,179.36',
    },
    {
      id: 5,
      image: Image04,
      name: 'Google Limited UK',
      date: '22/01/2022',
      status: 'Canceled',
      amount: '-$1,029.77',
    },
    {
      id: 6,
      image: Image06,
      name: 'Uber',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$272.88',
    },
    {
      id: 7,
      image: Image07,
      name: 'PublicOne Inc.',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$199.87',
    },
    {
      id: 8,
      image: Image08,
      name: 'Github Inc.',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$42.87',
    },
    {
      id: 9,
      image: Image09,
      name: 'Form Builder PRO',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$112.44',
    },
  ]

  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-4 sm:flex sm:items-center sm:justify-between md:mb-2">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">$47,347.09</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">

            {/* Delete button */}
            <DeleteButton />

            {/* Search form */}
            <div className="hidden sm:block">
              <SearchForm />
            </div>

            {/* Export button */}
            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Export Transactions</button>

          </div>

        </div>

        <div className="mb-5">
          <span>Transactions from </span>
          <TransactionDropdown />
        </div>

        {/* Filters */}
        <div className="mb-5">
          <ul className="-m-1 flex flex-wrap">
            <li className="m-1">
              <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-500 px-3 py-1 text-sm font-medium leading-5 text-white shadow-sm duration-150 ease-in-out">
                View All
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">
                Completed
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">
                Pending
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 text-slate-500 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600">
                Canceled
              </button>
            </li>
          </ul>
        </div>        

        {/* Table */}
        <OrdersTable transactions={transactions} />

        {/* Pagination */}
        <div className="mt-8">
          <PaginationClassic />
        </div>    
      </div>

      <TransactionPanel />
    </div>
  )
}

export default function Orders() {
  return (
    <SelectedItemsProvider>
      <FlyoutProvider>
        <TransactionDetailProvider>
          <Transactions />
        </TransactionDetailProvider>
      </FlyoutProvider>
    </SelectedItemsProvider>
  )
}