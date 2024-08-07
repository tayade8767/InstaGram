import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { ApiError } from "../Utils/ApiError.js";
import { User } from '../models/user.model.js';
import { Comment } from '../models/comment.model.js'


const addComment = asyncHandler( async (req,res) => {

    const { imagevideoId } = req.params;

    if(!imagevideoId) {
        throw new ApiError(400,"imagevideoId is required");
    }

    const { commenttext } = req.body;

    if(!commenttext) {
        throw new ApiError(400,"commenttext is required");
    }

    const newcomment = await Comment.create({
        content:commenttext,
        post:imagevideoId,
        owner:req.user?._id
    })

    const commentornot = await Comment.findById(newcomment._id);

    if(!commentornot) {
        throw new ApiError(400, "Comment not created in database is required");
    }

    return res
    .status(201)
    .json(new ApiResponse(200, commentornot ,"Comment Added to Vedio Successfully"));

})

const updateComment = asyncHandler( async (req,res) => {

    

})

const deleteComment = asyncHandler( async (req,res) => {

    

})


export {
    addComment, 
    updateComment,
    deleteComment
}