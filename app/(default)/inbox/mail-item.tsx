'use client'

import { useState } from 'react'
import { Mail } from './inbox-body'
import Image from 'next/image'

export default function MailItem({ mail }: { mail: Mail }) {
  const [open, setOpen] = useState<boolean>(mail.open)

  return (
    <div className="py-6">
      {/* Header */}
      <header className="flex items-start">
        {/* Avatar */}
        <Image className="mr-3 shrink-0 rounded-full" src={mail.image} width={40} height={40} alt={mail.name} />
        {/* Meta */}
        <div className="grow">
          <div className="mb-0.5 items-start justify-between sm:flex">
            {/* Message author */}
            <div className="mb-2 items-center sm:mb-0 xl:flex">
              <button className="truncate text-left text-sm font-semibold text-slate-800 dark:text-slate-100" onClick={() => setOpen(!open)}>{mail.name}</button>
              {open &&
                <>
                  <div className="mx-1 hidden text-sm text-slate-400 dark:text-slate-600 xl:block">·</div>
                  <div className="text-xs dark:text-slate-500">{mail.email}</div>
                </>
              }
            </div>
            {/* Date */}
            <div className="mb-2 whitespace-nowrap text-xs font-medium text-slate-500 sm:mb-0">{mail.date}</div>
          </div>
          {/* To */}
          {open &&
            <div className="text-xs font-medium text-slate-500">To {mail.recipients.join(', ')}</div>
          }
          {/* Excerpt */}
          {!open &&
            <div className="text-sm">{mail.excerpt}</div>
          }
        </div>
      </header>
      {/* Body */}
      {open &&
        <div className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-100" dangerouslySetInnerHTML={{ __html: mail.message }}></div>
      }
    </div>
  )
}