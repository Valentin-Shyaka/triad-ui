import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen align-middle flex-col items-center justify-center p-24 bg-[#333333]">
      <div className=''>
        <h3 className='text-center font-extrabold align-middle text-8xl'>Triad</h3>
        <p>Triad provides the best engaging games on the internet to help you relax and smile a little.</p>
      </div>

      <button className='border-2 borcer-white p-4 mt-8'>Play Now !</button>
      
    </main>
  )
}
