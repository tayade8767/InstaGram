/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SideIconsforallpages from '../components/SideIconsforallpages'
import ChatSelectSection from './ChatSelectSection.jsx'
import Demochatpage from '../components/Demochatpage'

function Messages() {

  const [chatistrueornot, setchatistrueornot] = useState(false)

  return (
    <div className='h-screen w-screen flex max-w-screen'>
      <div className='w-[5%]'>
        <SideIconsforallpages />
      </div>
      <div className='w-[23%]'>
        <ChatSelectSection />
      </div>
      <div className='w-[72%] overflow-y-auto'>
         {
            !chatistrueornot && <Demochatpage />
         }
      </div>
    </div>
  )
}

export default Messages

