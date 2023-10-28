import { ReactElement } from 'react'

export const CampaignProperties = () => {

  const typeColor = (type: string): string => {
    switch (type) {
      case 'One-Time':
        return 'bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400'
      case 'At Risk':
        return 'bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400'
      case 'Off-Track':
        return 'bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400'
      default:
        return 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
    }
  }

  const categoryIcon = (category: string): ReactElement => {
    switch (category) {
      case '1':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500">
            <svg className="h-9 w-9 fill-current text-rose-50" viewBox="0 0 36 36">
              <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
            </svg>
          </div>
        )
      case '2':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500">
            <svg className="h-9 w-9 fill-current text-emerald-50" viewBox="0 0 36 36">
              <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
            </svg>
          </div>
        )
      case '3':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500">
            <svg className="h-9 w-9 fill-current text-sky-50" viewBox="0 0 36 36">
              <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
            </svg>
          </div>
        )
      case '4':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
            <svg className="h-9 w-9 fill-current text-indigo-50" viewBox="0 0 36 36">
              <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
          </div>
        )
      default:
        return (<div></div>)
    }
  }

  return {
    typeColor,
    categoryIcon,
  }
}
