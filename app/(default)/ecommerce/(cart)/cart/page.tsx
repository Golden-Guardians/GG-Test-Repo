export const metadata = {
  title: 'Cart - Golden Guardians',
  description: 'Page description',
}

import CartItems from '../cart-items'

export default function Cart() {
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

        {/* Cart items */}
        <div className="mb-6 lg:mb-0">
          <div className="mb-3">
            <div className="flex space-x-2 text-sm font-medium text-slate-400 dark:text-slate-500">
              <span className="text-indigo-500">Review</span>
              <span>-&gt;</span>
              <span className="text-slate-500 dark:text-slate-400">Payment</span>
              <span>-&gt;</span>
              <span className="text-slate-500 dark:text-slate-400">Confirm</span>
            </div>
          </div>
          <header className="mb-2">
            {/* Title */}
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Shopping Cart (3) ✨</h1>
          </header>

          {/* Cart items */}
          <CartItems />

        </div>

        {/* Sidebar */}
        <div>
          <div className="rounded-sm border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-700 dark:bg-slate-800 lg:w-[18rem] xl:w-[20rem]">
            <div className="mb-2 font-semibold text-slate-800 dark:text-slate-100">Order Summary</div>
            {/* Order details */}
            <ul className="mb-4">
              <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm dark:border-slate-700">
                <div>Products & Subscriptions</div>
                <div className="font-medium text-slate-800 dark:text-slate-100">$205</div>
              </li>
              <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm dark:border-slate-700">
                <div>Shipping</div>
                <div className="font-medium text-slate-800 dark:text-slate-100">-</div>
              </li>
              <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm dark:border-slate-700">
                <div>Taxes</div>
                <div className="font-medium text-slate-800 dark:text-slate-100">$48</div>
              </li>
              <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm dark:border-slate-700">
                <div>Total due (including taxes)</div>
                <div className="font-medium text-emerald-600">$253</div>
              </li>
            </ul>
            {/* Promo box */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <label className="mb-1 block text-sm font-medium" htmlFor="promo">Promo Code</label>
                <div className="text-sm italic text-slate-400 dark:text-slate-500">optional</div>
              </div>
              <input id="promo" className="form-input mb-2 w-full" type="text" />
              <button className="btn w-full bg-indigo-500 text-white shadow-none hover:bg-indigo-600 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-600" disabled>Apply Code</button>
            </div>
            <div className="mb-4">
              <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">Buy Now - $253.00</button>
            </div>
            <div className="text-center text-xs italic text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a className="underline hover:no-underline" href="#0">Terms</a>.</div>
          </div>
        </div>

      </div>
    </div>
  )
}