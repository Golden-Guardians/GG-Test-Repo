export default function MessagesFooter() {
  return (
    <div className="sticky bottom-0">
      <div className="flex h-16 items-center justify-between border-t border-slate-200 bg-white px-4 dark:border-slate-700 dark:bg-slate-900 sm:px-6 md:px-5">
        {/* Plus button */}
        <button className="mr-3 shrink-0 text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
          <span className="sr-only">Add</span>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
          </svg>
        </button>
        {/* Message input */}
        <form className="flex grow">
          <div className="mr-3 grow">
            <label htmlFor="message-input" className="sr-only">Type a message</label>
            <input id="message-input" className="form-input w-full border-transparent bg-slate-100 placeholder:text-slate-500 focus:bg-white dark:border-transparent dark:bg-slate-800 dark:focus:bg-slate-800" type="text" placeholder="Aa" />
          </div>
          <button type="submit" className="btn whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600">Send -&gt;</button>
        </form>
      </div>
    </div>
  )
}