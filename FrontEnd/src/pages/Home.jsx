/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderForStories from '../components/HeaderForStories'
import SliderBar from '../components/SliderBar'
import SideComponantHomepage from '../components/SideComponantHomepage'
import PostPage from './PostPage'
import { useDispatch,useSelector } from 'react-redux';


function Home() {

  const { isLoading, posts } = useSelector((state) => state.auth);


  return (
    <div className="flex h-screen">
      <div className="w-1/5 fixed h-full">
        <SliderBar/>
      </div>
      <div className="flex-1 ml-[20%] flex overflow-y-auto">
        <div className="w-3/5 p-4">
          <div className="mb-4">
            <HeaderForStories />
          </div>
          <div className='flex flex-col items-center'>
            <PostPage/>
            <PostPage/>
            <PostPage/>
            <PostPage/>
          </div>
        </div>    
        <div className="w-2/5 p-4 bg-yellow-300">
          <SideComponantHomepage/>
        </div>
      </div>
    </div>
  )
}

export default Home