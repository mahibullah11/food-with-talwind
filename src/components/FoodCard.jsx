import React from 'react'
//food

function FoodCard({name, images}) {
  return (
    <div className='relative rounded-md overflow-hidden'>
      <img className='h-[400px] rounded-md' src={images} alt="" />
      <p className='absolute bottom-[10%]  right-[50%] translate-x-[50%] translate-y-[50%] text-white font-bold '>{name}</p>
    </div>
  )
}

export default FoodCard