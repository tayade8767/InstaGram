import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { ApiError } from "../Utils/ApiError.js";
import  Post from "../models/post.model.js";
import  uploadOnCloudinary  from '../Utils/cloudinary.js';
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";


const pushPost =asyncHandler(async(req,res)=>{
try {
    console.log("inside push post controller");
    const media = req.file?.path;
    console.log(media);
    if (!media) {
        throw new ApiError("Media is required", 400);
    }
    console.log("afa=="+ imageVideo);
    const imageVideo = await uploadOnCloudinary(media);
    console.log("afasdffasddfasdsf=="+ imageVideo);
    if (!imageVideo) {
        throw new ApiError("Image/Video upload failed", 400);
    }
    const owner = req.user._id;
    const post = await Post.create({
        owner: owner,
        imageVideo: imageVideo
    });
    if (!post) {
        throw new ApiError("Failed to create post", 500);
    }
    return res.status(201).json(new ApiResponse(true, "Post created successfully", post));
    } catch (error) {
    throw new ApiError(error.message || "Failed to create post", error.statusCode || 500);
    }
})


const fetchAllPosts = asyncHandler(async(req,res)=>{

    const getAllPosts = await Post.find().populate('owner','-password');

    return res
    .status(200)
    .json(new ApiResponse(true,"All Posts",getAllPosts));

})


export  { 
     pushPost,
     fetchAllPosts
    };