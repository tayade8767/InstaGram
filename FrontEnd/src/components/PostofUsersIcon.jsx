/* eslint-disable no-unused-vars */
import React from 'react'
import { TbDots } from "react-icons/tb";

function PostofUsersIcon() {
  return (
    <div className="flex items-center">
        <div className="shrink-0 item-center justify-items-center">
          <div className="flex items-center justify-center rounded-full">
            <div className="bg-amber-500 w-12 h-12 rounded-full border-[.1rem] ">
              {/* put image here userpost*/}
            </div>
          </div>
        </div>
        <div className="ml-2 flex">
          <span className="text-sm font-semibold">avkj123</span>
          <button className="ml-3 text-sm text-blue-500 font-semibold">
            follow
          </button>
        </div>
        <button className="ml-[12rem] text-sm font-semibold">
            <TbDots size={20} />
        </button>
    </div>
  )
}

export default PostofUsersIcon