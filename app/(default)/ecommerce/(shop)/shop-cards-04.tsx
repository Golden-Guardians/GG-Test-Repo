import AppImage13 from "@/app/images/applications-image-02.jpg"
import AppImage14 from "@/app/images/applications-image-14.jpg"
import AppImage15 from "@/app/images/applications-image-15.jpg"
import AppImage16 from "@/app/images/applications-image-16.jpg"
import Image from "next/image"

export default function ShopCards04() {
  return (
    <>
      {/* Card 1 */}
      <div className="col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col">
          {/* Image */}
          <div className="relative">
            <Image
              className="w-full"
              src={AppImage13}
              width={286}
              height={160}
              alt="Application 13"
            />
            {/* Like button */}
            <button className="absolute right-0 top-0 mr-4 mt-4">
              <div className="rounded-full bg-slate-900 bg-opacity-60 text-slate-100">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="flex grow flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-4">
                <a
                  className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-500 hover:text-emerald-600"
                  href="#0"
                >
                  Funding
                </a>
                <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">
                  SwiftNight Home Plus
                </h3>
                <div className="text-sm">
                  Lorem ipsum is placeholder text commonly used.
                </div>
              </header>
              {/* Info */}
              <div className="mb-5">
                <div className="mb-2 flex justify-between space-x-2 text-sm">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      $789,784
                    </span>{" "}
                    <span className="italic">raised</span>
                  </div>
                  <div>64%</div>
                </div>
                {/* Bar */}
                <div className="relative mb-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className="text-xs font-medium">30 Days Left</div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a
                className="btn-sm w-full bg-indigo-500 text-white hover:bg-indigo-600"
                href="#0"
              >
                Back It
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col">
          {/* Image */}
          <div className="relative">
            <Image
              className="w-full"
              src={AppImage14}
              width={286}
              height={160}
              alt="Application 14"
            />
            {/* Like button */}
            <button className="absolute right-0 top-0 mr-4 mt-4">
              <div className="rounded-full bg-slate-900 bg-opacity-60 text-slate-100">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="flex grow flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-4">
                <a
                  className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-500 hover:text-emerald-600"
                  href="#0"
                >
                  Funding
                </a>
                <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">
                  SwiftNight Home Plus
                </h3>
                <div className="text-sm">
                  Lorem ipsum is placeholder text commonly used.
                </div>
              </header>
              {/* Info */}
              <div className="mb-5">
                <div className="mb-2 flex justify-between space-x-2 text-sm">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      $789,784
                    </span>{" "}
                    <span className="italic">raised</span>
                  </div>
                  <div>64%</div>
                </div>
                {/* Bar */}
                <div className="relative mb-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className="text-xs font-medium">30 Days Left</div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a
                className="btn-sm w-full bg-indigo-500 text-white hover:bg-indigo-600"
                href="#0"
              >
                Back It
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col">
          {/* Image */}
          <div className="relative">
            <Image
              className="w-full"
              src={AppImage15}
              width={286}
              height={160}
              alt="Application 15"
            />
            {/* Like button */}
            <button className="absolute right-0 top-0 mr-4 mt-4">
              <div className="rounded-full bg-slate-900 bg-opacity-60 text-slate-100">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="flex grow flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-4">
                <a
                  className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-500 hover:text-emerald-600"
                  href="#0"
                >
                  Funding
                </a>
                <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">
                  SwiftNight Home Plus
                </h3>
                <div className="text-sm">
                  Lorem ipsum is placeholder text commonly used.
                </div>
              </header>
              {/* Info */}
              <div className="mb-5">
                <div className="mb-2 flex justify-between space-x-2 text-sm">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      $789,784
                    </span>{" "}
                    <span className="italic">raised</span>
                  </div>
                  <div>64%</div>
                </div>
                {/* Bar */}
                <div className="relative mb-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className="text-xs font-medium">30 Days Left</div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a
                className="btn-sm w-full bg-indigo-500 text-white hover:bg-indigo-600"
                href="#0"
              >
                Back It
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        <div className="flex h-full flex-col">
          {/* Image */}
          <div className="relative">
            <Image
              className="w-full"
              src={AppImage16}
              width={286}
              height={160}
              alt="Application 16"
            />
            {/* Like button */}
            <button className="absolute right-0 top-0 mr-4 mt-4">
              <div className="rounded-full bg-slate-900 bg-opacity-60 text-slate-100">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="flex grow flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-4">
                <a
                  className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-500 hover:text-emerald-600"
                  href="#0"
                >
                  Funding
                </a>
                <h3 className="mb-1 text-lg font-semibold text-slate-800 dark:text-slate-100">
                  SwiftNight Home Plus
                </h3>
                <div className="text-sm">
                  Lorem ipsum is placeholder text commonly used.
                </div>
              </header>
              {/* Info */}
              <div className="mb-5">
                <div className="mb-2 flex justify-between space-x-2 text-sm">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      $789,784
                    </span>{" "}
                    <span className="italic">raised</span>
                  </div>
                  <div>64%</div>
                </div>
                {/* Bar */}
                <div className="relative mb-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className="text-xs font-medium">30 Days Left</div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a
                className="btn-sm w-full bg-indigo-500 text-white hover:bg-indigo-600"
                href="#0"
              >
                Back It
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
