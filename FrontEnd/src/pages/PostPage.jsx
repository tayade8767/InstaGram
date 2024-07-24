/* eslint-disable no-unused-vars */
import React from "react";
import PostofUsersIcon from '../components/PostofUsersIcon'

function PostPage() {
  return (
    <div className="w-screen h-screen bg-red-400">
      <div className="flex p-2 bg-lime-200 min-w-fit items-center justify-center w-[22rem]">
        <PostofUsersIcon/>
      </div>
    </div>
  );
}

export default PostPage;
