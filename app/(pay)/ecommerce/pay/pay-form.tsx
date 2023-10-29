'use client'

import PayBg from '@/public/images/pay-bg.jpeg'
import User from '@/public/images/user-64-13.jpeg'
import Image from 'next/image'
import { useState } from 'react'

export default function PayForm() {
  const [card, setCard] = useState<boolean>(true)

  return (
    <main>

      <div className="relative pt-8">
        <div className="absolute inset-0 overflow-hidden bg-slate-800" aria-hidden="true">
          <Image className="h-full w-full object-cover opacity-10 blur" src={PayBg} width={460} height={180} alt="Pay background" />
        </div>
        <div className="relative mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <Image className="rounded-t shadow-lg" src={PayBg} width={460} height={180} alt="Pay background" />
        </div>
      </div>

      <div className="relative mx-auto max-w-lg px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-b bg-white px-8 pb-6 shadow-lg dark:bg-slate-800">

          {/* Card header */}
          <div className="mb-6 text-center">
            <div className="mb-2">
              <Image className="-mt-8 inline-flex rounded-full" src={User} width={64} height={64} alt="User" />
            </div>
            <h1 className="mb-2 text-xl font-semibold leading-snug text-slate-800 dark:text-slate-100">Front-End Learning 🔥</h1>
            <div className="text-sm">
              Learn how to create real web apps using HTML & CSS. Code templates included.
            </div>
          </div>

          {/* Toggle */}
          <div className="mb-6 flex justify-center">
            <div className="relative flex w-full rounded bg-slate-50 p-1 dark:bg-slate-700/30">
              <span className="pointer-events-none absolute inset-0 m-1" aria-hidden="true">
                <span className={`absolute inset-0 w-1/2 rounded border border-slate-200 bg-white shadow-sm transition duration-150 ease-in-out dark:border-slate-600 dark:bg-slate-700 ${card ? 'translate-x-0' : 'translate-x-full'}`}></span>
              </span>
              <button
                className={`relative flex-1 p-1 text-sm font-medium duration-150 ease-in-out ${card ? 'text-slate-100' : ''}`}
                onClick={(e) => { e.preventDefault(); setCard(true); }}
              >Pay With Card</button>
              <button
                className={`relative flex-1 p-1 text-sm font-medium duration-150 ease-in-out ${card ? '' : 'text-slate-100'}`}
                onClick={(e) => { e.preventDefault(); setCard(false); }}
              >Pay With PayPal</button>
            </div>
          </div>

          {/* Card form */}
          {card &&
            <div>
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
                {/* Email */}
                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="card-email">Email <span className="text-rose-500">*</span></label>
                  <input id="card-email" className="form-input w-full" type="email" placeholder="john@company.com" />
                </div>
              </div>
              {/* htmlForm footer */}
              <div className="mt-6">
                <div className="mb-4">
                  <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">Pay $253.00</button>
                </div>
                <div className="text-center text-xs italic text-slate-500">You'll be charged $253, including $48 for VAT in Italy</div>
              </div>
            </div>
          }

          {/* PayPal form */}
          {!card &&
            <div>
              <div>
                <div className="mb-4">
                  <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">Pay with PayPal - $253.00</button>
                </div>
                <div className="text-center text-xs italic text-slate-500">You'll be charged $253, including $48 for VAT in Italy</div>
              </div>
            </div>
          }

        </div>
      </div>
    </main>
  )
}