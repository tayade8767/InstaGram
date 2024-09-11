import React, { useState, useRef,useEffect } from 'react';
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
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [image, setImage] = useState(null);
  
  const inputRef = useRef(null);
  const dispatch = useDispatch();


  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 0) {
        try {
          const response = await fetch(`http://localhost:3000/api/autocomplete/search?q=${query}`);
          const data = await response.json();
          setSuggestions(data);
          
        } catch (error) {
          console.error('Error fetching autocomplete suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };
    const debounceTimeout = setTimeout(fetchSuggestions, 300); 
    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const handleSuggestionClick = (suggestion) => {
    setSelectedUsername(suggestion); // Set the selected username
    setQuery(suggestion); // Update the query input with the selected username
    setSuggestions([]); // Clear suggestions after selection
  };


console.log(" iam wrinting");





  const handleOpenPopup = () => {
    setShowPopup(true);
    setShowSearchPopup(false); // Close search popup if open
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleSearchPopup = () => {
    setShowSearchPopup(!showSearchPopup);
  };

  const handleClick = () => {
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
      
      const formData = new FormData();
      formData.append('posts', file);
      dispatch(createPost(formData));
      setShowPopup(false);
    }
  };
  const handleIconClick = () => {
    setShowSearchPopup(false); // Close search popup on any icon click
  };

  return (
    <div className="h-full bg-white shadow-lg p-4 mb-5 flex flex-col">
      <div className="mb-10 mt-4 ml-3 text-2xl font-serif font-semibold tracking-tight ">Instagram</div>
      <nav className='ml-3 flex-1'>
        <ul>
          <li className="mb-7 text-base">
            <NavLink to="/" end className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><GoHomeFill size={29} /></span>
              <span className="ml-7">Home</span>
            </NavLink>
          </li>
          <li className="text-base mb-7">
            <span className="flex items-center cursor-pointer " onClick={toggleSearchPopup}>
              <span className="material-icons"><IoSearch size={29} /></span>
              <span className="ml-7">Search</span>
            </span>
          </li>
          <li className="text-base mb-7">
            <NavLink to="/explore" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><MdOutlineExplore size={29} /></span>
              <span className="ml-7">Explore</span>
            </NavLink>
          </li>
          <li className="text-base mb-7">
            <NavLink to="/reels" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><BsCameraReels size={29} /></span>
              <span className="ml-7">Reels</span>
            </NavLink>
          </li>
          <li className=" mb-7">
            <NavLink to="/messages" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><RiMessengerLine size={29} /></span>
              <span className="ml-7">Messages</span>
            </NavLink>
          </li>
          <li className="text-base mb-7">
            <NavLink to="/notifications" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><FaRegHeart size={29} /></span>
              <span className="ml-7">Notifications</span>
            </NavLink>
          </li>
          <li className="text-base mb-7">
            <span className="flex items-center cursor-pointer" onClick={handleOpenPopup}>
              <span className="material-icons"><CgAddR size={29} /></span>
              <span className="ml-7">Create</span>
            </span>
          </li>
          <li className="text-base mb-7">
            <NavLink to="/profile" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><CgProfile size={29} /></span>
              <span className="ml-7">Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto ml-3">
        <ul>
          <li className="mb-5 text-base">
            <NavLink to="/threads" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><FaThreads size={29} /></span>
              <span className="ml-7">Threads</span>
            </NavLink>
          </li>
          <li className='mb-5 '>
            <NavLink to="/more" className="flex items-center" activeClassName="text-blue-500" onClick={handleIconClick}>
              <span className="material-icons"><CgDetailsMore size={29} /></span>
              <span className="ml-7">More</span>
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

      {showSearchPopup && (
        <div className="fixed top-2 m left-20 bottom-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out mt-20">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Search</h2>
            <input
              type="text"
              placeholder="Search by username..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className="w-full p-2 border border-gray-300 rounded-md"/>
    
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Recent</h3>
              <p className="text-gray-500"><ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            {<div className='flex items-center p-3  rounded-lg w-72 bg-white'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" 
        alt="User Avatar" 
        className="w-10 h-10 rounded-full object-cover mr-3"/>
        <div className="flex-grow">
        <div className="font-bold">{suggestions}</div>
        <div className="text-gray-500 text-sm">Following</div>
      </div>
      

        
              </div>} {/* dispalay all the users */}
          </li>
        ))}
      </ul>.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderBar;
