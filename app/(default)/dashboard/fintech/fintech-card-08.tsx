'use client'

import LineChart07 from '@/components/charts/line-chart-07'

// Import utilities
import { tailwindConfig, hexToRGB } from '@/components/utils/utils'

export default function FintechCard08() {

  const chartData = {
    labels: ['2010', 'Age 65'],
    datasets: [
      // Dark green line
      {
        label: 'Growth 1',
        data: [0, 3500000],
        borderColor: tailwindConfig.theme.colors.emerald[500],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.emerald[500])}, 0.08)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.emerald[500],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.emerald[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,        
        clip: 20,
      },
      // Light green line
      {
        label: 'Growth 2',
        data: [0, 2000000],
        borderColor: tailwindConfig.theme.colors.emerald[200],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.emerald[200],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.emerald[200],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,        
        clip: 20,
      },
    ],
  }

  return (
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <header className="flex items-center border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Growth Portfolio</h2>
      </header>
      <div className="px-5 py-3">
        <div className="mb-2 text-sm italic">Hey Mark, by age 65 you could have:</div>
        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">$2M - $3.5M</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">Risk level 8</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart07 data={chartData} width={389} height={262} />
      </div>
    </div>
  )
}
