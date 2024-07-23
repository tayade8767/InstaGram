/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'

function Usericon({btnname}) {
  return (
    <div className="flex items-center">
        <div className="shrink-0 item-center justify-items-center">
            <div className="flex items-center justify-center rounded-full">
                <div className="bg-amber-500 w-12 h-12 rounded-full border-[.1rem] ">
                    {/* put image here */}
                </div>
            </div>
        </div>
        <div className='ml-2 flex flex-col'>
            <span className="text-sm font-semibold">{btnname.userId}</span>
            <span className="text-xs text-violet-800">Suggested For you</span>
        </div>
      <button className="ml-[10rem] text-sm text-blue-500 font-semibold">{btnname.userbtn}</button>
    </div>
  )
}

export default Usericon;