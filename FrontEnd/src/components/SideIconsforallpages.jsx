/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";


function SideIconsforallpages() {
  return (
   <div className="h-full bg-white shadow-lg items-center justify-center mb-5 flex flex-col min-w-min">
    <div className="mb-10 mt-8 ml-0 text-2xl font-serif font-semibold tracking-tight"><SiInstagram size={26}/></div>
    <nav className='ml-0 flex-1 '>
      <ul>
        <li className="mb-7 text-base">
          <NavLink to="/" end className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><GoHomeFill size={26}/></span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/search" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><IoSearch size={26}/></span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/explore" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><MdOutlineExplore size={26} /></span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/reels" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><BsCameraReels size={26} /></span>
          </NavLink>
        </li>
        <li className="mb-7">
          <NavLink to="/messages" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><RiMessengerLine size={26} /></span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/notifications" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><FaRegHeart size={26} /></span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/create" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><CgAddR size={26} /></span>
          </NavLink>
        </li>
        <li className="text-base mb-7">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
            <span className="material-icons"><CgProfile size={26} /></span>
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="mt-auto ml-0">
        <ul>
          <li className="mb-5 text-base">
            <NavLink to="/threads" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <span className="material-icons"><FaThreads size={26} /></span>
            </NavLink>
          </li>
          <li className='mb-5'>
            <NavLink to="/more" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <span className="material-icons"><CgDetailsMore size={26} /></span>
            </NavLink>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default SideIconsforallpages;
