/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import SideIconsforallpages from '../components/SideIconsforallpages'
import ChatSelectSection from './ChatSelectSection'
import Demochatpage from '../components/Demochatpage'
import ChatTofriend from './ChatTofriend'  

import { fetchallusers } from '../Slice/chatsclice'

import { useDispatch, useSelector } from 'react-redux';

function Messages() {

  const [isChatActive, setIsChatActive] = useState(false);

  const dispatch = useDispatch();

  // Extract users and status from the Redux state
  const { users, status } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchallusers());
  }, [dispatch]);

  // Check loading status
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Check if there's an error
  if (status === 'failed') {
    return <div>Error loading users.</div>;
  }

  // Debugging output
  // console.log("All Users:", users);
  
  return (
    
    <div className='h-screen w-screen flex max-w-screen'>
      <div className='w-[5%]'>
        <SideIconsforallpages />  
      </div>
      <div className='w-[23%]'>
        <ChatSelectSection users={users} onChatSelect={() => setIsChatActive(true)} />
      </div>
      <div className='w-[72%] overflow-y-auto'>
         {isChatActive ? <ChatTofriend /> : <Demochatpage onStartChat={() => setIsChatActive(true)} />}
      </div>
    </div>
  )
}

export default Messages