import Link from 'next/link'
import Image from 'next/image'
import UserAvatar from '@/public/images/user-40-02.jpg'
import UserImage01 from '@/public/images/user-28-01.jpg'
import UserImage02 from '@/public/images/user-28-02.jpg'
import UserImage05 from '@/public/images/user-28-05.jpg'
import UserImage09 from '@/public/images/user-28-09.jpg'
import UserImage10 from '@/public/images/user-28-10.jpg'

export default function ForumEntry() {
  return (
    <article className="rounded border border-slate-200 bg-white p-5 shadow-md dark:border-slate-700 dark:bg-slate-800">
      {/* Breadcrumbs */}
      <div className="mb-2">
        <ul className="inline-flex flex-wrap text-sm font-medium">
          <li className="flex items-center">
            <Link className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="/community/forum">
              Home
            </Link>
            <svg className="mx-2 h-4 w-4 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </li>
          <li className="flex items-center">
            <a className="text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-500" href="#0">
              Discussion
            </a>
          </li>
        </ul>
      </div>
      {/* Header */}
      <header className="pb-4">
        {/* Title */}
        <div className="mb-3 flex items-start space-x-3">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Besides Product Hunt, where else should I promote my new project? 🤔</h2>
          {/* Upvote button */}
          <div className="shrink-0">
            <button className="flex h-12 w-12 flex-col items-center justify-center rounded-sm border border-slate-200 text-center text-xs font-semibold hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
              <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 6 6-6 6 6z" />
              </svg>
              <div>44</div>
            </button>
          </div>
        </div>
        {/* Meta */}
        <div className="flex flex-wrap text-sm">
          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
            <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
              katemerlu
            </a>
          </div>
          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
            <span className="text-slate-500">2h</span>
          </div>
          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
            <span className="text-slate-500">17 Comments</span>
          </div>
        </div>
      </header>
      {/* Content */}
      <div className="mb-6 space-y-4">
        <p>Looking for new ideas to get users, receive feedback, and increase exposure! Besides PH, where else do you showcase your product?</p>
        <p>Please advise 🙌</p>
      </div>
      {/* Comment form */}
      <div>
        <div className="mb-3 flex items-start space-x-3">
          <Image className="shrink-0 rounded-full" src={UserAvatar} width={40} height={40} alt="User 02" />
          <div className="grow">
            <label htmlFor="comment" className="sr-only">
              Write a comment…
            </label>
            <textarea
              id="comment"
              className="form-textarea w-full focus:border-slate-300"
              rows={4}
              placeholder="Write a comment…"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn-sm whitespace-nowrap bg-indigo-500 text-white hover:bg-indigo-600">
            Reply -&gt;
          </button>
        </div>
      </div>
      {/* Comments */}
      <div className="mt-4">
        <h3 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Comments</h3>
        <ul className="space-y-5">
          {/* Comment */}
          <li className="relative space-y-5 pl-9">
            {/* Comment wrapper */}
            <div className="flex items-start">
              {/* Comment upvote */}
              <div className="absolute left-0 top-0">
                <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500">
                  <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 6 6-6 6 6z" />
                  </svg>
                  <div>44</div>
                </button>
              </div>
              {/* Comment content */}
              <div>
                {/* Comment text */}
                <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                  <p>
                    We've also had the same question to be honest. And for Appy.com launch we decided to go with Twitter as a primary medium and then
                    Product Hunt as the other one. And I have to say that it led to some great results as Twitter allows you to be super active and
                    engage in many conversations.
                  </p>
                  <p>Also, users are there and everything is super active. So that will be my advice - invest time in Twitter</p>
                </div>
                {/* Comment footer */}
                <div className="flex flex-wrap text-xs">
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="mr-2 block" href="#0">
                      <Image className="rounded-full" src={UserImage02} width={24} height={24} alt="User 02" />
                    </a>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      ekuplu89
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Reply
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Nested comments */}
            <ul className="space-y-5">
              {/* Comment */}
              <li className="relative space-y-5 pl-9">
                {/* Comment wrapper */}
                <div className="flex items-start">
                  {/* Comment upvote */}
                  <div className="absolute left-0 top-0">
                    <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500">
                      <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 6 6-6 6 6z" />
                      </svg>
                      <div>2</div>
                    </button>
                  </div>
                  {/* Comment content */}
                  <div>
                    {/* Comment text */}
                    <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                      <p>
                        That's great advice,{' '}
                        <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                          @ekuplu89
                        </a>{' '}
                        👏
                      </p>
                    </div>
                    {/* Comment footer */}
                    <div className="flex flex-wrap text-xs">
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                        <a className="mr-2 block" href="#0">
                          <Image className="rounded-full" src={UserImage05} width={24} height={24} alt="User 05" />
                        </a>
                        <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                          ellielong
                        </a>
                      </div>
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                        <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                          Reply
                        </a>
                      </div>
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                        <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          {/* Comment */}
          <li className="relative space-y-5 pl-9">
            {/* Comment wrapper */}
            <div className="flex items-start">
              {/* Comment upvote */}
              <div className="absolute left-0 top-0">
                <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <svg className="my-1.5 inline-flex fill-indigo-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 6 6-6 6 6z" />
                  </svg>
                  <div>27</div>
                </button>
              </div>
              {/* Comment content */}
              <div>
                {/* Comment text */}
                <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                  <p>
                    If you are a SaaS product and are looking for early adopters, AppSumo seems to be a great place to list on. Most of the users
                    there seem to be early-adopters. Life-time deals seem to be the norm there.
                  </p>
                </div>
                {/* Comment footer */}
                <div className="flex flex-wrap text-xs">
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="mr-2 block" href="#0">
                      <Image className="rounded-full" src={UserImage01} width={24} height={24} alt="User 01" />
                    </a>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      markcuttik
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Reply
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* Comment */}
          <li className="relative space-y-5 pl-9">
            {/* Comment wrapper */}
            <div className="flex items-start">
              {/* Comment upvote */}
              <div className="absolute left-0 top-0">
                <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500">
                  <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 6 6-6 6 6z" />
                  </svg>
                  <div>24</div>
                </button>
              </div>
              {/* Comment content */}
              <div>
                {/* Comment text */}
                <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                  <p>
                    Thank you very much for all the people who are posting other alternatives! I will launch my free product design course in
                    February and I will make a notion template with all this information! :)
                  </p>
                </div>
                {/* Comment footer */}
                <div className="flex flex-wrap text-xs">
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="mr-2 block" href="#0">
                      <Image className="rounded-full" src={UserImage09} width={24} height={24} alt="User 09" />
                    </a>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      davidp1
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Reply
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Nested comments */}
            <ul className="space-y-5">
              {/* Comment */}
              <li className="relative space-y-5 pl-9">
                {/* Comment wrapper */}
                <div className="flex items-start">
                  {/* Comment upvote */}
                  <div className="absolute left-0 top-0">
                    <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500">
                      <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 6 6-6 6 6z" />
                      </svg>
                      <div>2</div>
                    </button>
                  </div>
                  {/* Comment content */}
                  <div>
                    {/* Comment text */}
                    <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                      <p>That sounds like an excellent idea. I'd love to take a look when you're ready!</p>
                    </div>
                    {/* Comment footer */}
                    <div className="flex flex-wrap text-xs">
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                        <a className="mr-2 block" href="#0">
                          <Image className="rounded-full" src={UserImage05} width={24} height={24} alt="User 05" />
                        </a>
                        <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                          ellielong
                        </a>
                      </div>
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                        <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                          Reply
                        </a>
                      </div>
                      <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                        <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Nested comments */}
                <ul className="space-y-5">
                  {/* Comment */}
                  <li className="relative space-y-5 pl-9">
                    {/* Comment wrapper */}
                    <div className="flex items-start">
                      {/* Comment upvote */}
                      <div className="absolute left-0 top-0">
                        <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500">
                          <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                            <path d="m0 6 6-6 6 6z" />
                          </svg>
                          <div>1</div>
                        </button>
                      </div>
                      {/* Comment content */}
                      <div>
                        {/* Comment text */}
                        <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                          <p>Expect it! 👊</p>
                        </div>
                        {/* Comment footer */}
                        <div className="flex flex-wrap text-xs">
                          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                            <a className="mr-2 block" href="#0">
                              <Image className="rounded-full" src={UserImage09} width={24} height={24} alt="User 09" />
                            </a>
                            <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                              davidp1
                            </a>
                          </div>
                          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                            <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                              Reply
                            </a>
                          </div>
                          <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                            <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                              Share
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {/* Comment */}
          <li className="relative space-y-5 pl-9">
            {/* Comment wrapper */}
            <div className="flex items-start">
              {/* Comment upvote */}
              <div className="absolute left-0 top-0">
                <button className="flex w-6 flex-col items-center justify-center rounded-sm text-left text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-500">
                  <svg className="my-1.5 inline-flex fill-slate-400 dark:fill-slate-500" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 6 6-6 6 6z" />
                  </svg>
                  <div>19</div>
                </button>
              </div>
              {/* Comment content */}
              <div>
                {/* Comment text */}
                <div className="mb-2 grow space-y-2 text-sm text-slate-800 dark:text-slate-100">
                  <p>Social Media (channels based on your target audience), and Slack channels</p>
                </div>
                {/* Comment footer */}
                <div className="flex flex-wrap text-xs">
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="mr-2 block" href="#0">
                      <Image className="rounded-full" src={UserImage10} width={24} height={24} alt="User 10" />
                    </a>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      patrick2
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Reply
                    </a>
                  </div>
                  <div className="flex items-center after:block after:px-2 after:text-sm after:text-slate-400 after:content-['·'] last:after:content-[''] dark:after:text-slate-600">
                    <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* View more link */}
        <div className="mt-5 text-center">
          <button className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">View More Comments</button>
        </div>
      </div>
    </article>
  )
}
