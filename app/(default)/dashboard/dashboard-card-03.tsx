"use client"

import Icon from "@/app/images/icon-02.svg"
import LineChart01 from "@/components/charts/line-chart-01"
import EditMenu from "@/components/edit-menu"
import Image from "next/image"

// Import utilities
import { hexToRGB, tailwindConfig } from "@/components/utils/utils"

export default function DashboardCard03() {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
    ],
    datasets: [
      // Indigo line
      {
        data: [
          540, 466, 540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289,
          289, 403, 554, 304, 289, 270, 134, 270, 829, 344, 388, 364,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig.theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig.theme.colors.indigo[500],
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
        data: [
          689, 562, 477, 477, 477, 477, 458, 314, 430, 378, 430, 498, 642, 350,
          145, 145, 354, 260, 188, 188, 300, 300, 282, 364, 660, 554,
        ],
        borderColor: `rgba(${hexToRGB(
          tailwindConfig.theme.colors.slate[500]
        )}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(
          tailwindConfig.theme.colors.slate[500]
        )}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(
          tailwindConfig.theme.colors.slate[500]
        )}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  }

  return (
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-6 xl:col-span-4">
      <div className="px-5 pt-5">
        <header className="mb-2 flex items-start justify-between">
          {/* Icon */}
          <Image src={Icon} width={32} height={32} alt="Icon 03" />
          {/* Menu button */}
          <EditMenu align="right" />
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
          Acme Professional
        </h2>
        <div className="mb-1 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
          Sales
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-slate-800 dark:text-slate-100">
            $9,962
          </div>
          <div className="rounded-full bg-emerald-500 px-1.5 text-sm font-semibold text-white">
            +49%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart01 data={chartData} width={389} height={128} />
      </div>
    </div>
  )
}
