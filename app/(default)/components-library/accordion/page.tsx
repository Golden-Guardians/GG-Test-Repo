export const metadata = {
  title: "Accordion - Golden Guardians",
  description: "Page description",
}

import Image01 from "@/app/images/user-40-07.jpg"
import AccordionBasic from "@/components/accordion-basic"
import AccordionTableItem from "@/components/accordion-table-item"
import AccordionTableRichItem from "@/components/accordion-table-rich-item"

export default function AccordionLibrary() {
  // Some dummy data
  const items = [
    {
      id: 0,
      image: Image01,
      customer: "Mark Cameron",
      total: "$129.00",
      status: "Refunded",
      items: 1,
      location: "🇲🇽 New Mexico, MX",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]

  const items2 = [
    {
      id: 0,
      image: Image01,
      customer: "Mark Cameron",
      email: "mark.cameron@app.com",
      location: "🇬🇧 London, UK",
      date: "22/01/2021",
      amount: "+249.88",
      descriptionTitle: "Excepteur sint occaecat cupidatat.",
      descriptionBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
            Accordion ✨
          </h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          {/* Components */}
          <div className="mt-8 space-y-8">
            {/* Basic Accordion */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                Basic Accordion
              </h2>
              <AccordionBasic title="Accordion Title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionBasic>
            </div>

            {/* Table Row with Accordion */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                Table Row with Accordion
              </h2>
              {/* Start */}
              <div className="rounded-sm border border-slate-200 dark:border-slate-700">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto divide-y divide-slate-200 dark:divide-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {items.map((item) => (
                      <AccordionTableItem key={item.id} item={item} />
                    ))}
                  </table>
                </div>
              </div>
              {/* End */}
            </div>

            {/* Rich Table Row with Accordion */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                Rich Table Row with Accordion
              </h2>
              {/* Start */}
              <div className="rounded-sm border border-slate-200 dark:border-slate-700">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto divide-y divide-slate-200 dark:divide-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {items2.map((item) => (
                      <AccordionTableRichItem key={item.id} item={item} />
                    ))}
                  </table>
                </div>
              </div>
              {/* End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
