/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom"
import Onclickselectionpopupforchat from './Onclickselectionpopupforchat';

const PopupWindow = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [val, setVal] = useState(false); 

    const [showModal, setShowModal] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', { username, password });
      setUsername('');
      setPassword('');
    };

    const setclicktofalse = () => {
      setShowModal(false);
    }
  
    return (
      <div className="flex flex-row">
        <div className="items-center pt-8 font-extrabold space-x-56 text-xl flex rounded-md p-4">
          <div className="flex items-center flex-grow">
            <span className="font-semibold">userid</span>
            <Popup 
              trigger={
                <button className="flex items-center ml-1">
                  <MdOutlineKeyboardArrowDown className="cursor-pointer" />
                </button>
              } 
              position="right center"
              modal
              nested
              overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
              contentStyle={{ 
                padding: 0, 
                border: 'none',
                width: '100%',
                maxWidth: '500px',
                right: '20px',
                left: 'auto'
              }}
            >
              {close => (
                <div className="bg-white p-10 rounded-lg shadow-xl w-full relative">
                  <button 
                    className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={close}
                  >
                    <GrClose className="w-5 h-5" />
                  </button>
                  <h2 className="text-4xl font-bold mb-14 text-center font-serif">Instagram</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <input 
                        type="text" 
                        value={username}  
                        onChange={(e) => setUsername(e.target.value)} 
                        className="w-full px-3 py-2 border rounded-md"  
                        placeholder='Email, number, username'
                      />
                    </div>
                    <div>
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className="w-full px-3 py-2 border rounded-md" 
                        placeholder='Password' 
                      />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                      Login
                    </button>
                    {/* <Checkbox value={val} setValue={setVal}></Checkbox> */}
                    <div className="text-center">
                      <Link to="#" className="text-blue-500 hover:underline">Forgot Password?</Link>
                    </div>
                  </form>
                </div>
              )}
            </Popup>
          </div>
          <div>
            <FiEdit onClick={() => setShowModal(true)} className="w-6 h-6 cursor-pointer hover:text-zinc-700" />
            {showModal && <Onclickselectionpopupforchat onClose={setclicktofalse} />}
          </div>
        </div>
      </div>
    );
  };
export default PopupWindow
