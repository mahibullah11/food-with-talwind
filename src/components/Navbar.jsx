import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between px-5 py-2 h-auto sm:h-20 bg-gray-500 sm:flex-row flex-col'>
  <div className='flex justify-center items-center gap-x-2 mb-2 sm:mb-0'>
    {/* <img className='w-[60px] rounded' src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGluY29uc3xlbnwwfHwwfHx8MA%3D%3D" alt="Logo" /> */}
    <h2 className='font-bold text-lg text-white'>WOW FOOD</h2>
  </div>
  <ul className='flex list-none gap-x-5 justify-center items-center'>
    <li className='text-white hover:text-pink-400 hover:cursor-pointer font-semibold'>Home</li>
    <li className='text-white hover:text-pink-400 hover:cursor-pointer font-semibold'>About</li>
    <li className='text-white hover:text-pink-400 hover:cursor-pointer font-semibold'>Foods</li>
    <li className='text-white hover:text-pink-400 hover:cursor-pointer font-semibold'>Contact</li>
  </ul>
</nav>

  )
}

export default Navbar