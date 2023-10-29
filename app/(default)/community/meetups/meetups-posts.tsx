import UserImage01 from "@/app/images/avatar-01.jpg"
import UserImage02 from "@/app/images/avatar-02.jpg"
import UserImage03 from "@/app/images/avatar-03.jpg"
import UserImage04 from "@/app/images/avatar-04.jpg"
import UserImage05 from "@/app/images/avatar-05.jpg"
import UserImage06 from "@/app/images/avatar-06.jpg"
import MeetupsThumb01 from "@/app/images/meetups-thumb-01.jpg"
import MeetupsThumb02 from "@/app/images/meetups-thumb-02.jpg"
import MeetupsThumb03 from "@/app/images/meetups-thumb-03.jpg"
import MeetupsThumb04 from "@/app/images/meetups-thumb-04.jpg"
import MeetupsThumb05 from "@/app/images/meetups-thumb-05.jpg"
import MeetupsThumb06 from "@/app/images/meetups-thumb-06.jpg"
import MeetupsThumb07 from "@/app/images/meetups-thumb-07.jpg"
import MeetupsThumb08 from "@/app/images/meetups-thumb-08.jpg"
import Image from "next/image"
import Link from "next/link"

export default function MeetupsPosts() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {/* Item 1 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb01}
            width={220}
            height={236}
            alt="Meetup 01"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Mon 27 Dec, 2021
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Silicon Valley Bootstrapper Breakfast Online for 2021
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +22
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 2 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb02}
            width={220}
            height={236}
            alt="Meetup 02"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Mon 27 Dec, 2021
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                New York &amp; New Jersey Virtual Retreat 2021
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage03}
                  width={28}
                  height={28}
                  alt="User 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +132
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 3 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb03}
            width={220}
            height={236}
            alt="Meetup 03"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Wed 29 Dec, 2021
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                The World of AI and Machine Learning — Open Chat
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage06}
                  width={28}
                  height={28}
                  alt="User 06"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage03}
                  width={28}
                  height={28}
                  alt="User 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +12
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 4 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb04}
            width={220}
            height={236}
            alt="Meetup 04"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Wed 29 Dec, 2021
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                NYC Code &amp; Coffee 2.0 @ Freehold Brooklyn
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +17
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 5 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb05}
            width={220}
            height={236}
            alt="Meetup 05"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Mon 3 Jan, 2022
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Acme Inc. London Meetup: Women in Tech Night
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +117
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 6 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb06}
            width={220}
            height={236}
            alt="Meetup 06"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Thu 6 Jan, 2022
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Founder Worldwide - First Meetup of 2022!
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage03}
                  width={28}
                  height={28}
                  alt="User 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +64
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 7 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb07}
            width={220}
            height={236}
            alt="Meetup 07"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Thu 6 Jan, 2022
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                NYC Blockchain Network - Monthly 3rd Thursday Meetup
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +112
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 8 */}
      <article className="flex overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        {/* Image */}
        <Link
          className="relative block w-24 shrink-0 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem]"
          href="/community/meetups/post"
        >
          <Image
            className="absolute h-full w-full object-cover object-center"
            src={MeetupsThumb08}
            width={220}
            height={236}
            alt="Meetup 08"
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
        </Link>
        {/* Content */}
        <div className="flex grow flex-col p-5">
          <div className="grow">
            <div className="mb-2 text-sm font-semibold uppercase text-indigo-500">
              Fri 7 Jan, 2022
            </div>
            <Link className="mb-2 inline-flex" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Build a Personal Brand and Boost Your Career in AI!
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="mt-3 flex justify-between">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-center text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              <svg
                className="mr-2 h-3 w-4 fill-slate-400 dark:fill-slate-500"
                viewBox="0 0 16 12"
              >
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>Online Event</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="-ml-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-white dark:border-slate-800"
                  src={UserImage06}
                  width={28}
                  height={28}
                  alt="User 06"
                />
              </div>
              <div className="text-xs font-medium italic text-slate-400 dark:text-slate-500">
                +32
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
