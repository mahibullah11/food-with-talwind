import React from 'react'
//h

function Footer({name, iconUrl, profileUrl}) {
  return (
    <div className='flex'>
      <a href={profileUrl}>
      <img className='w-10 rounded-full' src={iconUrl} alt={name} />
      </a>
    </div>
  )
}

export default Footer