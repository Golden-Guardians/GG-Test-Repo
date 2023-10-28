'use client'

import { useState } from 'react'

export default function PlansPanel() {

  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div className="grow">

      {/* Panel body */}
      <div className="space-y-6 p-6">

        {/* Plans */}
        <section>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-100">Plans</h2>
            <div className="text-sm">This workspace's Basic Plan is set to <strong className="font-medium">$34</strong> per month and will renew on <strong className="font-medium">July 9, 2021</strong>.</div>
          </div>

          {/* Pricing */}
          <div>
            {/* Toggle switch */}
            <div className="mb-6 flex items-center space-x-3">
              <div className="text-sm font-medium text-slate-500">Monthly</div>
              <div className="form-switch">
                <input type="checkbox" id="toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                <label className="bg-slate-400 dark:bg-slate-700" htmlFor="toggle">
                  <span className="bg-white shadow-sm" aria-hidden="true"></span>
                  <span className="sr-only">Pay annually</span>
                </label>
              </div>
              <div className="text-sm font-medium text-slate-500">Annually <span className="text-emerald-500">(-20%)</span></div>
            </div>
            {/* Pricing tabs */}
            <div className="grid grid-cols-12 gap-6">
              {/* Tab 1 */}
              <div className="relative col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-4">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-emerald-500" aria-hidden="true"></div>
                <div className="border-b border-slate-200 px-5 pb-6 pt-5 dark:border-slate-700">
                  <header className="mb-2 flex items-center">
                    <div className="mr-3 h-6 w-6 shrink-0 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300">
                      <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Basic</h3>
                  </header>
                  <div className="mb-2 text-sm">Ideal for individuals that need a custom solution with custom tools.</div>
                  {/* Price */}
                  <div className="mb-4 font-bold text-slate-800 dark:text-slate-100">
                    <span className="text-2xl">$</span><span className="text-3xl">{annual ? '14' : '19'}</span><span className="text-sm font-medium text-slate-500">/mo</span>
                  </div>
                  {/* CTA */}
                  <button className="btn w-full border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600">Downgrade</button>
                </div>
                <div className="px-5 pb-5 pt-4">
                  <div className="mb-4 text-xs font-semibold uppercase text-slate-800 dark:text-slate-100">What's included</div>
                  {/* List */}
                  <ul>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tab 2 */}
              <div className="relative col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-4">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-sky-500" aria-hidden="true"></div>
                <div className="border-b border-slate-200 px-5 pb-6 pt-5 dark:border-slate-700">
                  <header className="mb-2 flex items-center">
                    <div className="mr-3 h-6 w-6 shrink-0 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300">
                      <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Standard</h3>
                  </header>
                  <div className="mb-2 text-sm">Ideal for individuals that need a custom solution with custom tools.</div>
                  {/* Price */}
                  <div className="mb-4 font-bold text-slate-800 dark:text-slate-100">
                    <span className="text-2xl">$</span><span className="text-3xl">{annual ? '34' : '39'}</span><span className="text-sm font-medium text-slate-500">/mo</span>
                  </div>
                  {/* CTA */}
                  <button className="btn w-full bg-indigo-500 text-white shadow-none hover:bg-indigo-600 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-600" disabled>
                    <svg className="mr-2 h-3 w-3 shrink-0 fill-current" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span>Current Plan</span>
                  </button>
                </div>
                <div className="px-5 pb-5 pt-4">
                  <div className="mb-4 text-xs font-semibold uppercase text-slate-800 dark:text-slate-100">What's included</div>
                  {/* List */}
                  <ul>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tab 3 */}
              <div className="relative col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-4">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-indigo-500" aria-hidden="true"></div>
                <div className="border-b border-slate-200 px-5 pb-6 pt-5 dark:border-slate-700">
                  <header className="mb-2 flex items-center">
                    <div className="mr-3 h-6 w-6 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-300">
                      <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Plus</h3>
                  </header>
                  <div className="mb-2 text-sm">Ideal for individuals that need a custom solution with custom tools.</div>
                  {/* Price */}
                  <div className="mb-4 font-bold text-slate-800 dark:text-slate-100">
                    <span className="text-2xl">$</span><span className="text-3xl">{annual ? '74' : '79'}</span><span className="text-sm font-medium text-slate-500">/mo</span>
                  </div>
                  {/* CTA */}
                  <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">Upgrade</button>
                </div>
                <div className="px-5 pb-5 pt-4">
                  <div className="mb-4 text-xs font-semibold uppercase text-slate-800 dark:text-slate-100">What's included</div>
                  {/* List */}
                  <ul>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Sales */}
        <section>
          <div className="rounded-sm border border-indigo-100 bg-indigo-50 px-5 py-3 text-center dark:border-transparent dark:bg-indigo-500/30 xl:flex xl:flex-wrap xl:items-center xl:justify-between xl:text-left">
            <div className="mb-2 font-semibold text-slate-800 dark:text-slate-100 xl:mb-0">Looking for different configurations?</div>
            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Contact Sales</button>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="my-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">FAQs</h2>
          </div>
          <ul className="space-y-5">
            <li>
              <div className="mb-1 font-semibold text-slate-800 dark:text-slate-100">
                What is the difference between the three versions?
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
              </div>
            </li>
            <li>
              <div className="mb-1 font-semibold text-slate-800 dark:text-slate-100">
                Is there any difference between Basic and Plus licenses?
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </li>
            <li>
              <div className="mb-1 font-semibold text-slate-800 dark:text-slate-100">
                Got more questions?
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse cillum dolore eu fugiat <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">contact us</a>.
              </div>
            </li>
          </ul>
        </section>

      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col border-t border-slate-200 px-6 py-5 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">Cancel</button>
            <button className="btn ml-3 bg-indigo-500 text-white hover:bg-indigo-600">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  )
}