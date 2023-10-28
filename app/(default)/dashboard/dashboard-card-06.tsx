'use client'

import DoughnutChart from '@/components/charts/doughnut-chart'

// Import utilities
import { tailwindConfig } from '@/components/utils/utils'

export default function DashboardCard06() {

  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          tailwindConfig.theme.colors.indigo[500],
          tailwindConfig.theme.colors.blue[400],
          tailwindConfig.theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig.theme.colors.indigo[600],
          tailwindConfig.theme.colors.blue[500],
          tailwindConfig.theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  }

  return(
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <header className="border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Countries</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  )
}
