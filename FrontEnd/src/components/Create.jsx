import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createPost} from "../Slice/postslice.js"

function Create() {
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null); // Added useRef for the input

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
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('file', file);
      dispatch(createPost(formData));
    }
  };

  const uploadFile = async (file) => {
    // This function should handle the actual file upload to your backend
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/upload-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
        // Handle the response from your server
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handleOpenPopup}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create New Post
      </button>

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
                accept="image/*,video/*" // Accepts images and videos
                capture="environment"   // Optional: Opens the camera by default if available
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
