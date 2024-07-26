/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'; 

function Onclickselectionpopupforchat({onClose}) {

    const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">New message</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoMdClose size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div className="h-40 overflow-y-auto mb-4">
            {searchTerm && <p className="text-gray-500">No account found.</p>}
          </div>
          
          <button 
            className="w-full bg-blue-200 text-blue-800 py-2 rounded-md font-semibold"
            disabled={!searchTerm}
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onclickselectionpopupforchat