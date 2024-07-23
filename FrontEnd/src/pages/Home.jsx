/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderForStories from '../components/HeaderForStories'
import SliderBar from '../components/SliderBar'
import SideComponantHomepage from '../components/SideComponantHomepage'

function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 fixed h-full">
        <SliderBar/>
      </div>
      <div className="flex-1 ml-[20%] flex overflow-y-auto">
        <div className="w-3/5 p-4">
          <HeaderForStories />
        </div>
        <div className="w-2/5 p-4 bg-yellow-300">
          <SideComponantHomepage/>
        </div>
      </div>
    </div>
  )
}

export default Home