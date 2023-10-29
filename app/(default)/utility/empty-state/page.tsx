export const metadata = {
  title: 'Empty State - Golden Guardians',
  description: 'Page description',
}

export default function EmptyState() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8 sm:flex sm:items-center sm:justify-between">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Empty State ✨</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">

            {/* Add board button */}
            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
              <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Add Event</span>
            </button>

          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="m-auto mt-16 max-w-2xl">

            <div className="px-4 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                <svg className="h-6 w-5 fill-current" viewBox="0 0 20 24">
                  <path className="text-slate-500 dark:text-slate-600" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
                  <path className="text-slate-300 dark:text-slate-400" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
                  <path className="text-slate-400 dark:text-slate-500" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-100">Pay your bills in just a few clicks</h2>
              <div className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="ml-2">Add Event</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}