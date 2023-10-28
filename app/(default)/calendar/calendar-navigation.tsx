'use client'

import { useEffect } from 'react'
import { CalendarProperties } from './calendar-properties'

export interface Event {
  eventStart: Date
  eventEnd: Date | null
  eventName: string
  eventColor: string
}

export default function CalendarNavigation() {

  const {
    currentMonth,
    setCurrentMonth,
    renderDays,
  } = CalendarProperties()  

  return (
    <>
      {/* Previous month button */}
      <button
        className="btn border-slate-200 bg-white px-2.5 text-slate-500 hover:border-slate-300 hover:text-slate-600 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-600"
        disabled={currentMonth === 0}
        onClick={() => { setCurrentMonth(currentMonth - 1); renderDays(); }}
      >
        <span className="sr-only">Previous month</span><wbr />
        <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
        </svg>
      </button>

      {/* Next month button */}
      <button
        className="btn border-slate-200 bg-white px-2.5 text-slate-500 hover:border-slate-300 hover:text-slate-600 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-600"
        disabled={currentMonth === 11}
        onClick={() => { setCurrentMonth(currentMonth + 1); renderDays(); }}
      >
        <span className="sr-only">Next month</span><wbr />
        <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
        </svg>
      </button>    
    </>
  )
}