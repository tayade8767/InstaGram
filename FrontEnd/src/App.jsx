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
import PopupWindow from './components/PopupWindow';
import Create from './components/Create';

function App() {
  return (
      <div className="app-wrapper">
        <Routes>
          <Route path="/api/v1/users/login" element={<SignIn />} />
          <Route path="/api/v1/users/register" element={<SignUp />} />

          <Route path='/' element={<Home/>} />
          <Route path="/create" element={<Create />} />
          
          <Route path='/post' element={<PostPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/popup' element={<PopupWindow/>}/>
        </Routes>
      </div>
  );
}

export default App;
