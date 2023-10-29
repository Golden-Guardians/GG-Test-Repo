export const metadata = {
  title: 'Breadcrumb - Golden Guardians',
  description: 'Page description',
}

export default function BreadcrumbLibrary() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Breadcrumb ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="mt-8 space-y-8">

            {/* With Slashes */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">With Slashes</h2>
              <div className="rounded-sm border border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-800">
                <div className="text-center">
                  {/* Start */}
                  <ul className="inline-flex flex-wrap text-sm font-medium">
                    <li className="after:px-2 after:text-slate-400 after:content-['/'] last:after:hidden dark:after:text-slate-600">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Home</a>
                    </li>
                    <li className="after:px-2 after:text-slate-400 after:content-['/'] last:after:hidden dark:after:text-slate-600">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Settings</a>
                    </li>
                    <li className="after:px-2 after:text-slate-400 after:content-['/'] last:after:hidden dark:after:text-slate-600">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Notifications</a>
                    </li>
                  </ul>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* With Dots */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">With Dots</h2>
              <div className="rounded-sm border border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-800">
                <div className="text-center">
                  {/* Start */}
                  <ul className="inline-flex flex-wrap text-sm font-medium">
                    <li className="after:px-2 after:text-slate-400 after:content-['·'] last:after:hidden dark:after:text-slate-600">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Home</a>
                    </li>
                    <li className="after:px-2 after:text-slate-400 after:content-['·'] last:after:hidden dark:after:text-slate-600">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Settings</a>
                    </li>
                    <li className="after:px-2 after:text-slate-400 after:content-['·'] last:after:hidden dark:after:text-slate-600">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Notifications</a>
                    </li>
                  </ul>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* With Chevrons */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">With Chevrons</h2>
              <div className="rounded-sm border border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-800">
                <div className="text-center">
                  {/* Start */}
                  <ul className="inline-flex flex-wrap text-sm font-medium">
                    <li className="flex items-center">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Home</a>
                      <svg className="mx-3 h-4 w-4 fill-current text-slate-400 dark:text-slate-600" viewBox="0 0 16 16">
                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                      </svg>
                    </li>
                    <li className="flex items-center">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Settings</a>
                      <svg className="mx-3 h-4 w-4 fill-current text-slate-400 dark:text-slate-600" viewBox="0 0 16 16">
                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                      </svg>
                    </li>
                    <li className="flex items-center">
                      <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">Notifications</a>
                    </li>
                  </ul>
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
