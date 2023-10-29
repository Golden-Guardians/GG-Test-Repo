export const metadata = {
  title: "Tell us what's your situation - Golden Guardians",
  description: 'Page description',
}

import Link from 'next/link'
import OnboardingHeader from '../onboarding-header'
import OnboardingImage from '../onboarding-image'
import OnboardingProgress from '../onboarding-progress'

export default function Onboarding01() {
  return (
    <main className="bg-white dark:bg-slate-900">

      <div className="relative flex">

        {/* Content */}
        <div className="w-full md:w-1/2">

          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">

            <div className="flex-1">

              <OnboardingHeader />
              <OnboardingProgress step={1} />

            </div>

            <div className="px-4 py-8">
              <div className="mx-auto max-w-md">

                <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">Tell us what's your situation ✨</h1>
                {/* Form */}
                <form>
                  <div className="mb-8 space-y-3">
                    <label className="relative block cursor-pointer">
                      <input type="radio" name="radio-buttons" className="peer sr-only" defaultChecked />
                      <div className="flex items-center rounded border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-600">
                        <svg className="mr-4 h-6 w-6 shrink-0 fill-current" viewBox="0 0 24 24">
                          <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                          <path className="text-indigo-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                          <path className="text-indigo-200" d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z" />
                        </svg>
                        <span>I have a company</span>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500" aria-hidden="true"></div>
                    </label>
                    <label className="relative block cursor-pointer">
                      <input type="radio" name="radio-buttons" className="peer sr-only" />
                      <div className="flex items-center rounded border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-600">
                        <svg className="mr-4 h-6 w-6 shrink-0 fill-current" viewBox="0 0 24 24">
                          <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                          <path className="text-indigo-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                        </svg>
                        <span>I’m a freelance / contractor</span>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500" aria-hidden="true"></div>
                    </label>
                    <label className="relative block cursor-pointer">
                      <input type="radio" name="radio-buttons" className="peer sr-only" />
                      <div className="flex items-center rounded border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm duration-150 ease-in-out hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-600">
                        <svg className="mr-4 h-6 w-6 shrink-0 fill-current" viewBox="0 0 24 24">
                          <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                        </svg>
                        <span>I'm just getting started</span>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500" aria-hidden="true"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link className="btn ml-auto bg-indigo-500 text-white hover:bg-indigo-600" href="/onboarding-02">Next Step -&gt;</Link>
                  </div>
                </form>

              </div>
            </div>

          </div>

        </div>

        <OnboardingImage />

      </div>

    </main>
  )
}
