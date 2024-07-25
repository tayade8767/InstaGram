/* eslint-disable no-unused-vars */
import React from 'react'
import SliderBar from './SliderBar'
import ExploreallPosts from './ExploreallPosts.jsx'

function Explore() {
  return (
    <div className='w-screen h-screen flex'>
        <div className='w-1/5'>
           <SliderBar/>
        </div>
        <div className='w-4/5 overflow-y-auto'>
           <ExploreallPosts/>
        </div>
    </div>
  )
}

export default Explore