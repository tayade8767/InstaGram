import { asyncHandler } from '../Utils/asyncHandler.js';
// import {ApiResponse } from "../Utils/ApiResponse";
// import {ApiError} from "../Utils/ApiError";
// import { User } from '../models/user.model';
// import { uploadOnCloudinary } from '../Utils/cloudinary';
// import jwt from 'jsonwebtoken'
// import mongoose from "mongoose";

console.log("enter in controller.js file")


const registerUser = asyncHandler( async (req,res) => {

    const { email, name, username, password } = req.body;

    console.log("Received registration data:");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Name:", name);
    console.log("Password:", password);

    // Here you would typically save the user to the database
    // For now, we'll just send back a success response
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: { email, name, username }
    });

} )




const loginUser = asyncHandler( async (req,res) => {

    const { username, password } = req.body;

    console.log("Received registration data:");
    console.log("Username:", username);
    console.log("Password:", password);

    // Here you would typically save the user to the database
    // For now, we'll just send back a success response
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: { password, username }
    });

} )




export { 
    registerUser,
    loginUser,
 }





