import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between px-5 py-2 h-auto sm:h-20 bg-blue-400 sm:flex-row flex-col'>
  <div className='flex justify-center items-center gap-x-2 mb-2 sm:mb-0'>
    <img className='w-[60px] rounded' src="https://img.icons8.com/?size=100&id=ZF7hWVW0tEYV&format=png&color=000000" alt="Logo" />
    <h2 className='font-bold text-lg text-white'>WOW BURGER</h2>
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