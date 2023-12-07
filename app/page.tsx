'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  const router=useRouter()
  return (
    <main className="flex h-screen align-middle flex-col items-center justify-center p-24 bg-[#333333]">
      <Link href={'/'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="38" viewBox="0 0 44 38" fill="none" className='absolute top-5 left-10'>
            <mask id="path-1-inside-1_2_90" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6506 37.5L22 0L0.349365 37.5H43.6506ZM13.3397 20L22 35L30.6603 20H13.3397Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6506 37.5L22 0L0.349365 37.5H43.6506ZM13.3397 20L22 35L30.6603 20H13.3397Z" fill="#333333"/>
            <path d="M22 0L22.866 -0.5L22 -2L21.134 -0.5L22 0ZM43.6506 37.5V38.5H45.3827L44.5167 37L43.6506 37.5ZM0.349365 37.5L-0.51666 37L-1.38269 38.5H0.349365V37.5ZM22 35L21.134 35.5L22 37L22.866 35.5L22 35ZM13.3397 20V19H11.6077L12.4737 20.5L13.3397 20ZM30.6603 20L31.5263 20.5L32.3923 19H30.6603V20ZM21.134 0.5L42.7846 38L44.5167 37L22.866 -0.5L21.134 0.5ZM1.21539 38L22.866 0.5L21.134 -0.5L-0.51666 37L1.21539 38ZM43.6506 36.5H0.349365V38.5H43.6506V36.5ZM22.866 34.5L14.2058 19.5L12.4737 20.5L21.134 35.5L22.866 34.5ZM29.7942 19.5L21.134 34.5L22.866 35.5L31.5263 20.5L29.7942 19.5ZM13.3397 21H30.6603V19H13.3397V21Z" fill="white" mask="url(#path-1-inside-1_2_90)"/>
        </svg>
    </Link>
      <div className=''>
        <h3 className='text-center font-extrabold align-middle text-8xl'>Triad</h3>
        <p>Triad provides the best engaging games on the internet to help you relax and smile a little.</p>
      </div>

      <button className='border-2 borcer-white p-4 mt-8' onClick={()=>{router.push('/play')}}>Play Now !</button>
      
    </main>
  )
}
