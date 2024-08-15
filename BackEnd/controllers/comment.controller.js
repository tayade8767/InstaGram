import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { ApiError } from "../Utils/ApiError.js";
import { User } from '../models/user.model.js';
import { Comment } from '../models/comment.model.js'
import Post from '../models/post.model.js';


const addComment = asyncHandler( async (req,res) => {

    // const commentcontent = req.body.comment;
    // console.log("inside addComment")
    // console.log(req.body);

    const { postid,comment } = req.body;

    if(!postid || !comment) {
        throw new ApiError(400,"postid or comment is required");
    }

    const newcomment = await Comment.create({
        content:comment,
        post:postid,
        owner:req.user?._id
    })

    const commentcreatedornot = await Comment.findById(newcomment._id);

    if(!commentcreatedornot) {
        throw new ApiError(400, "Comment not created in database is required");
    }

    await Post.findByIdAndUpdate(
        postid,
        {
            $push : {
                comments: commentcreatedornot._id,
            }
        },
        {
            new : true,
        }
    )

    return res
    .status(201)
    .json(new ApiResponse(200, commentcreatedornot ,"Comment Added to Vedio Successfully"));

})

// const updateComment = asyncHandler( async (req,res) => {

    

// })

// const deleteComment = asyncHandler( async (req,res) => {

    

// })


export {
    addComment, 
    // updateComment,
    // deleteComment
}