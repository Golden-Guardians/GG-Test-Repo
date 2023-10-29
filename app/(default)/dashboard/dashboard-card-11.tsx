export default function DashboardCard11() {
  return(
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 xl:col-span-6">
      <header className="border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Income/Expenses</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="rounded-sm bg-slate-50 p-2 text-xs font-semibold uppercase text-slate-400 dark:bg-slate-700 dark:bg-opacity-50 dark:text-slate-500">Today</header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-rose-500">
                <svg className="h-9 w-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm dark:border-slate-700">
                <div className="flex grow justify-between">
                  <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Qonto</a> billing</div>
                  <div className="ml-2 shrink-0 self-start">
                    <span className="font-medium text-slate-800 dark:text-slate-100">-$49.88</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-emerald-500">
                <svg className="h-9 w-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm dark:border-slate-700">
                <div className="flex grow justify-between">
                  <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Acme.com</a> Market Ltd 70 Wilson St London</div>
                  <div className="ml-2 shrink-0 self-start">
                    <span className="font-medium text-emerald-500">+249.88</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-emerald-500">
                <svg className="h-9 w-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm dark:border-slate-700">
                <div className="flex grow justify-between">
                  <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Notion Labs Inc</a></div>
                  <div className="ml-2 shrink-0 self-start">
                    <span className="font-medium text-emerald-500">+99.99</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-emerald-500">
                <svg className="h-9 w-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm dark:border-slate-700">
                <div className="flex grow justify-between">
                  <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Market Cap Ltd</a></div>
                  <div className="ml-2 shrink-0 self-start">
                    <span className="font-medium text-emerald-500">+1,200.88</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-slate-200">
                <svg className="h-9 w-9 fill-current text-slate-400" viewBox="0 0 36 36">
                  <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm dark:border-slate-700">
                <div className="flex grow justify-between">
                  <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">App.com</a> Market Ltd 70 Wilson St London</div>
                  <div className="ml-2 shrink-0 self-start">
                    <span className="font-medium text-slate-800 line-through dark:text-slate-100">+$99.99</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-rose-500">
                <svg className="h-9 w-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="flex grow items-center py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">App.com</a> Market Ltd 70 Wilson St London</div>
                  <div className="ml-2 shrink-0 self-start">
                    <span className="font-medium text-slate-800 dark:text-slate-100">-$49.88</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
