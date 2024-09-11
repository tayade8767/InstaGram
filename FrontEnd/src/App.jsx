/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import Profile from './pages/Profile';
import Profile1 from './components/Profile.jsx';
import Explore from './components/Explore';
import Messages from './components/Messages';
import PopupWindow from './components/PopupWindow';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);  
  
  useEffect(() => {
    
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/users/currentuser', {
          method: 'GET',
          credentials: 'include', // Include cookies
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch the current user');
        }
  
        const data = await response.json();
        console.log('Fetched username:', data.data.username);  // Log the username from API
  
        if (data && data.data.username) {
          setLoggedInUser(data.data.username);  // Set the username in state
        }
      } catch (error) {
        console.error('Failed to fetch logged-in user:', error);
      }
    };
  
    fetchLoggedInUser();
  }, []);

  
  useEffect(() => {
    if (loggedInUser) {
      console.log('Logged-in user updated:', loggedInUser);
    }
  }, [loggedInUser]);

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/api/v1/users/login" element={<SignIn />} />
        <Route path="/api/v1/users/register" element={<SignUp />} />

        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/profile/:username" element={<Profile />} />

        {/* Pass the logged-in username as a prop */}
        <Route path="/profile" element={<Profile username1={loggedInUser} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/popup" element={<PopupWindow />} />
      </Routes>
    </div>
  );
}

export default App;
