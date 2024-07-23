/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink} from "react-router-dom"
import SignInSignUpRoute from '../AllRoutes/SignInSignUpRoute'

function HaveAccountORNot({accountornot,linkText,linkTo}) {
  return (
    <>
      <div className="border-black-950 border-solid text-center w-96 rounded-md shadow-md p-4 mb-20">
        {accountornot}? 
        <NavLink to={linkTo} className="text-blue-500 hover:underline" >{linkText}</NavLink>
        <SignInSignUpRoute/>
      </div>
    </>
  )
}

export default HaveAccountORNot;