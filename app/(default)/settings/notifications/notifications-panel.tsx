'use client'

import { useState } from 'react'

export default function NotificationsPanel() {

  const [comments, setComments] = useState<boolean>(true)
  const [messages, setMessages] = useState<boolean>(true)
  const [mentions, setMentions] = useState<boolean>(false)

  return (
    <div className="grow">

      {/* Panel body */}
      <div className="space-y-6 p-6">
        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">My Notifications</h2>

        {/* General */}
        <section>
          <h3 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">General</h3>
          <ul>
            <li className="flex items-center justify-between border-b border-slate-200 py-3 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Comments and replies</div>
                <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
              </div>
              {/* Right */}
              <div className="ml-4 flex items-center">
                <div className="mr-2 text-sm italic text-slate-400 dark:text-slate-500">{comments ? 'On' : 'Off'}</div>
                <div className="form-switch">
                  <input type="checkbox" id="comments" className="sr-only" checked={comments} onChange={() => setComments(!comments)} />
                  <label className="bg-slate-400 dark:bg-slate-700" htmlFor="comments">
                    <span className="bg-white shadow-sm" aria-hidden="true"></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-slate-200 py-3 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Messages</div>
                <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
              </div>
              {/* Right */}
              <div className="ml-4 flex items-center">
                <div className="mr-2 text-sm italic text-slate-400 dark:text-slate-500">{messages ? 'On' : 'Off'}</div>
                <div className="form-switch">
                  <input type="checkbox" id="messages" className="sr-only" checked={messages} onChange={() => setMessages(!messages)} />
                  <label className="bg-slate-400 dark:bg-slate-700" htmlFor="messages">
                    <span className="bg-white shadow-sm" aria-hidden="true"></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-slate-200 py-3 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Mentions</div>
                <div className="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div>
              </div>
              {/* Right */}
              <div className="ml-4 flex items-center">
                <div className="mr-2 text-sm italic text-slate-400 dark:text-slate-500">{mentions ? 'On' : 'Off'}</div>
                <div className="form-switch">
                  <input type="checkbox" id="mentions" className="sr-only" checked={mentions} onChange={() => setMentions(!mentions)} />
                  <label className="bg-slate-400 dark:bg-slate-700" htmlFor="mentions">
                    <span className="bg-white shadow-sm" aria-hidden="true"></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Shares */}
        <section>
          <h3 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Shares</h3>
          <ul>
            <li className="flex items-center justify-between border-b border-slate-200 py-3 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Shares of my content</div>
                <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
              </div>
              {/* Right */}
              <div className="ml-4 flex items-center">
                <button className="btn-sm border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">Manage</button>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-slate-200 py-3 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Team invites</div>
                <div className="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div>
              </div>
              {/* Right */}
              <div className="ml-4 flex items-center">
                <button className="btn-sm border-slate-200 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">Manage</button>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-slate-200 py-3 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Smart connection</div>
                <div className="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div>
              </div>
              {/* Right */}
              <div className="ml-4 flex items-center">
                <div className="mr-2 hidden text-sm italic text-slate-400 dark:text-slate-500 md:block">Active</div>
                <button className="btn-sm border-slate-200 text-rose-500 shadow-sm hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">Disable</button>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col border-t border-slate-200 px-6 py-5 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600">Cancel</button>
            <button className="btn ml-3 bg-indigo-500 text-white hover:bg-indigo-600">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  )
}