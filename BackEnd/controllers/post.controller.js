import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { ApiError } from "../Utils/ApiError.js";
import  Post from "../models/post.model.js";
import  uploadOnCloudinary  from '../Utils/cloudinary.js';
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";


const pushPost =asyncHandler(async(req,res)=>{
 try {
    const media= req.files?.posts?.path;
    if(!media){
        throw new ApiError("Media is required",400);
    }
    const imagevedio = await uploadOncloudnary(media);
    if(!imagevedio){
        throw new ApiError("Imagevedio is required",400);
    }
    const owner = req.user._id;
    const post = await Post.create({
        owner:owner,
        imagevedio:imagevedio
    })
    if(!post){
        throw new ApiError("Failed to create post",500);
    }
    await post.save();
    
     return res.status(201).json(new ApiResponse(true,"Post created successfully",post));

 } catch (error) {
        throw new ApiError("Failed to create post",500);
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