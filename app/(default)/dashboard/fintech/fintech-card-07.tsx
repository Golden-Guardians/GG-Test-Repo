'use client'

import LineChart06 from '@/components/charts/line-chart-06'

// Import utilities
import { hexToRGB, tailwindConfig } from '@/components/utils/utils'

export default function FintechCard06() {

  const chartData = {
    labels: [
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Golden Guardians Portfolio',
        data: [
          1500, 2000, 1800, 1900, 1900, 2400, 2900, 2600, 3900, 2700,
          3500, 3200, 2900, 3500, 3600, 3400, 3900, 3600, 4100, 4100,
        ],
        borderColor: tailwindConfig.theme.colors.indigo[500],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.blue[500])}, 0.08)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Gray line
      {
        label: 'Expected Return',
        data: [
          2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900,
          3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900,
        ],
        borderColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,        
        clip: 20,
      },
    ],
  }

  return(
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-12 xl:col-span-4">
      <header className="flex items-center border-b border-slate-100 px-5 py-4 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Portfolio Returns</h2>
      </header>
      <div className="px-5 py-3">
        <div className="mb-2 text-sm italic">Hey Mark, you're very close to your goal:</div>
        <div className="flex items-center">
          <div className="mr-2 text-3xl font-bold text-slate-800 dark:text-slate-100">$5,247.09</div>
          <div className="text-sm"><span className="font-medium text-amber-500">97.4%</span></div>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">Out of $6,000</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart06 data={chartData} width={389} height={262} />
      </div>
    </div>
  )
}
