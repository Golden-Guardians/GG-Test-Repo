export const metadata = {
  title: 'Faqs - Golden Guardians',
  description: 'Page description',
}

export default function Faqs() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        <div className="m-auto max-w-3xl">

          {/* Page title */}
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">👋 How we can help you today?</h1>
          </div>

          {/* Search form */}
          <div className="mb-6">
            <form className="relative">
              <label htmlFor="action-search" className="sr-only">Search</label>
              <input id="action-search" className="form-input w-full py-3 pl-9 focus:border-slate-300" type="search" />
              <button className="group absolute inset-0 right-auto" type="submit" aria-label="Search">
                <svg className="ml-3 mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Filters */}
          <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
            <ul className="no-scrollbar -mx-4 flex flex-nowrap overflow-x-scroll text-sm font-medium sm:-mx-6 lg:-mx-8">
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-indigo-500" href="#0">Popular</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Accessibility</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Marketing</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Development</a>
              </li>
              <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
                <a className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Account</a>
              </li>
            </ul>
          </div>

          {/* Posts */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-100">Popular Questions</h2>
            {/* Post */}
            <article className="border-b border-slate-200 py-4 dark:border-slate-700">
              <header className="mb-2 flex items-start">
                <div className="mr-3 mt-2">
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                    <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">How can the widget to my website?</h3>
              </header>
              <div className="pl-7">
                <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">General</a>
                  </li>
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Marketing</a>
                  </li>
                </ul>
              </div>
            </article>
            {/* Post */}
            <article className="border-b border-slate-200 py-4 dark:border-slate-700">
              <header className="mb-2 flex items-start">
                <div className="mr-3 mt-2">
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                    <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">What would happen if I choose not to pay after the usage?</h3>
              </header>
              <div className="pl-7">
                <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Development</a>
                  </li>
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Acessibility</a>
                  </li>
                </ul>
              </div>
            </article>
            {/* Post */}
            <article className="border-b border-slate-200 py-4 dark:border-slate-700">
              <header className="mb-2 flex items-start">
                <div className="mr-3 mt-2">
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                    <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">What limitations do trial accounts have?</h3>
              </header>
              <div className="pl-7">
                <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Development</a>
                  </li>
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Plans</a>
                  </li>
                </ul>
              </div>
            </article>
            {/* Post */}
            <article className="border-b border-slate-200 py-4 dark:border-slate-700">
              <header className="mb-2 flex items-start">
                <div className="mr-3 mt-2">
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                    <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Is there any difference between Standard and Plus licenses?</h3>
              </header>
              <div className="pl-7">
                <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Development</a>
                  </li>
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Account</a>
                  </li>
                </ul>
              </div>
            </article>
            {/* Post */}
            <article className="border-b border-slate-200 py-4 dark:border-slate-700">
              <header className="mb-2 flex items-start">
                <div className="mr-3 mt-2">
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                    <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Is my personal information protected?</h3>
              </header>
              <div className="pl-7">
                <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">General</a>
                  </li>
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Accessibility</a>
                  </li>
                </ul>
              </div>
            </article>
            {/* Post */}
            <article className="border-b border-slate-200 py-4 dark:border-slate-700">
              <header className="mb-2 flex items-start">
                <div className="mr-3 mt-2">
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                    <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">What can I create with with this product?</h3>
              </header>
              <div className="pl-7">
                <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Marketing</a>
                  </li>
                  <li className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Plans</a>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <div className="flex justify-end">
              <a className="btn border-slate-200 bg-white text-indigo-500 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600" href="#0">See All Questions -&gt;</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}