import { ApiError } from '../Utils/ApiError.js';
import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
// import { ApiError } from "../Utils/ApiError.js";
import { User } from '../models/user.model.js';
// import { uploadOnCloudinary } from '../Utils/cloudinary.js';
// import jwt from 'jsonwebtoken'
// import mongoose from "mongoose";

// console.log("enter in controller.js file")

const generateAccessAndRefereshTokens = async(userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;

        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token");
    }
}


const registerUser = asyncHandler( async (req,res) => {

    const { email, name, username, password } = req.body;

    // console.log("Received registration data:");
    // console.log("Email:", email);
    // console.log("Username:", username);
    // console.log("Name:", name);
    // console.log("Password:", password);

    // Here you would typically save the user to the database
    // For now, we'll just send back a success response

    if([email, name, username, password].some((field) => field.trim() === "")) {
        throw new ApiError(400,"One of the field is empty All field is required");
    }

    const existeduser = await User.findOne({
        $or: [ { email },{ username } ]
    });

    if(existeduser) {
        throw new ApiError(409,"Username with email or Password is already exists");
    }

    const user = await User.create({
        username: username.toLowerCase(),
        email,
        fullName:name,
        password,
    })
    
    const createdUser = await User.findById(user._id)
    .select("-password -refreshToken");

    if(!createdUser) {
        throw new ApiError(500, "Something went wrong While creating the User");
    }

    const options = {
        httpOnly: true, // This makes the cookie inaccessible to JavaScript's `document.cookie`
        secure: true, // Set to true if you're running over HTTPS; false for HTTP
        sameSite: 'Lax', // Helps prevent CSRF attacks; set to 'None' if the front-end and back-end are on different domains
        maxAge: 24 * 60 * 60 * 1000 // Cookie expiry time, e.g., 1 day
    };
    
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, 
                { user: createdUser, accessToken, refreshToken },
                "User logged in successfully"
            )
        );
    

})




const loginUser = asyncHandler( async (req,res) => {
    console.log("entering to the loginuser")
    const { username, password } = req.body;

    console.log("Received registration data:");
    console.log("Username:", username);
    console.log("Password:", password);

    if(!username || !password){
        throw new ApiError(400,"username of password field is empty");
    }

    const user = await User.findOne( {username} );

    if(!user) {
        throw new ApiError(400,"User not found in database");
    }

    const ispasswordValid = await user.isPasswordCorrect(password);

    if(!ispasswordValid) {
        throw new ApiError(400,"Invalid Password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);

    const loggedinUser = await User.findById(user._id)
    .select("-password -refreshToken");

    const options = {
        httpOnly: true, // This makes the cookie inaccessible to JavaScript's `document.cookie`
        secure: true, // Set to true if you're running over HTTPS; false for HTTP
        sameSite: 'Lax', // Helps prevent CSRF attacks; set to 'None' if the front-end and back-end are on different domains
        maxAge: 24 * 60 * 60 * 1000 // Cookie expiry time, e.g., 1 day
    };
    
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, 
                { user: loggedinUser, accessToken, refreshToken },
                "User logged in successfully"
            )
        );
    

})




export { 
    registerUser,
    loginUser,
    // logoutUser,
    // refreshAccessToken,
    // changeUserPassword,
    // updateAccountDetails,
    // getUserProfile
 }





