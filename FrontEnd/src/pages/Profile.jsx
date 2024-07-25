/* eslint-disable no-unused-vars */
import React from 'react'
import SliderBar from '../components/SliderBar'
import Profile1 from '../components/Profile'

function Profile() {
  return (
    <div className=' flex-row  '>
        <div className=' w-1/5 fixed h-full'>
        <SliderBar />
        </div>
        <div className='ml-20 flex'>
        <Profile1/>
        </div>
        
      
    </div>
  )
}

export default Profile
