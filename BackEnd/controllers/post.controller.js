import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { ApiError } from "../Utils/ApiError.js";
import  Post from "../models/post.model.js";
import { User } from "../models/user.model.js";
import  uploadOnCloudinary  from '../Utils/cloudinary.js';
// import jwt from 'jsonwebtoken'
// import mongoose from "mongoose";


const pushPost = asyncHandler(async (req, res) => {
    try {
      // console.log("Inside push post controller");
  
      const media = req.file?.path;
      // console.log("Media path:", media);
  
      if (!media) {
        throw new ApiError("Media is required", 400);
      }
  
      const imageVideo = await uploadOnCloudinary(media);
      
      // console.log("Cloudinary response:", imageVideo);
  
      if (!imageVideo || !imageVideo.url) {
        throw new ApiError("Image/Video upload failed", 400);
      }
  
      const owner = req.user._id;
      const post = await Post.create({
        owner: owner,
        imagevedio: imageVideo.url // Store the URL from Cloudinary response
      });
  
      if (!post) {
        throw new ApiError("Failed to create post", 500);
      }

      await User.findByIdAndUpdate(
        owner,
        {  
           $push: { 
                posts: post._id,
            }
        },
        {
           new: true,
        }
      )
  
      return res.status(201).json(new ApiResponse(true, "Post created successfully", post));
    } catch (error) {
      console.error("Error in pushPost:", error);
      throw new ApiError(error.message || "Failed to create post", error.statusCode || 500);
    }
  });



  // const countPosts= asyncHandler(async(req,res)=>{
  //   console.log("Post created in successfully");
  


  //   try {

  //     const { username }= req.params||req.body||req.query||req.username;// const username = req.params.username || req.body.username || req.query.username || req.username;
  //     const user = await User.findOne({ username });
  //     console.log(user);
  //     console.log(user.posts.length);
  //     const postCount = user.posts.length;
  //     console.log({ postCount }); 
  //     return res.status(201).json(new ApiResponse(true, "Post count successfully", {postCount}))
  //   } catch (error) {
  //     console.error('Error counting user posts:', error);
  //     throw new ApiError(error.message || "Failed to count post", error.statusCode || 500);
  //   }
  // })


//   const countPosts = asyncHandler(async (req, res) => {
//     const { username } = req.params;
//     let userToFetch = username;
  
  
//     if (!userToFetch && req.user) {
//       userToFetch = req.user.username;
//     }
//       console.log(userToFetch)
//     if (!userToFetch) {
//       throw new ApiError('Username not provided', 400);
//     }
  
//     try {
//       const user = await User.findOne({ username: userToFetch });
//       if (!user) {
//         throw new ApiError('User not found', 404);
//       }
  
//       const postCount = user.posts.length;
//       return res.status(200).json(new ApiResponse(true, "Post count retrieved successfully", { postCount }));
//     } catch (error) {
//       console.error('Error counting user posts:', error);
//       throw new ApiError(error.message || "Failed to count posts", error.statusCode || 500);
//     }
//   });


const countPosts = asyncHandler(async (req, res) => {
  console.log("Post created successfully");

  try {
    const username = req.params.username || req.body.username || req.query.username || req.username;
    
    if (!username) {
      throw new ApiError('Username is required', 400); // Handle missing username
    }

    const user = await User.findOne({ username });

      console.log("in the post ",username);
    if (!user) {
      throw new ApiError('User not found', 404);
    }

    const postCount = user.posts.length;
    console.log({ postCount });

    return res.status(200).json(new ApiResponse(true, "Post count fetched successfully", { postCount }));
  } catch (error) {
    console.error('Error counting user posts:', error);
    throw new ApiError(error.message || "Failed to count posts", error.statusCode || 500);
  }
});











const fetchAllPosts = asyncHandler(async(req,res)=>{

  const getAllPosts = await Post.find()
  .populate('owner', '-password')
  .populate({
    path: 'comments',
    populate: {
      path: 'owner',
      select: '-password'
    }
  });




  console.log("All posts:", getAllPosts);
  return res.status(200).json(new ApiResponse(true, "All Posts", getAllPosts));


})


export  { 
     pushPost,
     fetchAllPosts,
     countPosts
    };