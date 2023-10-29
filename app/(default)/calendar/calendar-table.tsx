'use client'

import { useEffect } from 'react'
import { CalendarProperties } from './calendar-properties'

export interface Event {
  eventStart: Date
  eventEnd: Date | null
  eventName: string
  eventColor: string
}

export default function CalendarTable({ events }: { events: Event[] }) {

  const {
    dayNames,
    currentYear,
    currentMonth,
    daysInMonth,
    startingBlankDays,
    endingBlankDays,
    eventColor,
    isToday,
    renderDays,
  } = CalendarProperties()  

  const getEvents = (date: number) => {
    return events.filter(e => new Date(e.eventStart).toDateString() === new Date(currentYear, currentMonth, date).toDateString())
  }  

  useEffect(() => {
    renderDays()
  }, [])

  return (
    <div className="overflow-hidden rounded-sm bg-white shadow dark:bg-slate-800">

      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-px border-b border-slate-200 dark:border-slate-700">
        {
          dayNames.map(day => {
            return (
              <div className="px-1 py-3" key={day}>
                <div className="text-center text-sm font-medium text-slate-500 lg:hidden">{day.substring(0, 3)}</div>
                <div className="hidden text-center text-sm font-medium text-slate-500 dark:text-slate-400 lg:block">{day}</div>
              </div>
            )
          })
        }
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-px bg-slate-200 dark:bg-slate-700">
        {/* Diagonal stripes pattern */}
        <svg className="sr-only">
          <defs>
            <pattern id="stripes" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(135)">
              <line className="stroke-current text-slate-200 opacity-50 dark:text-slate-700" x1="0" y="0" x2="0" y2="5" strokeWidth="2" />
            </pattern>
          </defs>
        </svg>
        {/* Empty cells (previous month) */}
        {
          startingBlankDays.map(blankday => {
            return (
              <div className="h-20 bg-slate-50 dark:bg-slate-800 sm:h-28 lg:h-36" key={blankday}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <rect width="100%" height="100%" fill="url(#stripes)" />
                </svg>
              </div>
            )
          })
        }
        {/* Days of the current month */}
        {
          daysInMonth.map(day => {
            return (
              <div className="relative h-20 overflow-hidden bg-white dark:bg-slate-800 sm:h-28 lg:h-36" key={day}>
                <div className="flex h-full flex-col justify-between">
                  {/* Events */}
                  <div className="relative flex grow flex-col overflow-hidden p-0.5 sm:p-1.5">
                    {
                      getEvents(day).map(event => {
                        return (
                          <button className="relative mb-1 w-full text-left" key={event.eventName}>
                            <div className={`overflow-hidden rounded px-2 py-0.5 ${eventColor(event.eventColor)}`}>
                              {/* Event name */}
                              <div className="truncate text-xs font-semibold">{event.eventName}</div>
                              {/* Event time */}
                              <div className="hidden truncate text-xs uppercase sm:block">
                                {/* Start date */}
                                {event.eventStart &&
                                  <span>{event.eventStart.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: 'numeric' })}</span>
                                }
                                {/* End date */}
                                {event.eventEnd &&
                                  <span>
                                    - <span>{event.eventEnd.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: 'numeric' })}</span>
                                  </span>
                                }
                              </div>
                            </div>
                          </button>
                        )
                      })
                    }
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent dark:from-slate-800" aria-hidden="true"></div>
                  </div>
                  {/* Cell footer */}
                  <div className="flex items-center justify-between p-0.5 sm:p-1.5">
                    {/* More button (if more than 2 events) */}
                    {getEvents(day).length > 2 &&
                      <button className="whitespace-nowrap rounded border border-slate-200 px-0.5 text-center text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-300 sm:px-2 sm:py-0.5">
                        <span className="md:hidden">+</span><span>{getEvents(day).length - 2}</span> <span className="hidden md:inline">more</span>
                      </button>
                    }
                    {/* Day number */}
                    <button className={`ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full text-center text-xs font-medium hover:bg-indigo-100 dark:text-slate-300 dark:hover:bg-slate-600 sm:text-sm ${isToday(day) && 'text-indigo-500'}`}>{day}</button>
                  </div>
                </div>
              </div>
            )
          })
        }
        {/* Empty cells (next month) */}
        {
          endingBlankDays.map(blankday => {
            return (
              <div className="h-20 bg-slate-50 dark:bg-slate-800 sm:h-28 lg:h-36" key={blankday}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <rect width="100%" height="100%" fill="url(#stripes)" />
                </svg>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}