import Link from 'next/link'

export default function AnalyticsCard06() {
  return(
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <header className="border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Pages</h2>
      </header>
      <div className="grow p-3">
        <div className="flex h-full flex-col">
          {/* Card content */}
          <div className="grow">
            <ul className="flex justify-between space-x-2 px-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
              <li>Source</li>
              <li>Pageviews</li>
            </ul>

            <ul className="mb-4 mt-3 space-y-1 text-sm text-slate-800 dark:text-slate-100">
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '82%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>acme.com/</div>
                  <div className="font-medium">28K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '70%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.acme.com/open-pro/</div>
                  <div className="font-medium">12K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '60%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.acme.com/appy/</div>
                  <div className="font-medium">9.7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '44%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>acme.com/unlimited/</div>
                  <div className="font-medium">9.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '40%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.acme.com/simple/</div>
                  <div className="font-medium">7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '30%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>acme.com/about-us/</div>
                  <div className="font-medium">6.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '22%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>docs.acme.com/</div>
                  <div className="font-medium">5.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/30" aria-hidden="true" style={{ width: '12%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.acme.com/twist/</div>
                  <div className="font-medium">2.2K</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div className="border-t border-slate-100 pb-1 pt-4 text-center dark:border-slate-700">
            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Page Report -&gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
