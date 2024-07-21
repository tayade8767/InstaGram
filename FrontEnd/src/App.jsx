/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;
