export const metadata = {
  title: 'Customers - Golden Guardians',
  description: 'Page description',
}

import { SelectedItemsProvider } from '@/app/selected-items-context'
import DateSelect from '@/components/date-select'
import DeleteButton from '@/components/delete-button'
import FilterButton from '@/components/dropdown-filter'
import PaginationClassic from '@/components/pagination-classic'
import CustomersTable from './customers-table'

import Image01 from '@/public/images/user-40-01.jpeg'
import Image02 from '@/public/images/user-40-02.jpeg'
import Image03 from '@/public/images/user-40-03.jpeg'
import Image04 from '@/public/images/user-40-04.jpeg'
import Image05 from '@/public/images/user-40-05.jpeg'
import Image06 from '@/public/images/user-40-06.jpeg'
import Image07 from '@/public/images/user-40-07.jpeg'
import Image08 from '@/public/images/user-40-08.jpeg'
import Image09 from '@/public/images/user-40-09.jpeg'
import Image10 from '@/public/images/user-40-10.jpeg'

function CustomersContent() {

  // Some dummy customers data
  const customers = [
    {
      id: 0,
      image: Image01,
      name: 'Patricia Semklo',
      email: 'patricia.semklo@app.com',
      location: '🇬🇧 London, UK',
      orders: '24',
      lastOrder: '#123567',
      spent: '$2,890.66',
      refunds: '-',
      fav: true
    },
    {
      id: 1,
      image: Image02,
      name: 'Dominik Lamakani',
      email: 'dominik.lamakani@gmail.com',
      location: '🇩🇪 Dortmund, DE',
      orders: '77',
      lastOrder: '#779912',
      spent: '$14,767.04',
      refunds: '4',
      fav: false
    },
    {
      id: 2,
      image: Image03,
      name: 'Ivan Mesaros',
      email: 'imivanmes@gmail.com',
      location: '🇫🇷 Paris, FR',
      orders: '44',
      lastOrder: '#889924',
      spent: '$4,996.00',
      refunds: '1',
      fav: true
    },
    {
      id: 3,
      image: Image04,
      name: 'Maria Martinez',
      email: 'martinezhome@gmail.com',
      location: '🇮🇹 Bologna, IT',
      orders: '29',
      lastOrder: '#897726',
      spent: '$3,220.66',
      refunds: '2',
      fav: false
    },
    {
      id: 4,
      image: Image05,
      name: 'Vicky Jung',
      email: 'itsvicky@contact.com',
      location: '🇬🇧 London, UK',
      orders: '22',
      lastOrder: '#123567',
      spent: '$2,890.66',
      refunds: '-',
      fav: true
    },
    {
      id: 5,
      image: Image06,
      name: 'Tisho Yanchev',
      email: 'tisho.y@kurlytech.com',
      location: '🇬🇧 London, UK',
      orders: '14',
      lastOrder: '#896644',
      spent: '$1,649.99',
      refunds: '1',
      fav: true
    },
    {
      id: 6,
      image: Image07,
      name: 'James Cameron',
      email: 'james.ceo@james.tech',
      location: '🇫🇷 Marseille, FR',
      orders: '34',
      lastOrder: '#136988',
      spent: '$3,569.87',
      refunds: '2',
      fav: true
    },
    {
      id: 7,
      image: Image08,
      name: 'Haruki Masuno',
      email: 'haruki@supermail.jp',
      location: '🇯🇵 Tokio, JP',
      orders: '112',
      lastOrder: '#442206',
      spent: '$19,246.07',
      refunds: '6',
      fav: false
    },
    {
      id: 8,
      image: Image09,
      name: 'Joe Huang',
      email: 'joehuang@hotmail.com',
      location: '🇨🇳 Shanghai, CN',
      orders: '64',
      lastOrder: '#764321',
      spent: '$12,276.92',
      refunds: '-',
      fav: true
    },
    {
      id: 9,
      image: Image10,
      name: 'Carolyn McNeail',
      email: 'carolynlove@gmail.com',
      location: '🇮🇹 Milan, IT',
      orders: '19',
      lastOrder: '#908764',
      spent: '$1,289.97',
      refunds: '2',
      fav: false
    }
  ]

  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Customers ✨</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">

          {/* Delete button */}
          <DeleteButton />

          {/* Dropdown */}
          <DateSelect />

          {/* Filter button */}
          <FilterButton align="right" />

          {/* Add customer button */}
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
            <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="ml-2 hidden xs:block">Add Customer</span>
          </button>

        </div>

      </div>

      {/* Table */}
      <CustomersTable customers={customers} />

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic />
      </div>    
    </div>
  )
}

export default function Customers() {
  return (
    <SelectedItemsProvider>
      <CustomersContent />
    </SelectedItemsProvider>
  )
}