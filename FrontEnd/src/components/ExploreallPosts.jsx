/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ExplorePost from "../components/ExplorePost";

function ExploreallPosts() {

  const [allposts, setallposts] = useState([{
      image:"https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600"
  },{
    image:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D"
  },{
    image:"https://images.unsplash.com/photo-1493166228553-4fa0fdb916e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
  },{
    image:"https://images.unsplash.com/photo-1528994618239-4d83bbdb7a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
  },{
    image:"https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600"
  },{
    image:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D"
  },{
    image:"https://images.unsplash.com/photo-1493166228553-4fa0fdb916e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
  },{
    image:"https://images.unsplash.com/photo-1528994618239-4d83bbdb7a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
  },])

  return (
    <div className='pt-5 pl-32 pr-32 pb-5'>
        <div className='grid grid-cols-3 gap-2'>
          {allposts.map((post, index) => (
            <ExplorePost key={index} post={post} />
          ))}
      </div>
    </div>
  )
}

export default ExploreallPosts