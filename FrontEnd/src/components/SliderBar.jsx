/* eslint-disable no-unused-vars */


import  React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
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
import { createPost } from "../Slice/postslice.js";

function SliderBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Assuming setImage is used to preview the image
      };
      reader.readAsDataURL(file);
      
      const formData = new FormData();
      formData.append('posts', file);
      dispatch(createPost(formData));
    }
  };
  // const uploadFile = async (file) => {
  //   // This function should handle the actual file upload to your backend
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await fetch('/upload-endpoint', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       console.log('File uploaded successfully');
  //       // Handle the response from your server
  //     } else {
  //       console.error('File upload failed');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };


  return (
    <div className="h-full bg-white shadow-lg p-4 mb-5 flex flex-col">
      <div className="mb-10 mt-4 ml-3 text-2xl font-serif font-semibold tracking-tight">Instagram</div>
      <nav className='ml-3 flex-1'>
        <ul>
          <li className="mb-7 text-base">
            <NavLink to="/" end className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><GoHomeFill size={29} /></span>
              <span className="ml-4">Home</span>
            </NavLink>
          </li>
          <li className="text-base mb-7">
            <NavLink to="/search" className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><IoSearch size={29} /></span>
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
              <span className="material-icons"><BsCameraReels size={29} /></span>
              <span className="ml-4">Reels</span>
            </NavLink>
          </li>
          <li className=" mb-7">
            <NavLink to="/messages" className="flex items-center" activeClassName="text-blue-500">
              <span className="material-icons"><RiMessengerLine size={29} /></span>
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
            <span className="flex items-center cursor-pointer" onClick={handleOpenPopup}>
              <span className="material-icons"><CgAddR size={29} /></span>
              <span className="ml-4">Create</span>
            </span>
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

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[500px] h-[550px]">
            <button
              onClick={handleClosePopup}
              className="text-gray-500 hover:text-gray-700 float-right"
            >
              &times;
            </button>
            <h2 className="text-sm font-semibold mb-4">Create new post</h2>
            <hr />
            <div className="flex flex-col items-center justify-center h-[300px] rounded-lg mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 text-gray-400 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-4m0 0v-4m0 4h4m-4 0H8m14 4.5V9.75A2.25 2.25 0 0020.25 7.5h-4.629a1.5 1.5 0 01-1.176-.573l-2.621-3.147a1.5 1.5 0 00-1.177-.573H7.5A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h13.5A2.25 2.25 0 0023.25 18.75z"
                />
              </svg>
              <span className="text-gray-900 text-xl">Drag photos and videos here</span>
              <button
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleClick}
              >
                Select from computer
              </button>
              <input
                type="file"
                ref={inputRef}
                onChange={handleChange}
                style={{ display: 'none' }}
                accept="image/*,video/*"
                capture="environment"
                name='media'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderBar;
