'use client'

import PieChart from '@/components/charts/pie-chart'

// Import utilities
import { tailwindConfig } from '@/components/utils/utils'

export default function FintechCard09() {

  const chartData = {
    labels: ['Cash', 'Commodities', 'Bonds', 'Stock'],
    datasets: [
      {
        label: 'Sessions By Device',
        data: [12, 13, 10, 65],
        backgroundColor: [
          tailwindConfig.theme.colors.emerald[400],
          tailwindConfig.theme.colors.amber[400],
          tailwindConfig.theme.colors.sky[400],
          tailwindConfig.theme.colors.indigo[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig.theme.colors.emerald[500],
          tailwindConfig.theme.colors.amber[500],
          tailwindConfig.theme.colors.sky[500],
          tailwindConfig.theme.colors.indigo[600],
        ],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <header className="flex items-center border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Portfolio Value</h2>
      </header>
      <div className="px-5 py-3">
        <div className="mb-2 text-sm italic">Hey Mark, here is the value of your portfolio:</div>
        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">$224,807.27</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <PieChart data={chartData} width={389} height={220} />
    </div>
  )
}
