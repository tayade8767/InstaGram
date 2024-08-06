import { asyncHandler } from '../Utils/asyncHandler.js';
// import {ApiResponse } from "../Utils/ApiResponse";
// import {ApiError} from "../Utils/ApiError";
// import { User } from '../models/user.model';
// import { uploadOnCloudinary } from '../Utils/cloudinary';
// import jwt from 'jsonwebtoken'
// import mongoose from "mongoose";



const registerUser = asyncHandler( async (req,res) => {

    const { email, name, username, password } = req.body;

    console.log(email);
    console.log(username);
    console.log(name);
    console.log(password);

} )




export { 
    registerUser,
    // loginUser,
 }





