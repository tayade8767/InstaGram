/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { TbDots } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function PostofUsersIcon({ user }) {

  // Log user to debug what's being passed
  // console.log(user);
  const navigate = useNavigate();

  // Add a check for user and user.avatar
  if (!user || !user.avatar) {
    return <div>Loading...</div>; // Fallback UI or loading indicator
  }
  const handlesumbmit = () => {
    navigate(`/profile/${user.username}`);
  }

  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full border-[.1rem] overflow-hidden">
            <img onClick={handlesumbmit}
              src={user.avatar} 
              alt='avatar of user which having post'
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className='flex ml-2'>
          <div className="text-sm flex flex-col">
            <span className="font-semibold">{user.username}</span>
            <span className="text-[.55rem]">Original Audio</span>
          </div>
          <button className="ml-5 text-sm text-blue-500 font-semibold">
            follow
          </button>
        </div>
      </div>
      <button className="text-sm font-semibold">
        <TbDots size={20} />
      </button>
    </div>
  );
}

export default PostofUsersIcon;