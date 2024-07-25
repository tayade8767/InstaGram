/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import {Link } from 'react-router-dom'
import { PiCamera } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa6";
import { CiSaveDown1 } from "react-icons/ci";
import { MdOutlinePermContactCalendar } from "react-icons/md";

function Profile() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180"); // Replace with your placeholder image path

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4  mt-none ">
      <div className="flex items-start gap-6 mt-10">
        <div className="relative" onClick={handleImageClick}>
          <img
            src={image}
            className="w-32 h-32 rounded-full bg-gray-300"
          />
          <input
            type="file"
            ref={inputRef}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">avkj123</h2>
            <button className="px-4 py-1 border bg-slate-200 rounded-lg">Edit profile</button>
            <button className="px-4 py-1 border bg-slate-200 rounded-lg">View archive</button>
            <button className="px-2 py-1">
              <i className="fa fa-cog"></i>
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <div>0 posts</div>
            <div>13030 followers</div>
            <div>19000 following</div>
          </div>
          <div className="mt-2">Rohit man Sharma</div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <div className="flex flex-col items-center">
          <button className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl">+</span>
          </button>
          <div>New</div>
        </div>
      </div>
    
      <div className="mt-20 border-t pt-4 gap-5">
       
        <div className="flex justify-center space-x-8 text-sm gap-4">
          <div className="text-gray-600 cursor-pointer flex flex-row gap-1"><i className='mt-1'><FaKeyboard /></i>POSTS</div>
          <div className="text-gray-600 cursor-pointer flex flex-row gap-1"> <i className='mt-1'><CiSaveDown1 /></i>SAVED</div>
          <div className="text-gray-600 cursor-pointer flex flex-row gap-1">TAGGED</div>
        </div>
        
        <div className="mt-10 flex flex-col text-center justify-center items-center gap-3">
        <div className=' flex justify-center items-center w-[3.5rem] h-[3.5rem] text-sm gap-7 border-2 rounded-full border-black'>
          <PiCamera size={35} />
        </div>
          <div className="text-lg font-bold gap-5 flex-col">Share Photos</div>
          <p className="text-gray-500">When you share photos, they will appear on your profile.</p>
          {/* <button className=" bg-zinc-200 text-blue ">Share your first photo</button> */}
          <Link to="#" className=" text-blue-900 " >Share your first photo</Link>
        </div>
       
      </div>
    </div>
  );
}

export default Profile
