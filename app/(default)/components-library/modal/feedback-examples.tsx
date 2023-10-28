'use client'

import { useState } from 'react'
import ModalBlank from '@/components/modal-blank'

export default function FeedbackExamples() {

  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false)
  const [dangerModalOpen, setDangerModalOpen] = useState<boolean>(false)
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false) 

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">Feedback</h2>
      <div className="-m-1.5 flex flex-wrap items-center">

        {/* Success Modal */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => { setSuccessModalOpen(true) }}>Success Modal</button>
          <ModalBlank isOpen={successModalOpen} setIsOpen={setSuccessModalOpen}>
            <div className="flex space-x-4 p-5">
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-400/30">
                <svg className="h-4 w-4 shrink-0 fill-current text-emerald-500" viewBox="0 0 16 16">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                </svg>
              </div>
              {/* Content */}
              <div>
                {/* Modal header */}
                <div className="mb-2">
                  <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Upgrade your Subscription?</div>
                </div>
                {/* Modal content */}
                <div className="mb-10 text-sm">
                  <div className="space-y-2">
                    <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                  </div>
                </div>
                {/* Modal footer */}
                <div className="flex flex-wrap justify-end space-x-2">
                  <button className="btn-sm border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600" onClick={() => { setSuccessModalOpen(false) }}>Cancel</button>
                  <button className="btn-sm bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => { setSuccessModalOpen(false) }}>Yes, Upgrade it</button>
                </div>
              </div>
            </div>
          </ModalBlank>
          {/* End */}
        </div>

        {/* Danger Modal */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => { setDangerModalOpen(true) }}>Danger Modal</button>
          <ModalBlank isOpen={dangerModalOpen} setIsOpen={setDangerModalOpen}>
            <div className="flex space-x-4 p-5">
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-500/30">
                <svg className="h-4 w-4 shrink-0 fill-current text-rose-500" viewBox="0 0 16 16">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                </svg>
              </div>
              {/* Content */}
              <div>
                {/* Modal header */}
                <div className="mb-2">
                  <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Delete 1 customer?</div>
                </div>
                {/* Modal content */}
                <div className="mb-10 text-sm">
                  <div className="space-y-2">
                    <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                  </div>
                </div>
                {/* Modal footer */}
                <div className="flex flex-wrap justify-end space-x-2">
                  <button className="btn-sm border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600" onClick={() => { setDangerModalOpen(false) }}>Cancel</button>
                  <button className="btn-sm bg-rose-500 text-white hover:bg-rose-600" onClick={() => { setDangerModalOpen(false) }}>Yes, Delete it</button>
                </div>
              </div>
            </div>
          </ModalBlank>
          {/* End */}
        </div>
        
        {/* Info Modal */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => { setInfoModalOpen(true) }}>Info Modal</button>
          <ModalBlank isOpen={infoModalOpen} setIsOpen={setInfoModalOpen}>
            <div className="flex space-x-4 p-5">
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/30">
                <svg className="h-4 w-4 shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                </svg>
              </div>
              {/* Content */}
              <div>
                {/* Modal header */}
                <div className="mb-2">
                  <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Create new Event?</div>
                </div>
                {/* Modal content */}
                <div className="mb-10 text-sm">
                  <div className="space-y-2">
                    <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                  </div>
                </div>
                {/* Modal footer */}
                <div className="flex flex-wrap justify-end space-x-2">
                  <button className="btn-sm border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600" onClick={() => { setInfoModalOpen(false) }}>Cancel</button>
                  <button className="btn-sm bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => { setInfoModalOpen(false) }}>Yes, Create it</button>
                </div>
              </div>
            </div>
          </ModalBlank>
          {/* End */}
        </div>           

      </div>
    </div>
  )
}
