export const metadata = {
  title: 'Modal - Golden Guardians',
  description: 'Page description',
}

import BasicExamples from './basic-examples'
import FeedbackExamples from './feedback-examples'
import ProductExamples from './product-examples'

export default function ModalLibrary() {
  return (
    <div className="relative h-full bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Modal ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="mt-8 space-y-8">

            {/* Basic */}
            <BasicExamples />

            {/* Feedback */}
            <FeedbackExamples />

            {/* Product */}
            <ProductExamples />            

          </div>

        </div>

      </div>
    </div>
  )
}
