export const metadata = {
  title: 'Button - Golden Guardians',
  description: 'Page description',
}

export default function ButtonLibrary() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Button ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="mt-8 space-y-8">

            {/* Appearances */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Appearances</h2>
              <div className="-m-1.5 flex flex-wrap items-center">
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Primary</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 text-indigo-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">Secondary</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">Tertiary</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn bg-rose-500 text-white hover:bg-rose-600">Danger</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 text-rose-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">Danger</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">Success</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 text-emerald-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">Success</button>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* States */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">States</h2>
              <div className="-m-1.5 flex flex-wrap items-center">
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn w-full bg-indigo-500 text-white shadow-none hover:bg-indigo-600 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-600" disabled>Disabled</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn w-full bg-indigo-500 text-white shadow-none hover:bg-indigo-600 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-600" disabled>
                    <svg className="h-4 w-4 shrink-0 animate-spin fill-current" viewBox="0 0 16 16">
                      <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                    <span className="ml-2">Loading</span>
                  </button>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Sizes</h2>
              <div className="-m-1.5 flex flex-wrap items-center">
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn-xs bg-indigo-500 text-white hover:bg-indigo-600">Button</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn-sm bg-indigo-500 text-white hover:bg-indigo-600">Button</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Button</button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn-lg bg-indigo-500 text-white hover:bg-indigo-600">Button</button>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* Buttons with an Icon */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Buttons with an Icon</h2>
              <div className="-m-1.5 flex flex-wrap items-center">
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                    <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="ml-2">Add Event</span>
                  </button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">
                    <svg className="h-4 w-4 shrink-0 fill-current text-slate-500 dark:text-slate-400" viewBox="0 0 16 16">
                      <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                    </svg>
                    <span className="ml-2">Edit Content</span>
                  </button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 text-rose-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                    <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                      <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                    </svg>
                    <span className="ml-2">Delete</span>
                  </button>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Icon Buttons</h2>
              <div className="-m-1.5 flex flex-wrap items-center">
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                    <svg className="h-4 w-4 shrink-0 fill-current text-slate-500 dark:text-slate-400" viewBox="0 0 16 16">
                      <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                    </svg>
                  </button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                    <svg className="h-4 w-4 shrink-0 fill-current text-rose-500" viewBox="0 0 16 16">
                      <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                    </svg>
                  </button>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
                    <svg className="h-4 w-4 shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
                      <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
                    </svg>
                  </button>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* Button Groups */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Button Groups</h2>
              <div className="-m-1.5 flex flex-wrap items-center">
                <div className="m-1.5">
                  {/* Start */}
                  <div className="flex flex-wrap -space-x-px">
                    <button className="btn rounded-none border-l-indigo-400 bg-indigo-600 text-white first:rounded-l first:border-l-transparent last:rounded-r">Weekly</button>
                    <button className="btn rounded-none border-l-indigo-400 bg-indigo-500 text-indigo-100 first:rounded-l first:border-r-transparent last:rounded-r hover:bg-indigo-600">Monthly</button>
                    <button className="btn rounded-none border-l-indigo-400 bg-indigo-500 text-indigo-100 first:rounded-l first:border-r-transparent last:rounded-r hover:bg-indigo-600">Yearly</button>
                  </div>
                  {/* End */}
                </div>
                <div className="m-1.5">
                  {/* Start */}
                  <div className="flex flex-wrap -space-x-px">
                    <button className="btn rounded-none border-slate-200 bg-slate-50 text-indigo-500 first:rounded-l last:rounded-r hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900">Weekly</button>
                    <button className="btn rounded-none border-slate-200 bg-white text-slate-600 first:rounded-l last:rounded-r hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900">Monthly</button>
                    <button className="btn rounded-none border-slate-200 bg-white text-slate-600 first:rounded-l last:rounded-r hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900">Yearly</button>
                  </div>
                  {/* End */}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
