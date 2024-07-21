/* eslint-disable no-unused-vars */
import React from 'react'
import SignInForm from "../components/SignInForm"
import Imageregister_login from '../components/Imageregister_login'

function SignIn() {
  return (
    <div className='flex bg-gray-50 overflow-hidden'>
      <div className='w-1/2'>
        <Imageregister_login/>
      </div>
      <div className='w-1/2'>
        <SignInForm/>
      </div>
    </div>
  )
}

export default SignIn