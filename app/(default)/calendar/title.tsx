'use client'

import { CalendarProperties } from './calendar-properties'

export default function CalendarTitle() {

  const {
    monthNames,
    currentMonth,
    currentYear,
  } = CalendarProperties()  

  return (
    <div className="mb-4 sm:mb-0">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl"><span>{`${monthNames[currentMonth]} ${currentYear}`}</span> ✨</h1>
    </div>
  )
}