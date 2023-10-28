export default function AppsPanel() {
  return (
    <div className="grow">

      {/* Panel body */}
      <div className="p-6">
        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">Connected Apps</h2>

        {/* General */}
        <div className="mb-6">
          {/* Filters */}
          <div className="mb-4 border-b border-slate-200 dark:border-slate-700">
            <ul className="no-scrollbar -mx-4 flex flex-nowrap overflow-x-scroll text-sm font-medium sm:-mx-6 lg:-mx-8">
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-indigo-500" href="#0">View All</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Utility</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Marketing</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Development</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Connected Apps cards */}
        <section className="border-b border-slate-200 pb-6 dark:border-slate-700">
          <div className="grid grid-cols-12 gap-6">
            {/* Card 1 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-6 2xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-300">
                      <svg className="h-10 w-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">MaterialStack</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400 dark:text-slate-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                        </svg>
                        <div className="text-sm text-slate-500 dark:text-slate-300">4K+</div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                        <div className="text-sm text-amber-600">4.7</div>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm flex items-center border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span>Connected</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-6 2xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300">
                      <svg className="h-10 w-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">MaterialStack</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400 dark:text-slate-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                        </svg>
                        <div className="text-sm text-slate-500 dark:text-slate-300">4K+</div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                        <div className="text-sm text-amber-600">4.7</div>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm flex items-center border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span>Connected</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-6 2xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300">
                      <svg className="h-10 w-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">MaterialStack</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400 dark:text-slate-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                        </svg>
                        <div className="text-sm text-slate-500 dark:text-slate-300">4K+</div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                        <div className="text-sm text-amber-600">4.7</div>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm flex items-center border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span>Connected</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-6 2xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-rose-500 to-rose-300">
                      <svg className="h-10 w-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">MaterialStack</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400 dark:text-slate-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                        </svg>
                        <div className="text-sm text-slate-500 dark:text-slate-300">4K+</div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                        <div className="text-sm text-amber-600">4.7</div>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm flex items-center border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span>Connected</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-6 2xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300">
                      <svg className="h-10 w-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">MaterialStack</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400 dark:text-slate-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                        </svg>
                        <div className="text-sm text-slate-500 dark:text-slate-300">4K+</div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                        <div className="text-sm text-amber-600">4.7</div>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm flex items-center border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span>Connected</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-6 2xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-slate-500 to-slate-300">
                      <svg className="h-10 w-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">MaterialStack</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400 dark:text-slate-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                        </svg>
                        <div className="text-sm text-slate-500 dark:text-slate-300">4K+</div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg className="mr-1.5 h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                        <div className="text-sm text-amber-600">4.7</div>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm flex items-center border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                      <svg className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span>Connected</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories cards */}
        <section>
          <h3 className="mb-5 mt-6 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Trending Categories</h3>
          <div className="grid grid-cols-12 gap-6">
            {/* Card 1 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header>
                    <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Programming</h3>
                  </header>
                </div>
                {/* Card footer */}
                <footer className="mt-2">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="text-sm italic text-slate-500 dark:text-slate-400">400+ Apps</div>
                    {/* Right side */}
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header>
                    <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Digital Marketing</h3>
                  </header>
                </div>
                {/* Card footer */}
                <footer className="mt-2">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="text-sm italic text-slate-500 dark:text-slate-400">320+ Apps</div>
                    {/* Right side */}
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 xl:col-span-4">
              {/* Card content */}
              <div className="flex h-full flex-col p-5">
                <div className="grow">
                  <header>
                    <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Music & Audio</h3>
                  </header>
                </div>
                {/* Card footer */}
                <footer className="mt-2">
                  <div className="flex flex-wrap items-center justify-between">
                    {/* Left side */}
                    <div className="text-sm italic text-slate-500 dark:text-slate-400">270+ Apps</div>
                    {/* Right side */}
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}