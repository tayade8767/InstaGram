import { asyncHandler } from '../Utils/asyncHandler.js';
import {ApiResponse } from "../Utils/ApiResponse";
import {ApiError} from "../Utils/ApiError";
import {Post} from "../models/post.model.js";
import { uploadOnCloudinary } from '../Utils/cloudinary';
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";


const pushPost =asyncHandler(async(req,res)=>{
 try {
    const {owner} = req.body;
    if(!owner){
        throw new ApiError("Owner is required",400);
    }
    const media= req.files?.imagevedio[0]?.path;
    if(!media){
        throw new ApiError("Media is required",400);
    }
    const imagevedio = await uploadOnCloudinary(media);
    if(!imagevedio){
        throw new ApiError("Imagevedio is required",400);
    }
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


export  {pushPost};