/* eslint-disable no-unused-vars */
import React from 'react'

function PostImage() {
  return (
    <div className='h-auto w-auto flex items-center justify-center bg-gray-100'>
      <img 
        className='max-w-full max-h-full object-contain'
        src='https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600' 
        alt='Image' 
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

export default PostImage;