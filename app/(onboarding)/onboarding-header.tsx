import Link from 'next/link'
import Logo from '@/components/ui/logo'

export default function OnboardingHeader() {
  return (
    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <Logo />
      <div className="text-sm">
        Have an account? <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/signin">Sign In</Link>
      </div>
    </div>
  )
}
