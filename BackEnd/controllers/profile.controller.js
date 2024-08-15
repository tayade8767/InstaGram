import {User} from "../models/user.model.js"
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import  Post from "../models/post.model.js";
import  uploadOnCloudinary  from '../Utils/cloudinary.js';
import { Profile } from "../models/profile.model.js";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

const createProfile= asyncHandler(async(req,res,next)=>{
    try {
        const { website, gender, bio } = req.body;
        const owner = req.user._id;
        let profileImage = null;

       
        if (req.file) {
            const result = await uploadOnCloudinary(req.file.path);
            profileImage = result.secure_url;
          }
          //cheack if logged in user and  owner is same then create profile 
           
        
        const profile = await Profile.create({
            website,
            gender,
            profileImage,
            bio,
            user: owner
        });

    } catch (error) {
        
    }
})