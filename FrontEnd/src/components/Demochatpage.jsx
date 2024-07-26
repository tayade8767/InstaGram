/* eslint-disable no-unused-vars */
import React from 'react'
import { PiMessengerLogoThin } from "react-icons/pi";


function Demochatpage() {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <div className='border-[.15rem] border-black p-4 rounded-full '>
      <PiMessengerLogoThin size={70} />
      </div>
      <div className='flex flex-col text-center m-3'>
        <span className='font-semibold text-lg'>Your messages</span>
        <span className='text-sm text-zinc-400'>Send a message to start a chat.</span>
      </div>
      <button className="bg-sky-500 p-1 rounded-md hover:bg-sky-600">
        Send message
      </button>
    </div>
  )
}

export default Demochatpage