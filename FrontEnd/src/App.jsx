/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home'
import PostPage from './pages/PostPage';
import Profile from './pages/Profile';
import Explore from './components/Explore';
import Messages from './components/Messages'

function App() {
  return (
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </div>
  );
}

export default App;
