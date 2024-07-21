import React from 'react'
import {Link} from "react-router-dom"
function HaveAccountORNot() {
  return (
    <div className="border border-gray-500 p-5 text-center w-80 mx-auto mt-2 rounded shadow gap-2">
      Don&apos;t have an account? <Link to="#" className="text-blue-500 hover:underline">Sign up</Link>
    </div>
    
  )
}
export default HaveAccountORNot;
