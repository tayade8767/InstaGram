/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import Messagecontainerstory from "./Messagecontainerstory.jsx";
import Usericon from "./Usericon.jsx";
import PopupWindow from "./PopupWindow.jsx";
import { setSelectedUser } from "../Slice/chatsclice.js";

import { useSelector, useDispatch } from "react-redux";

function ChatSelectSection({ users,onChatSelect }) {

    const [allusersforchat, setallusersforchat] = useState([]);


    useEffect(() => {
      if (users && Array.isArray(users.data)) {
        setallusersforchat(users.data);
      }
    }, [users]);

    console.log("All Usexfcvxcrs:", users.data);

    const dispatch = useDispatch();

    const handleUserSelect = (user) => {
      console.log("Selected user:", user); // Log selected user for debugging
      onChatSelect(true);
      dispatch(setSelectedUser(user)); // Set the selected user
      dispatch(fetchChatHistory(user._id)); // Fetch chat history
    };

  return (
    <div className="flex flex-col h-full">
      <div>
        <PopupWindow/>
      </div>
      <div className="flex flex-col overflow-y-auto">
        <div className="">
          <Messagecontainerstory />
        </div>
        <div className="m-3 space-x-44 ml-5">
            <span className="font-bold">Messages</span>
            <span className="text-zinc-400">Requests</span>
        </div>
        <div className="mx-5">
        {
            allusersforchat.map((user, index) => (
            <div key={index} onClick={() => handleUserSelect(user)}>
              <Usericon user={user} />
            </div>
          ))
        }

        </div>
      </div>
    </div>
  );
}

export default ChatSelectSection;
