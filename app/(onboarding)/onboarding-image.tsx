import OnboardingDecoration from '@/public/images/auth-decoration.png'
import OnboardingBg from '@/public/images/onboarding-image.png'
import Image from 'next/image'

export default function OnboardingImage() {
  return (
    <div className="absolute inset-y-0 right-0 hidden md:block md:w-1/2" aria-hidden="true">
      <Image className="h-full w-full object-cover object-center" src={OnboardingBg} priority width={760} height={1024} alt="Onboarding" />
      <Image className="absolute left-0 top-1/4 ml-8 hidden -translate-x-1/2 lg:block" src={OnboardingDecoration} priority width={218} height="224" alt="Onboarding decoration" />
    </div>
  )
}
