/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Usericon( { user } ) {

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center mt-2 hover:opacity-75 inset-0">
        <div className="shrink-0">
            <div className="flex items-center justify-center rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={user.avatar || "https://via.placeholder.com/150"} 
                  alt={user.username} 
                  className="w-12 h-12 object-cover"
                />
            </div>
        </div>
        <div className='ml-4 flex flex-col cursor-pointer'>
            <span className="text-sm font-semibold">{user.fullName}</span>
            <span className="text-xs text-gray-500">Suggested For you</span>
        </div>
        <button className="ml-auto text-sm text-blue-500 font-semibold">Follow</button>
    </div>
  );
}

export default Usericon;
