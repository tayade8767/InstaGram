/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function PostImage({ imagevedio }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <img 
        src={imagevedio} 
        alt="Post content" 
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default PostImage;