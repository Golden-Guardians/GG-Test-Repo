import AuthDecoration from '@/public/images/auth-decoration.png'
import AuthBg from '@/public/images/auth-image.png'
import Image from 'next/image'

export default function AuthImage() {
  return (
    <div className="absolute inset-y-0 right-0 hidden md:block md:w-1/2" aria-hidden="true">
      <Image className="h-full w-full object-cover object-center" src={AuthBg} priority width={760} height={1024} alt="Authentication" />
      <Image className="absolute left-0 top-1/4 ml-8 hidden -translate-x-1/2 lg:block" src={AuthDecoration} priority width={218} height={224} alt="Authentication decoration" />
    </div>
  )
}
