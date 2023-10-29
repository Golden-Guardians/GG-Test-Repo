export const metadata = {
  title: 'Cart 2 - Golden Guardians',
  description: 'Page description',
}

import CartItems from '../cart-items'

export default function Cart2() {
  return (
    <div className="lg:relative lg:flex">

      {/* Content */}
      <div className="px-4 py-8 sm:px-6 lg:grow lg:px-8 xl:pr-16 2xl:ml-[80px]">
        <div className="lg:mx-auto lg:max-w-[640px]">

          {/* Cart items */}
          <div className="mb-6 lg:mb-0">
            <div className="mb-3">
              <div className="flex space-x-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                <span className="text-slate-500 dark:text-slate-400">Review</span>
                <span>-&gt;</span>
                <span className="text-indigo-500">Payment</span>
                <span>-&gt;</span>
                <span className="text-slate-500 dark:text-slate-400">Confirm</span>
              </div>
            </div>
            <header className="mb-2">
              {/* Title */}
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Shopping Cart (3) ✨</h1>
            </header>
            <CartItems />
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div className="no-scrollbar border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/20 lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:w-[320px] lg:shrink-0 lg:overflow-y-auto lg:overflow-x-hidden lg:border-l lg:border-t-0 xl:w-[352px] 2xl:w-[calc(352px+80px)]">
          <div className="px-4 py-8 lg:px-8 2xl:px-12">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Review & Pay</h2>
              <div className="space-y-6">

                {/* Order summary */}
                <div>
                  <div className="mb-2 font-semibold text-slate-800 dark:text-slate-100">Order Summary</div>
                  <ul className="mb-4">
                    <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm dark:border-slate-700">
                      <div>Subtotal</div>
                      <div className="font-medium text-slate-800 dark:text-slate-100">$205</div>
                    </li>
                    <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm dark:border-slate-700">
                      <div>Total due (including taxes)</div>
                      <div className="font-medium text-emerald-600">$253</div>
                    </li>
                  </ul>
                </div>

                {/* Payment Details */}
                <div>
                  <div className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Payment Details</div>
                  <div className="space-y-4">
                    {/* Card Number */}
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="card-nr">Card Number <span className="text-rose-500">*</span></label>
                      <input id="card-nr" className="form-input w-full" type="text" placeholder="1234 1234 1234 1234" />
                    </div>
                    {/* Expiry and CVC */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="mb-1 block text-sm font-medium" htmlFor="card-expiry">Expiry Date <span className="text-rose-500">*</span></label>
                        <input id="card-expiry" className="form-input w-full" type="text" placeholder="MM/YY" />
                      </div>
                      <div className="flex-1">
                        <label className="mb-1 block text-sm font-medium" htmlFor="card-cvc">CVC <span className="text-rose-500">*</span></label>
                        <input id="card-cvc" className="form-input w-full" type="text" placeholder="CVC" />
                      </div>
                    </div>
                    {/* Name on Card */}
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="card-name">Name on Card <span className="text-rose-500">*</span></label>
                      <input id="card-name" className="form-input w-full" type="text" placeholder="John Doe" />
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <div className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Additional Details</div>
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="card-email">Email <span className="text-rose-500">*</span></label>
                      <input id="card-email" className="form-input w-full" type="email" placeholder="john@company.com" />
                    </div>
                    {/* Country */}
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="card-country">Country <span className="text-rose-500">*</span></label>
                      <select id="card-country" className="form-select w-full">
                        <option>Italy</option>
                        <option>USA</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4">
                    <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">Pay $253.00</button>
                  </div>
                  <div className="text-center text-xs italic text-slate-500">You'll be charged $253, including $48 for VAT in Italy</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}