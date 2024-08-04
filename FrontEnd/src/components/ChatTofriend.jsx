/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';  

function ChatTofriend() {

  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const emojiPickerRef = useRef(null);

  const [showmessage, setshowmessage] = useState(false);
  
  const onEmojiClick = (emojiObject) => {
    setMessage(prevComment => prevComment + emojiObject.emoji);
  }
  const handlesubmit = () => {
    event.preventDefault();
    setMessage("");
    // showmessage = !showmessage;
    console.log(message);
  }

  useEffect(() => {
    function handleClickOutside(event) {
        if(emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
            setShowEmojiPicker(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }
    
})



  const emojiButtonRef = useRef(null);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center mx-5">
          <img src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rutik Nimkarde" className="w-12 h-12 rounded-full mr-2" />
          <div>
            <h2 className="font-bold text-sm">Rutik Nimkarde</h2>
            <p className="text-xs text-gray-500">Active 40m ago</p>
          </div>
        </div>
        <div className="flex space-x-4 mx-5">
          <IoCallOutline size={30} className="cursor-pointer text-sm" />
          <FiVideo size={30} className="cursor-pointer text-sm" />
          <MdOutlineInfo size={30} className="cursor-pointer text-sm" />
        </div>
      </div>

      {/* Chat content */}
      <div className="flex-grow overflow-y-auto p-3">
        {/* Profile card */}
        <div className="flex flex-col items-center my-3">
          <img src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rutik Nimkarde" className="w-20 h-20 rounded-full mb-2" />
          <h3 className="font-semibold text-lg">Rutik Nimkarde</h3>
          <p className="text-xs text-gray-500">rutiknimkarde · Instagram</p>
          <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md text-xs">View profile</button>
        </div>

        {/* Post content              add in future if we want        */}
        <div className="my-3">
          <p className="flex flex-col items-center my-6 text-xs text-gray-500 mb-1">1 May 2024, 19:25</p>
        </div>
        
        {/* Message */}
        {/* { showmessage && 
          (
            <div>
              <p>{message}</p>
            </div>
          ) 
        } */}


      </div>

      {/* Message input */}
      <form onSubmit={handlesubmit}>
      <div className="flex items-center p-3 border-t relative">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-100 rounded-full ml-2 px-10 py-3 text-sm pr-24"
          />
          <div ref={emojiButtonRef} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
            <BsEmojiSmile 
              size={27} 
              className="mr-3 text-gray-500 cursor-pointer" 
              onClick={toggleEmojiPicker} 
            />
          </div>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <AiOutlineAudio size={27} className="text-gray-500 cursor-pointer" />
            <CiImageOn size={27} className="text-gray-500 cursor-pointer" />
            <FaRegHeart size={27} className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      </form>

      {showEmojiPicker && (
        <div 
          ref={emojiPickerRef} 
          className="absolute bottom-16 left-4"
          style={{zIndex: 1000}}
        >
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
    );
}

export default ChatTofriend

