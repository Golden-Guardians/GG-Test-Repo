export default function ShopCards05() {
  return (
    <>
      {/* Card 1 */}
      <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col p-5 text-center">
          <div className="mb-1 grow">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path className="text-indigo-300" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                <path className="text-indigo-600" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                <path className="text-indigo-500" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Merchandise</h3>
          </div>
          <div>
            <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col p-5 text-center">
          <div className="mb-1 grow">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <circle className="text-sky-200" cx="15" cy="15" r="9" fillRule="nonzero" />
                <circle className="text-sky-400" cx="9" cy="9" r="9" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Audiobooks</h3>
          </div>
          <div>
            <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col p-5 text-center">
          <div className="mb-1 grow">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path className="text-emerald-500" d="M3 .998h6a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                <path className="text-emerald-400" d="M23.428 4.616L19.381.57a1.957 1.957 0 00-2.762 0l-4.047 4.046c-.76.765-.76 2 0 2.764l4.047 4.047c.764.76 1.998.76 2.762 0l4.047-4.046c.761-.764.761-2 0-2.765z" />
                <path className="text-emerald-500" d="M15 12.998h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                <path className="text-emerald-200" d="M3 12.998h6a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Design & Tech</h3>
          </div>
          <div>
            <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col p-5 text-center">
          <div className="mb-1 grow">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path className="text-rose-100" d="M12 10l12 7-12 7-12-7z" />
                <path className="text-rose-300" d="M12 5l12 7-12 7-12-7z" />
                <path className="text-rose-500" d="M12 0l12 7-12 7L0 7z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">Apps & Software</h3>
          </div>
          <div>
            <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Explore -&gt;</a>
          </div>
        </div>
      </div>
    </>
  )
}