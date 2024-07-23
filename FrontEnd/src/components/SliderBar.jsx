
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { TbMessageShare } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

function SliderBar() {
  return (
    <div className="w-1/5 h-full bg-white shadow-lg p-4 mb-5 flex flex-col ">
    <div className="text-2xl font-bold mb-10">Instagram</div>
    <nav className='ml-3 flex-1 '>
      <ul >
        <li className="mb-4  ">
          <NavLink to="/" end className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><GoHomeFill /></span>
            <span className="ml-4">Home</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/search" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><IoSearch/></span>
            <span className="ml-4">Search</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/explore" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><MdOutlineExplore /></span>
            <span className="ml-4">Explore</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/reels" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><BsFillCameraReelsFill />
            </span>
            <span className="ml-4">Reels</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/messages" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><TbMessageShare /></span>
            <span className="ml-4">Messages</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/notifications" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><FaRegHeart /></span>
            <span className="ml-4">Notifications</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/create" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><MdOutlineCreateNewFolder />
            </span>
            <span className="ml-4">Create</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/profile" className="flex items-center" activeClassName="text-blue-500">
            <span className="material-icons"><CgProfile /></span>
            <span className="ml-4">Profile</span>
          </NavLink>
        </li>
       
      </ul>
    </nav>
    <div className="mt-auto">
        <ul>
          <li className="mb-4">
            <NavLink to="/threads" className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><FaThreads /></span>
              <span className="ml-4">Threads</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/more" className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><CgDetailsMore /></span>
              <span className="ml-4">More</span>
            </NavLink>
          </li>
        </ul>
      </div>

  </div>
);
};

export default SliderBar
