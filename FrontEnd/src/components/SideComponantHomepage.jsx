/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Usericon from './Usericon'

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
              <Usericon key={index} btnname={user}/>
            ))
          }
      </div>
    </div>
  )
}

export default SideComponantHomepage