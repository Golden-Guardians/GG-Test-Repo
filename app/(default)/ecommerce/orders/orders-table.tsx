'use client'

import { StaticImageData } from 'next/image'
import { useItemSelection } from '@/components/utils/use-item-selection'
import OrdersTableItem from './orders-table-item'

export interface Order {
  id: number
  image: StaticImageData
  order: string
  date: string
  customer: string
  total: string
  status: string
  items: string
  location: string
  type: string
  description: string  
}

export default function OrdersTable({ orders }: { orders: Order[]}) {
  const {
    selectedItems,
    isAllSelected,
    handleCheckboxChange,
    handleSelectAllChange,
  } = useItemSelection(orders)  

  return (
    <div className="relative rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">All Orders <span className="font-medium text-slate-400 dark:text-slate-500">442</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto divide-y divide-slate-200 dark:divide-slate-700 dark:text-slate-300">
            {/* Table header */}
            <thead className="border-t border-slate-200 bg-slate-50 text-xs uppercase text-slate-500 dark:border-slate-700 dark:bg-slate-900/20 dark:text-slate-400">
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
                  <div className="text-left font-semibold">Order</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Date</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Customer</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Total</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Status</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="font-semibold">Items</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Location</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-left font-semibold">Payment type</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <span className="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {orders.map(order => (
              <OrdersTableItem
                key={order.id}
                order={order}
                onCheckboxChange={handleCheckboxChange}
                isSelected={selectedItems.includes(order.id)} />
            ))}
          </table>

        </div>
      </div>
    </div>
  )
}