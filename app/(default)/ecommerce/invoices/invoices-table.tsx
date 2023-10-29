'use client'

import { useItemSelection } from '@/components/utils/use-item-selection'
import InvoicesTableItem from './invoices-table-item'

export interface Invoice {
  id: number
  invoice: string
  total: string
  status: string
  customer: string
  issueddate: string
  paiddate: string
  type: string 
}

export default function InvoicesTable({ invoices }: { invoices: Invoice[]}) {
  const {
    selectedItems,
    isAllSelected,
    handleCheckboxChange,
    handleSelectAllChange,
  } = useItemSelection(invoices)  

  return (
    <div className="relative rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Invoices <span className="font-medium text-slate-400 dark:text-slate-500">67</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto dark:text-slate-300">
            {/* Table header */}
            <thead className="border-y border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500 dark:border-slate-700 dark:bg-slate-900/20 dark:text-slate-400">
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
                  <div className="text-left font-semibold">Invoice</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Total</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Status</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Customer</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Issued on</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Paid on</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Type</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-700">
              {invoices.map(invoice => (
                <InvoicesTableItem
                  key={invoice.id}
                  invoice={invoice}
                  onCheckboxChange={handleCheckboxChange}
                  isSelected={selectedItems.includes(invoice.id)} />
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}