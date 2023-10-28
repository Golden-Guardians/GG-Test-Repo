'use client'

import { StaticImageData } from 'next/image'
import { useItemSelection } from '@/components/utils/use-item-selection'
import TransactionsTableItem from './transactions-table-item'

export interface Transaction {
  id: number
  image: StaticImageData
  name: string
  date: string
  status: string
  amount: string
}

export default function TransactionsTable({ transactions }: { transactions: Transaction[]}) {
  const {
    selectedItems,
    isAllSelected,
    handleCheckboxChange,
    handleSelectAllChange,
  } = useItemSelection(transactions)  

  return (
    <div className="bg-white dark:bg-slate-900">
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto dark:text-slate-300">
            {/* Table header */}
            <thead className="border-y border-slate-200 text-xs font-semibold uppercase text-slate-500 dark:border-slate-700">
              <tr>
                <th className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" onChange={handleSelectAllChange} checked={isAllSelected} />
                    </label>
                  </div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Counterparty</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Payment Date</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Status</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-right font-semibold">Amount</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-200 border-b border-slate-200 text-sm dark:divide-slate-700 dark:border-slate-700">
              {transactions.map(transaction => (
                <TransactionsTableItem
                  key={transaction.id}
                  transaction={transaction}
                  onCheckboxChange={handleCheckboxChange}
                  isSelected={selectedItems.includes(transaction.id)} />
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}