export const metadata = {
  title: 'Messages - Golden Guardians',
  description: 'Page description',
}

import { FlyoutProvider } from '@/app/flyout-context'
import MessagesBody from './messages-body'
import MessagesSidebar from './messages-sidebar'

function MessagesContent() {
  return (
    <div className="relative flex h-full">
      <MessagesSidebar />
      <MessagesBody />
    </div>
  )
}

export default function Messages() {
  return (
    <FlyoutProvider initialState={true}>
      <MessagesContent />
    </FlyoutProvider>
  )
}