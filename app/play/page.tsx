import React from 'react'

const Play = () => {
  return (
    <main className="p-24 h-screen align-middle   bg-[#333333]">
    <div className=''>
        <h3 className='underline font-bold text-2xl'>Steps</h3>
        <div className='m-4'>
            <ol className='ml-6 list-decimal'  >
                <li>Download</li>
                <li>play</li>
                <li>Rank</li>
            </ol>
        </div>
        <h3 className='underline font-bold text-2xl mt-8 mb-8'>Our popular Games</h3>
        <div className='flex justify-between gap-6 '>
         
          <div className='w-80 h-60 border border-white text-center align-middle justify-center rounded-md'>
            <img className='w-full rounded-md h-44' src='./mario.png' alt="game image"/>
            <p className='font-bold mt-4'>Snake</p>
          </div>
          <div className='w-80 h-60 border border-white text-center align-middle justify-center rounded-md'>
            <img className='w-full rounded-md h-44' src='./mario.png' alt="game image"/>
            <p className='font-bold mt-4'>Snake</p>
          </div>
          <div className='w-80 h-60 border border-white text-center align-middle justify-center rounded-md'>
            <img className='w-full rounded-md h-44' src='./mario.png' alt="game image"/>
            <p className='font-bold mt-4'>Snake</p>
          </div>

        </div>

        <div className='mt-8 flex justify-start align-middle items-center gap-8'>
          <h3 className='text-3xl font-bold '>Choose the bext</h3>
          <button className='border-2 borcer-white py-4 px-8'>1</button>
          <button className='border-2 borcer-white py-4 px-8'>2</button>
          <button className='border-2 borcer-white py-4 px-8'>3</button>
        </div>
    </div>
    
  </main>
  )
}

export default Play