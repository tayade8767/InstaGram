/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderForStories from '../components/HeaderForStories'
import SliderBar from '../components/SliderBar'

function Home() {
  return (
    <div className="mt-4">
      <HeaderForStories />
<SliderBar/>  
      
    </div>
  )
}

export default Home;