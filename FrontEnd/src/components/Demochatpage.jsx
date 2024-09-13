/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { PiMessengerLogoThin } from "react-icons/pi";
import Onclickselectionpopupforchat from './Onclickselectionpopupforchat';
import ChatBot from "react-chatbotify";

import Chatbotcpmponant from './Chatbotcpmponant';

import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from '../assets/react.svg';

function Demochatpage() {
  const [showModal, setShowModal] = useState(false);
  const [showchatModal, setchatShowModal] = useState(false);

  const closePopup = () => {
    setShowModal(false);
  }

  const handleNewUserMessage = async (newMessage) => {

    console.log(`New message incoming! ${newMessage}`);

//     const apiKey = process.env.REACT_APP_GEMINI_API_URL;  // Correct way to access the env variable
// console.log("sdfasdfsadf==",apiKey);


      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.process.env.REACT_APP_GEMINI_API_URL}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "contents": [{
                  "parts": [{
                      "text": newMessage
                  }]
              }]
          }),
      });

      const data = await response.json();
      console.log("Bot response:", data); // Log the bot response

      // Set the response from the bot, specifically extracting the text content
      const botText = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't find a valid response.";

      addResponseMessage(botText);
      
      // return botText;

  };

  return (
    <div className='flex flex-col h-screen items-center justify-center relative'>
      <div className='border-[.15rem] border-black p-4 rounded-full '>
        <PiMessengerLogoThin size={70} />
      </div>
      <div className='flex flex-col text-center m-3'>
        <span className='font-semibold text-lg'>Your messages</span>
        <span className='text-sm text-zinc-400'>Send a message to start a chat.</span>
      </div>
      <button 
        onClick={() => setShowModal(true)} 
        className="bg-sky-500 p-1 rounded-md hover:bg-sky-600"
      >
        Send message
      </button>
      {showModal && <Onclickselectionpopupforchat onClose={closePopup} />}

      {/* Chatbot Component in Bottom-Right Corner */}
      <div className="absolute bottom-4 right-4">
        {/* { showchatModal ? (
          <Chatbotcpmponant />
        ) : (
          <div onClick={() => setchatShowModal(true)} style={{ cursor: 'pointer' }}>
            <ChatBot />
          </div>
        )} */}
        <Widget
          /*handleNewUserMessage={handleNewUserMessage}*/
          profileAvatar={logo}
          
          title="AT Chatbot"
          subtitle="hello"
        />
      </div>

    </div>

  )
}

export default Demochatpage