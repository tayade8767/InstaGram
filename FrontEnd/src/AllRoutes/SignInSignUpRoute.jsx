/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import SignInk from '../components/SignInForm';
import SignIn from '../pages/SignIn';

function SignInSignUpRoute() {
  return (
    <Routes>
        <Route path='/SignUp' element={<SignIn/>} />
    </Routes>
  )
}

export default SignInSignUpRoute;