import React from 'react'

function MenuCard({ name, image, price, descripton }) {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300 rounded-md px-4 py-4 gap-x-4 gap-y-4 w-full cursor-default lg:w-[48%]'>
      <img className='w-full h-32 sm:w-28 sm:h-28 object-cover rounded-md' src={image} alt="" />
      <div className='flex flex-col'>
        <span className='text-gray-950 text-lg font-semibold'>{name}</span>
        <span className='text-gray-600'>{price}$</span>
        <p className='text-gray-700 text-sm'>{descripton}</p>
        <button className='py-1 mt-2 w-full sm:w-28 bg-gradient-to-tl from-pink-500 to-pink-600 rounded-md text-white'>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default MenuCard;