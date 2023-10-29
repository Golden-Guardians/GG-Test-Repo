import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { CampaignProperties } from './campaigns-properties'

interface Campaign {
  id: number
  category: string
  members: {
    name: string
    image: StaticImageData
    link: string
  }[]
  title: string
  link: string
  content: string
  dates: {
    from: string
    to: string
  }
  type: string
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {

  const {
    typeColor,
    categoryIcon,
  } = CampaignProperties() 

  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <div className="flex h-full flex-col p-5">
        <header>
          <div className="flex items-center justify-between">
            {categoryIcon(campaign.category)}
            <div className="-ml-px flex shrink-0 -space-x-3">
              {
                campaign.members.map(member => {
                  return (
                    <Link key={member.name} className="block" href={member.link}>
                      <Image className="box-content rounded-full border-2 border-white dark:border-slate-800" src={member.image} width={28} height={28} alt={member.name} />
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </header>
        <div className="mt-2 grow">
          <Link className="mb-1 inline-flex text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href={campaign.link}>
            <h2 className="text-xl font-semibold leading-snug">{campaign.title}</h2>
          </Link>
          <div className="text-sm">{campaign.content}</div>
        </div>
        <footer className="mt-5">
          <div className="mb-2 text-sm font-medium text-slate-500">{campaign.dates.from} <span className="text-slate-400 dark:text-slate-600">-&gt;</span> {campaign.dates.to}</div>
          <div className="flex items-center justify-between">
            <div>
              <div className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${typeColor(campaign.type)}`}>{campaign.type}</div>
            </div>
            <div>
              <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href={campaign.link}>View -&gt;</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
