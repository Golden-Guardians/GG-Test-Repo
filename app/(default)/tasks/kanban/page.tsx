export const metadata = {
  title: 'Kanban - Golden Guardians',
  description: 'Page description',
}

import Link from 'next/link'
import Task01 from './task-01'
import Task02 from './task-02'
import Task03 from './task-03'
import Task04 from './task-04'
import Task05 from './task-05'
import Task06 from './task-06'
import Task07 from './task-07'
import Task08 from './task-08'
import Task09 from './task-09'
import TasksGroups from './tasks-groups'

export default function Kanban() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

      {/* Page header */}
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Acme Inc. Kanban ✨</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
          {/* Add board button */}
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
            <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="ml-2">Add Board</span>
          </button>

        </div>

      </div>

      {/* Filters */}
      <div className="mb-4 border-b border-slate-200 dark:border-slate-700">
        <ul className="no-scrollbar -mx-4 flex flex-nowrap overflow-x-scroll text-sm font-medium sm:-mx-6 lg:-mx-8">
          <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
            <Link className="whitespace-nowrap text-indigo-500" href="#0">View All</Link>
          </li>
          <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
            <Link className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Web Sprint</Link>
          </li>
          <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
            <Link className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Marketing</Link>
          </li>
          <li className="mr-6 pb-3 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
            <Link className="whitespace-nowrap text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Development</Link>
          </li>
        </ul>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-8">
        {/* Tasks column */}
        <TasksGroups title="To Do's 🖋️">
          <Task01 />
          <Task02 />
          <Task03 />
        </TasksGroups>
        {/* Tasks column */}
        <TasksGroups title="In Progress ✌️">
          <Task04 />
          <Task05 />
        </TasksGroups>
        {/* Tasks column */}
        <TasksGroups title="Completed 🎉">
          <Task06 />
          <Task07 />
        </TasksGroups>
        {/* Tasks column */}
        <TasksGroups title="Notes 📒">
          <Task08 />
          <Task09 />
        </TasksGroups>
      </div>

    </div>
  )
}
