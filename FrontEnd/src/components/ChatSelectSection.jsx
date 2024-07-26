/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Messagecontainerstory from "./Messagecontainerstory.jsx";
import Usericon from "./Usericon.jsx";
import PopupWindow from "./PopupWindow.jsx";

function ChatSelectSection() {

    const [allusersforchat, setallusersforchat] = useState([
      {
        userId:"tejas",
        userbtn:''
      },{
        userId:"kunal",
        userbtn:''
      },{
        userId:"abhi",
        userbtn:''
      },{
        userId:"rutik",
        userbtn:''
      },{
        userId:"lala",
        userbtn:''
      },
      {
        userId:"tejas",
        userbtn:''
      },{
        userId:"kunal",
        userbtn:''
      },{
        userId:"abhi",
        userbtn:''
      },{
        userId:"rutik",
        userbtn:''
      },{
        userId:"lala",
        userbtn:''
      },{
        userId:"tejas",
        userbtn:''
      },{
        userId:"kunal",
        userbtn:''
      }
    ]);

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
                allusersforchat.map((user,index)=> (
                <Usericon key={index} btnname={user}/>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default ChatSelectSection;
