export default function ForumLeftContent() {
  return (
    <div className="mb-8 w-full md:mb-0 md:w-[15rem]">
      <div className="no-scrollbar md:sticky md:top-16 md:h-[calc(100dvh-64px)] md:overflow-y-auto md:overflow-x-hidden">
        <div className="md:py-8">
          <div className="flex items-center justify-between md:block">
            {/* Title */}
            <header className="mb-6">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Forum ✨</h1>
            </header>

            {/* Button */}
            <div className="mb-6 xl:hidden">
              <button className="btn bg-indigo-500 text-white hover:bg-indigo-600 md:w-full">Create Post</button>
            </div>
          </div>

          {/* Links */}
          <div className="no-scrollbar -mx-4 flex flex-nowrap overflow-x-scroll px-4 md:block md:space-y-3 md:overflow-auto">
            {/* Group 1 */}
            <div>
              <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 md:sr-only">Menu</div>
              <ul className="mr-3 flex flex-nowrap md:mr-0 md:block">
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded bg-white px-2.5 py-2 dark:bg-slate-800" href="#0">
                    <svg className="mr-2 h-4 w-4 shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
                      <path d="M10 16h4c.6 0 1-.4 1-.998V6.016c0-.3-.1-.6-.4-.8L8.6.226c-.4-.3-.9-.3-1.3 0l-6 4.992c-.2.2-.3.5-.3.799v8.986C1 15.6 1.4 16 2 16h4c.6 0 1-.4 1-.998v-2.996h2v2.996c0 .599.4.998 1 .998Zm-4-5.99c-.6 0-1 .399-1 .998v2.995H3V6.515L8 2.32l5 4.194v7.488h-2v-2.995c0-.6-.4-.999-1-.999H6Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-500">Home</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded px-2.5 py-2" href="#0">
                    <svg className="mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                      <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Reading List</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded px-2.5 py-2" href="#0">
                    <svg className="mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                      <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Listings</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded px-2.5 py-2" href="#0">
                    <svg className="mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                      <path d="M1 12a1 1 0 0 1-.707-1.704l4.496-4.493a1 1 0 0 1 1.413 0l3.29 3.287 4.79-4.785a1 1 0 1 1 1.413 1.412l-5.496 5.491a1 1 0 0 1-1.413 0L5.496 7.92l-3.79 3.787A1 1 0 0 1 .999 12Z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Podcasts</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Group 2 */}
            <div>
              <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">My Groups</div>
              <ul className="mr-3 flex flex-nowrap md:mr-0 md:block">
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded px-2.5 py-2" href="#0">
                    <svg className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 12 12">
                      <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12Z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Startups</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded px-2.5 py-2" href="#0">
                    <svg className="mr-3 h-3 w-3 shrink-0 fill-current text-rose-500" viewBox="0 0 12 12">
                      <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12Z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Javascript</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mb-0.5 md:mr-0">
                  <a className="flex items-center whitespace-nowrap rounded px-2.5 py-2" href="#0">
                    <svg className="mr-3 h-3 w-3 shrink-0 fill-current text-amber-500" viewBox="0 0 12 12">
                      <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12Z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Productivity</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}