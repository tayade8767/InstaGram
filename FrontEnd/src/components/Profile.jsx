
import React, { useRef, useState } from 'react';
import {Link } from 'react-router-dom'
import { PiCamera } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa6";
import { CiSaveDown1 } from "react-icons/ci";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useEffect } from 'react';
import { MdOutlinePermContactCalendar } from "react-icons/md";


function Profile({ username1 }) {
const [postCount1,setPostCount] =useState(0);
  const { username: paramUsername } = useParams();
  const username = paramUsername||username1; 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


// eslint-disable-next-line react/prop-types
function Profile({props}) {

  const inputRef = useRef(null);
  const [image, setImage] = useState("https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180"); // Replace with your placeholder image path
  const handleImageClick = () => {
    inputRef.current.click();
  };


  const updateAvatar = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('avatar', file);
  
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/update-profile/${username}`, {
        method: 'PATCH',
        credentials: 'include',
        body: formData,
      
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (!response.ok) {
           useEffect(()=>{
            fetchUser();
           },[username])
          throw new Error(data.message || 'Failed to update avatar');
        }
        setUser(data.data);
        toast.success('Avatar updated successfully');
      } else {     
        const text = await response.text();
        console.error('Unexpected response:', text);
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      console.error('Error updating avatar:', error);
      toast.error(error.message || 'Failed to update avatar');
      fetchUser();
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const localImageUrl = URL.createObjectURL(file);
      setUser(prevUser => ({ ...prevUser, avatar: { url: localImageUrl }}));
      updateAvatar(file);
    }
  };


  useEffect(() => {
    const fetchUser = async () => {
        setLoading(true);
        toast.info('Loading user data...', { autoClose: 3000 });

        try {
            const response = await fetch(`http://localhost:3000/api/v1/users/profile/${username}`, {
                method: 'GET',
                credentials: 'include', 
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUser(data.data); 
            toast.success('User data loaded successfully', { autoClose: 3000 });
        } catch (error) {
            console.error('Error fetching user:', error);
            toast.error('Error fetching user data', { autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    };

    fetchUser();
}, [username]);


// useEffect(() => {
//   const fetchPostCount = async()=>{
//    console.log('Fetching post count');
//       const response = await fetch(`http://localhost:3000/api/posts/count/${username}`,{
//         method: 'GET',
//         credentials: 'include', 
//     })    
//     console.log("this the controller");
//       if(!response.ok){
//        throw new Error('Failed to fetch post count');
//     }

//      const data = await response.json();
//      setPostCount(data.count);
    


//     console.error('Error fetching post count:', err);
//     toast.error('Failed to fetch post count');
  
//   }
//   fetchPostCount();
// },[username]);



console.log('Fetching post count');
useEffect(() => {
  const fetchPostCount = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/posts/count/${username}`, {
        method: 'GET',
        credentials: 'include', 
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch post count');
      }
      const data = await response.json(); 
      console.log('Full response:', data.message.postCount); 
      setPostCount(data.message.postCount);   
    } catch (err) {      console.error('Error fetching post count:', err);
      toast.error('Failed to fetch post count');
    }
  };
  fetchPostCount();
}, [username]);


  return (
    <div className="max-w-4xl mx-auto p-4  mt-none ">
       <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex items-start gap-6 mt-10">
        <div className=" relative " onClick={handleImageClick}>
          <img
            src={user?.avatar||image}
            className="w-32 h-32 rounded-full bg-gray-300"
          />
           <input
            type="file"
            ref={inputRef}
            onChange={handleChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">{username}</h2>
            <button className="px-4 py-1 border bg-slate-200 rounded-lg">Edit profile</button>
            <button className="px-4 py-1 border bg-slate-200 rounded-lg">View archive</button>
            <button className="px-2 py-1">
              <i className="fa fa-cog"></i>
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <div>{postCount1} posts</div>
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
          <div className="text-gray-600 cursor-pointer flex flex-row gap-1"><i className='mt-1'><FaKeyboard /></i></div>
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