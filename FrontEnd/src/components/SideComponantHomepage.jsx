/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Usericon from './Usericon'
import { fetchallusers } from '../Slice/chatsclice';

function SideComponantHomepage() {

  

  const [userstofallow, setuserstofallow] = useState([{
    userId:"tejas",
    userbtn:'follow'
  },{
    userId:"kunal",
    userbtn:'follow'
  },{
    userId:"abhi",
    userbtn:'follow'
  },{
    userId:"rutik",
    userbtn:'follow'
  },{
    userId:"lala",
    userbtn:'follow'
  }]);
  const [loginuser, setloginuser] = useState({userId:"avkj123",userbtn:'Switch'})
  return (
    <div className="relative max-w-sm mx-auto">
      <div className="  flex flex-col gap-5 bg-red-500 h-fit p-3 overflow-x-hidden overflow-y-hidden scroll-smooth">
          <Usericon btnname={loginuser}/>
          <div className="-mt-[.1rem] mb-3">
            <span className='text-zinc-500'>Suggested for you</span>
            <span className='text-neutral-950 ml-[10rem] text-sm'>See All</span>
          </div>
          {
            userstofallow.map((user,index)=> (
                <div className="flex items-center mt-2 hover:opacity-75 inset-0">
                      <div className="shrink-0">
                          <div className="flex items-center justify-center rounded-full overflow-hidden bg-gray-200">
                              <img 
                                src={user.avatar || "https://via.placeholder.com/150"} 
                                alt={user.username} 
                                className="w-12 h-12 object-cover"
                              />
                          </div>
                      </div>
                      <div className='ml-4 flex flex-col cursor-pointer'>
                          <span className="text-sm font-semibold">{user.fullName}</span>
                          <span className="text-xs text-gray-500">Suggested For you</span>
                      </div>
                      <button className="ml-auto text-sm text-blue-500 font-semibold">Follow</button>
                </div>
            ))
          }
          <div className='flex flex-col mt-4 text-stone-600	text-[12px]'>
            <span>About . Help . Press . API . Jobs . Privacy . Terms . </span>
            <span>Locations . Language . Meta Verified</span>
            <span className='mt-4'>© 2024 INSTAGRAM FROM META</span>
          </div>
      </div>
    </div>
  )
}

export default SideComponantHomepage