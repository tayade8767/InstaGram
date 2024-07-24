/* eslint-disable no-unused-vars */
import React from "react";
import PostofUsersIcon from '../components/PostofUsersIcon'
import PostImage from "../components/PostImage";
import PostFooter from "../components/PostFooter";

function PostPage() {
  return (
    <div className="max-w-[25rem] h-screen bg-red-400">
      <div className="flex p-2 bg-lime-200 min-w-fit items-center justify-center w-[22rem]">
        <PostofUsersIcon/>
      </div>
      <div className="flex-grow max-h-[31rem] overflow-hidden border-2 border-black">
        <PostImage/>
      </div>
        <PostFooter/>
    </div>
  );
}

export default PostPage;
