import { ApiError } from '../Utils/ApiError.js';
import { asyncHandler } from '../Utils/asyncHandler.js';
import {ApiResponse } from "../Utils/ApiResponse";
import {ApiError} from "../Utils/ApiError";
import { User } from '../models/user.model';
import { uploadOnCloudinary } from '../Utils/cloudinary';
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler( async (req,res) => {

    const {  username, email, fullName,  password } = req.body;

    if([username, email, fullName,  password ].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fileds are manditary!");
    }
    const existingUser = await User.findOne({
        $or: [
            { email },
            { username },
        ]
    })


    if(existingUser){
        throw new ApiError(400,"User already exists!");
    }

    const user = await User.create({
        username:username.toLowerCase(),
        email,
        fullName,
        password,
    })
    // if(!user){
    //     throw new ApiError(500,"Failed to create user!");
    // }
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken" 
    )
    if(!createdUser){
        throw new ApiError(500,"Failed to find user!");
    }

     return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered successfully")
     )
    // console.log(email);
    // console.log(username);
    // console.log(name);
    // console.log(password);
} )


const loginUser =asyncHandler(async(req,res)=>{
    const {username,password} = req.body

    if(!username && !password){
        throw new ApiError(400,"Username and password are required!");
    }
    const user = await User.findOne({
        $or:[{username},{password}]
    })
    if(!user){
        throw new ApiError(404,"Invalid User!");
    }

    const isPasswordCorrect= await user.isPasswordCorrect(password);

    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid Password!");
    }
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly:true,
        secure:true,
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})



const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body

    

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))
})

const getCurrentUser = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.user,
        "User fetched successfully"
    ))
})

export { 
    registerUser,
    // loginUser,
 }





