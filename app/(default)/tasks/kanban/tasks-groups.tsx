export default function TasksGroups({
  children,
  title
}: {
  children: React.ReactNode,
  title: string
}) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3">
      {/* Column header */}
      <header>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="grow truncate font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
          <button className="ml-2 shrink-0 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
          </button>
        </div>
        {/* Cards */}
        <div className="grid gap-2">
          {children}
        </div>
      </header>
    </div>
  )
}