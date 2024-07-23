/* eslint-disable no-unused-vars */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { TbMessageShare } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

function SliderBar() {
  return (
    <div className="h-full bg-white shadow-lg p-4 mb-5 flex flex-col ">
    <div className="mb-10 mt-4 ml-3 text-2xl font-serif font-semibold tracking-tight	">Instagram</div>
    <nav className='ml-3 flex-1 '>
      <ul >
        <li className="mb-7 text-base ">
          <NavLink to="/" end className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><GoHomeFill size={29}/></span>
            <span className="ml-4">Home</span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/search" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><IoSearch size={29}/></span>
            <span className="ml-4">Search</span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/explore" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><MdOutlineExplore size={29} /></span>
            <span className="ml-4">Explore</span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/reels" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><BsCameraReels size={29} />
            </span>
            <span className="ml-4">Reels</span>
          </NavLink>
        </li>
        <li className="mb-4 mb-7">
          <NavLink to="/messages" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><TbMessageShare size={29} /></span>
            <span className="ml-4">Messages</span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/notifications" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><FaRegHeart size={29} /></span>
            <span className="ml-4">Notifications</span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/create" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><MdOutlineCreateNewFolder size={29} />
            </span>
            <span className="ml-4">Create</span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/profile" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><CgProfile size={29} /></span>
            <span className="ml-4">Profile</span>
          </NavLink>
        </li>
       
      </ul>
    </nav>
    <div className="mt-auto ml-3">
        <ul>
          <li className="mb-5 text-base">
            <NavLink to="/threads" className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><FaThreads size={29} /></span>
              <span className="ml-4">Threads</span>
            </NavLink>
          </li>
          <li className='mb-5'>
            <NavLink to="/more" className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><CgDetailsMore size={29} /></span>
              <span className="ml-4">More</span>
            </NavLink>
          </li>
        </ul>
      </div>

  </div>
);
}

export default SliderBar
