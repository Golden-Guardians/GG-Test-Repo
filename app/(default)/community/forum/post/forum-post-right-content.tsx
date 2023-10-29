import UserImage from '@/public/images/user-40-04.jpeg'
import Image from 'next/image'

export default function ForumPostRightContent() {
  return (
    <div className="hidden w-full xl:block xl:w-[18rem]">
      <div className="no-scrollbar lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:overflow-y-auto lg:overflow-x-hidden">
        <div className="md:py-8">
          {/* Button */}
          <div className="mb-6">
            <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">Create Post</button>
          </div>

          {/* Blocks */}
          <div className="space-y-4">

            {/* Block 1 */}
            <div className="rounded border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/20">
              <div className="mb-4 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">About the Author</div>
              <div className="mb-4 flex items-center">
                <div className="mr-3 h-10 w-10 shrink-0">
                  <Image className="rounded-full" src={UserImage} width={40} height={40} alt="User 04" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">Kate Merlu</div>
                  <div className="text-sm italic text-slate-500 dark:text-slate-400">Building SquareApp 🚀</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>🤟 <span className="font-medium">1798</span> Karma</li>
                <li>🔥 <span className="font-medium">39</span> Posts</li>
                <li>✍️ <span className="font-medium">299</span> Comments</li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full border-slate-200 bg-white text-indigo-500 shadow-none hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">Follow</button>
              </div>
            </div>

            {/* Block 2 */}
            <div className="rounded border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/20">
              <div className="mb-4 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">Popular Stories</div>
              <ul className="space-y-3">
                <li>
                  <div className="mb-1 text-sm">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      I built and sold 2 small SaaS products and quit my job in the last two years — AMA
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      markusj
                    </a>{' '}
                    · 2d · 312 comments
                  </div>
                </li>
                <li>
                  <div className="mb-1 text-sm">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Besides Product Hunt, where else should I promote my new project? 🤔
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      katemerlu
                    </a>{' '}
                    · 2h · 7 comments
                  </div>
                </li>
                <li>
                  <div className="mb-1 text-sm">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Which are the main channels you use to drive traffic to your website? 📈
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      sophiestar
                    </a>{' '}
                    · 3d · 66 comments
                  </div>
                </li>
                <li>
                  <div className="mb-1 text-sm">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Failed for the past 12 years as a tech entrepreneur. My key takeaways.
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      ekuplu89
                    </a>{' '}
                    · 4h · 14 comments
                  </div>
                </li>
                <li>
                  <div className="mb-1 text-sm">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      How to build a following on Twitter as a founder - A guide to growing your audience 🚀
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      molliehacks
                    </a>{' '}
                    · 3d · 32 comments
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full border-slate-200 bg-white text-indigo-500 shadow-none hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}