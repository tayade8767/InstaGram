/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PostofUsersIcon from '../components/PostofUsersIcon'
import PostImage from "../components/PostImage";
import PostFooter from "../components/PostFooter";

function PostPage({ postwithuser }) {

  const { imagevedio,owner,comments } = postwithuser;

  console.log("Posts data:", postwithuser);

  return (
    <div className="max-w-[25rem] flex flex-col">
      <div className="flex p-2 bg-white items-center justify-center w-full">
        <PostofUsersIcon user={owner} />
      </div>
      <div className="w-full h-[25rem] overflow-hidden">
        <PostImage imagevedio={imagevedio} />
      </div>
      <PostFooter imagevedio={imagevedio} postid={ postwithuser._id } comments={comments} />
    </div>
  );
}

export default PostPage;
