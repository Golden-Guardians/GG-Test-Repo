import AppImage17 from '@/public/images/applications-image-17.png'
import AppImage18 from '@/public/images/applications-image-18.png'
import AppImage19 from '@/public/images/applications-image-19.png'
import AppImage20 from '@/public/images/applications-image-20.png'
import Image from 'next/image'

export default function ShopCards06() {
  return (
    <>
      {/* Card 1 */}
      <div className="relative col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-transparent dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        {/* Image */}
        <Image className="absolute h-full w-full object-cover" src={AppImage17} width={286} height={160} alt="Application 17" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" aria-hidden="true"></div>
        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-5">
          <h3 className="mb-0.5 mt-16 text-lg font-semibold text-white">Merchandise</h3>
          <a className="text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#0">Explore -&gt;</a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-transparent dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        {/* Image */}
        <Image className="absolute h-full w-full object-cover" src={AppImage18} width={286} height={160} alt="Application 18" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" aria-hidden="true"></div>
        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-5">
          <h3 className="mb-0.5 mt-16 text-lg font-semibold text-white">Audiobooks</h3>
          <a className="text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#0">Explore -&gt;</a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-transparent dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        {/* Image */}
        <Image className="absolute h-full w-full object-cover" src={AppImage19} width={286} height={160} alt="Application 19" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" aria-hidden="true"></div>
        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-5">
          <h3 className="mb-0.5 mt-16 text-lg font-semibold text-white">Design & Tech</h3>
          <a className="text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#0">Explore -&gt;</a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative col-span-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg dark:border-transparent dark:bg-slate-800 sm:col-span-6 xl:col-span-3">
        {/* Image */}
        <Image className="absolute h-full w-full object-cover" src={AppImage20} width={286} height={160} alt="Application 20" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" aria-hidden="true"></div>
        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-5">
          <h3 className="mb-0.5 mt-16 text-lg font-semibold text-white">Apps & Software</h3>
          <a className="text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#0">Explore -&gt;</a>
        </div>
      </div>
    </>
  )
}