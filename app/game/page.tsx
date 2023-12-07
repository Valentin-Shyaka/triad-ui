import React from 'react'

const Game = () => {
  return (
    <main className="p-24 h-screen align-middle   bg-[#333333]">
     <h3 className='text-4xl font-bold'>Snake</h3>
     <div className='flex justify-center gap-8 mt-4 items-center'>
        <img src="./mario.png" alt="first ranked game" className='rounded-md' />
        <div>
            <h3 className='text-3xl'>#1 <span className='font-bold'> Rank</span></h3>
            <p className='mt-20'>Slithering through lush landscapes, the Snake PC game offers an immersive experience where players navigate their serpentine avatar to consume pellets, grow in length, and conquer challenging mazes. With sleek graphics and intuitive controls, this game delivers thrilling adventures as players strive to avoid self-collision and outmaneuver obstacles to achieve high score</p>
     </div>

     </div>
     <button className='border-2 borcer-white p-4 mt-8'>Download Now</button>
    
  </main>
  )
}

export default Game