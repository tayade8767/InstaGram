
/* eslint-disable no-unused-vars */
import React from 'react'
import SignUpfrom from "../components/SignUpfrom"
import Imageregister_login from '../components/Imageregister_login'

function SignUp() {
  return (
    <div className='flex bg-gray-50 overflow-hidden'>
      <div className='w-1/2'>
        <Imageregister_login/>
      </div>
      <div className='w-1/2'>
        <SignUpfrom/>
      </div>
    </div>
  )
}

export default SignUp
