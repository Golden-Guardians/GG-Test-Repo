import TaskImage from "@/app/images/task-image-01.jpg"
import UserImage02 from "@/app/images/user-28-02.jpg"
import UserImage01 from "@/app/images/user-28-05.jpg"
import Image from "next/image"

export default function Task05() {
  return (
    <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      {/* Body */}
      <div className="mb-3">
        {/* Title */}
        <h2 className="mb-1 font-semibold text-slate-800 dark:text-slate-100">
          Product Update - Q4 2021
        </h2>
        {/* Content */}
        <div>
          <div className="text-sm">
            Dedicated form for a category of users that will perform actions.
          </div>
          <Image
            className="mt-3 w-full"
            src={TaskImage}
            width={259}
            height={142}
            alt="Task 01"
          />
        </div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="-ml-px flex shrink-0 -space-x-3">
          <a className="block" href="#0">
            <Image
              className="box-content rounded-full border-2 border-white dark:border-slate-800"
              src={UserImage01}
              width={28}
              height={28}
              alt="User 05"
            />
          </a>
          <a className="block" href="#0">
            <Image
              className="box-content rounded-full border-2 border-white dark:border-slate-800"
              src={UserImage02}
              width={28}
              height={28}
              alt="User 02"
            />
          </a>
        </div>
        {/* Right side */}
        <div className="flex items-center">
          {/* Date */}
          <div className="ml-3 flex items-center text-amber-500">
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
            </svg>
            <div className="text-sm text-amber-600">Mar 27</div>
          </div>
          {/* Attach button */}
          <button className="ml-3 text-slate-400 hover:text-indigo-500  dark:text-slate-500 dark:hover:text-indigo-500">
            <svg
              className="mr-1.5 h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
