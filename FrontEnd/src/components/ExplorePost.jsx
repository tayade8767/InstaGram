/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaHeart, FaComment } from 'react-icons/fa' 


function ExplorePost({post}) {

    const [Ishover, setIshover] = useState(true);
    const [countlike, setcountlike] = useState(44.4)
    const [countcomment, setcountcomment] = useState(23)

  return (
    <div onMouseEnter={() => setIshover(true)} onMouseLeave={() => setIshover(false)} className='h-auto w-auto flex items-center justify-center bg-white hover:opacity-75 relative'>
      <div className='max-w-full max-h-full object-contain'>
        <img 
            src={post.image} 
            alt='Image' 
            style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            }}
        />
        {Ishover && (
            <div className='absolute flex items-center justify-center mb-32 inset-0'>
              <div className='flex space-x-4 text-white mt-[38%]'>
                <div className='flex gap-2 mr-2 items-center'>
                    <FaHeart size={20} />
                    <span>{countlike} m  </span>
                </div>
                <div className='flex mr-2 gap-2 items-center'>
                    <FaComment size={20} />
                    <span>{countcomment} k </span>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default ExplorePost