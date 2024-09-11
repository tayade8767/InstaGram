/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';  

import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../Slice/chatsclice';
import { io } from 'socket.io-client';
import { setSelectedUser,fetchCurrentUser } from '../Slice/chatsclice';

import { useMemo } from 'react';

import { ChatBotWidget } from "chatbot-widget-ui";


function ChatTofriend() {

  // const socket = io('http://localhost:3000'); // Replace with your server URL

  const [showmessage, setshowmessage] = useState(false);
  // const messages = useSelector((state) => state.chat.messages);

  const socket = useMemo(() => io('http://localhost:3000'), []);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.chat.currentUser);
  const selectedUser = useSelector((state) => state.chat.selectedUser);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  if (!selectedUser) {
    return <div>Select a user to start chatting</div>;
  }

  useEffect(() => {
    dispatch(setSelectedUser(selectedUser));
    setMessages([]);
  },[selectedUser])


  useEffect(() => {
   
    if (!currentUser) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.data._id) {
      socket.emit('user_connected', currentUser.data._id);
    }

    socket.on('receive_private_message', (data) => {
      console.log("Received private message:", data);
      if (data.senderId === selectedUser._id || data.receiverId === currentUser.data._id) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    socket.on('message_sent', (data) => {
      console.log("Message sent successfully:", data);
    });

    socket.on('message_error', (data) => {
      console.error("Error sending message:", data.error);
      // Show an error message to the user
    });

    socket.on('user_status_change', (data) => {
      console.log("User status changed:", data);
      // Update UI to reflect user's online/offline status
    });

    return () => {
      socket.off('receive_private_message');
      socket.off('message_sent');
      socket.off('message_error');
      socket.off('user_status_change');
    };
  }, [socket, currentUser, selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && selectedUser && currentUser && currentUser.data) {
      const messageData = {
        message,
        senderId: currentUser.data._id,
        receiverId: selectedUser._id,
      };
      socket.emit('private_message', messageData);
      dispatch(sendMessage({ message, receiverId: selectedUser._id }));
      setMessages((prevMessages) => [...prevMessages, { ...messageData, fromSelf: true }]);
      setMessage('');
    }
  };
  
  
  const onEmojiClick = (emojiObject) => {
    setMessage(prevComment => prevComment + emojiObject.emoji);
  }

  useEffect(() => {
    function handleClickOutside(event) {
        if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
            setShowEmojiPicker(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const emojiButtonRef = useRef(null);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center mx-5">
          <img src={selectedUser.avatar} alt="User Avatar" className="w-12 h-12 rounded-full mr-2" />
          <div>
            <h2 className="font-bold text-sm">{selectedUser.username}</h2>
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
          <img src={selectedUser.avatar} alt="User Avater" className="w-20 h-20 rounded-full mb-2" />
          <h3 className="font-semibold text-lg">{selectedUser.fullName}</h3>
          <p className="text-xs text-gray-500">{selectedUser.username} · Instagram</p>
          <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md text-xs">View profile</button>
        </div>

        {/* Post content add in future if we want */}
        <div className="flex-grow overflow-y-auto p-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.senderId === currentUser.data._id || msg.fromSelf ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`p-2 rounded-lg ${msg.senderId === currentUser.data._id || msg.fromSelf ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} max-w-xs break-words`}>
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Message input */}
      <form onSubmit={handleSubmit}>
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
          style={{ zIndex: 1000 }}
        >
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}

export default ChatTofriend;
