/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SideIconsforallpages from '../components/SideIconsforallpages'
import ChatSelectSection from './ChatSelectSection'
import Demochatpage from '../components/Demochatpage'
import ChatTofriend from './ChatTofriend'  // Assuming this is the correct path

function Messages() {
  const [isChatActive, setIsChatActive] = useState(true)

  return (
    <div className='h-screen w-screen flex max-w-screen'>
      <div className='w-[5%]'>
        <SideIconsforallpages />  
      </div>
      <div className='w-[23%]'>
        <ChatSelectSection onChatSelect={() => setIsChatActive(true)} />
      </div>
      <div className='w-[72%] overflow-y-auto'>
         {isChatActive ? <ChatTofriend /> : <Demochatpage onStartChat={() => setIsChatActive(true)} />}
      </div>
    </div>
  )
}

export default Messages