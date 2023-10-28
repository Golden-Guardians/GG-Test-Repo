import Link from 'next/link'

export default function AnalyticsCard06() {
  return(
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <header className="border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Countries</h2>
      </header>
      <div className="grow p-3">
        <div className="flex h-full flex-col">
          {/* Card content */}
          <div className="grow">
            <ul className="flex justify-between space-x-2 px-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
              <li>Source</li>
              <li>Sessions</li>
            </ul>

            <ul className="mb-4 mt-3 space-y-1 text-sm text-slate-800 dark:text-slate-100">
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '82%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇨🇮 Ireland</div>
                  <div className="font-medium">4.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '70%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇺🇸 United States</div>
                  <div className="font-medium">3.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '60%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇩🇪 Germany</div>
                  <div className="font-medium">1.6k</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '44%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇮🇹 Italy</div>
                  <div className="font-medium">1.2k</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '40%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇬🇧 United Kingdom</div>
                  <div className="font-medium">912</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '30%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇫🇷 France</div>
                  <div className="font-medium">677</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '22%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇮🇳 India</div>
                  <div className="font-medium">449</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style={{ width: '12%' }}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇸🇬 Singapore</div>
                  <div className="font-medium">269</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div className="border-t border-slate-100 pb-1 pt-4 text-center dark:border-slate-700">
            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Countries Report -&gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
