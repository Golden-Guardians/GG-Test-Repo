import TaskImage from "@/app/images/task-image-02.jpg"
import UserImage01 from "@/app/images/user-28-12.jpg"
import Image from "next/image"

export default function Task08() {
  return (
    <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      {/* Body */}
      <div className="mb-3">
        {/* Title */}
        <div className="mb-2 flex items-center">
          <div className="-ml-px mr-2 flex shrink-0 -space-x-3">
            <a className="block" href="#0">
              <Image
                className="box-content rounded-full border-2 border-white dark:border-slate-800"
                src={UserImage01}
                width={28}
                height={28}
                alt="User 12"
              />
            </a>
          </div>
          <div className="grow">
            <a
              className="inline-flex text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
              href="#0"
            >
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                Adrian Przetocki
              </h2>
            </a>
            <div className="text-xs font-medium text-slate-500">
              11:51 AM Jan 12
            </div>
          </div>
        </div>
        {/* Content */}
        <div>
          <div className="text-sm">
            Publishing industries for previewing layouts and visual{" "}
            <a
              className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              href="#0"
            >
              #family
            </a>{" "}
            🔥
          </div>
          <Image
            className="mt-3 w-full"
            src={TaskImage}
            width={259}
            height={142}
            alt="Task 02"
          />
        </div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div></div>
        {/* Right side */}
        <div className="flex items-center">
          {/* Like button */}
          <button className="ml-3 flex items-center text-slate-400 hover:text-indigo-500  dark:text-slate-500 dark:hover:text-indigo-500">
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
            <div className="text-sm text-slate-500 dark:text-slate-400">4</div>
          </button>
          {/* Replies button */}
          <button className="ml-3 flex items-center text-slate-400 hover:text-indigo-500  dark:text-slate-500 dark:hover:text-indigo-500">
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <div className="text-sm text-slate-500 dark:text-slate-400">16</div>
          </button>
        </div>
      </div>
    </div>
  )
}
