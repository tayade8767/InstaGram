/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

function HeaderForStories() {
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
    <div className="relative max-w-lg mx-auto">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
        onClick={() => scroll(-300)}
      >
        <FaAngleLeft />
      </button>
      <div
        ref={Scrollstory}
        className="  flex gap-5 bg-red-500 h-[6rem] p-3 overflow-x-hidden overflow-y-hidden scroll-smooth"
      >
        {story.map((item, index) => (
          <div
            key={index}
            className="shrink-0 item-center justify-items-center"
          >
            <div className="bg-black w-[3.8rem] h-[3.8rem] flex items-center justify-center rounded-full">
              <div className="bg-blue-500 w-14 h-14 rounded-full border-4 "></div>
            </div>
            <div className="text-[10px] ml-[1.1rem] mt-[.1rem]">
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
  );
}

export default HeaderForStories;
