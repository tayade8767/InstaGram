import { asyncHandler } from '../Utils/asyncHandler.js';
import {ApiResponse } from "../Utils/ApiResponse";
import {ApiError} from "../Utils/ApiError";
import {Post} from "../models/post.model.js";
import { uploadOncloudnary } from '../Utils/cloudinary';



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


export  {pushPost};