/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

function Messagecontainerstory() {

  const Scrollstory = useRef(null);

  const scroll = (scrollOffset) => {
    if (Scrollstory.current) {
      Scrollstory.current.scrollLeft += scrollOffset;
    }
  };

  const [story, setstory] = useState([
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
    {
      userId: "akash",
      story: "story",
    },
  ]);
  
  return (
    <div className="relative max-w-screen-sm mx-auto">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
        onClick={() => scroll(-300)}
      >
        <FaAngleLeft />
      </button>
      <div
        ref={Scrollstory}
        className="  flex gap-5 bg-red-500 p-3 overflow-x-hidden overflow-y-hidden scroll-smooth"
      >
        {story.map((item, index) => (
          <div key={index} className="shrink-0 item-center justify-items-center">
            <div className="w-[5rem] h-[5rem] bg-blue-300 flex items-center justify-center rounded-full">
              {/* enter image here */}
            </div>
            <div className="text-[10px] ml-[1.7rem] mt-[.3rem]">
              {item.userId}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
        onClick={() => scroll(300)}
      >
       <FaAngleRight />
      </button>
    </div>
  )
}

export default Messagecontainerstory