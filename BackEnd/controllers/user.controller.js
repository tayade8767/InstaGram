import { ApiError } from '../Utils/ApiError.js';
import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
// import { ApiError } from "../Utils/ApiError.js";
import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import cloudinaryFunctions from '../Utils/cloudinary.js';
const { uploadOnCloudinary, deleteFromCloudinary } = cloudinaryFunctions;

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

    const { email, name, username, password} = req.body;

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
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const existeduser = await User.findOne({
        $or: [ { email },{ username } ]
    });


    let avatarUpload;
    if (avatarLocalPath) {
        avatarUpload = await uploadOnCloudinary(avatarLocalPath);
        if (!avatarUpload) {
            throw new ApiError(400, "Avatar upload failed");
        }
    }
    


    if(existeduser) {
        throw new ApiError(409,"Username with email or Password is already exists");
    }

    const user = await User.create({
        username: username.toLowerCase(),
        email,
        fullName:name,
        password,
        avatar: avatarUpload.url ? {
            public_id: avatarUpload.public_id,
            url: avatarUpload.secure_url
        } : undefined
       
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

const updateUserProfile = asyncHandler(async (req, res) => {
    try {
      const avatarLocalPath = req.file?.path;
      const loggedInUserId = req.user._id;
      const { username } = req.params;
  
      const userToUpdate = await User.findOne({ username });
      if (!userToUpdate) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (loggedInUserId.toString() !== userToUpdate._id.toString()) {
        return res.status(403).json({ message: "You are not authorized to update this profile" });
      }
  
      
if (avatarLocalPath) {
           
    if (userToUpdate.avatar && userToUpdate.avatar.public_id) {
        await deleteFromCloudinary(userToUpdate.avatar.public_id);
    }

   
const avatarUpload = await uploadOnCloudinary(avatarLocalPath);
if (avatarUpload) {
    userToUpdate.avatar = avatarUpload.secure_url;
}
}
  
      await userToUpdate.save();
      const updatedUser = await User.findById(userToUpdate._id).select("-password -refreshToken");
  
      return res.status(200).json(new ApiResponse(200, updatedUser, "User profile updated successfully"));
    } catch (error) {
      console.error('Error in updateUserProfile:', error);
      return res.status(500).json({ message: "Error updating user profile", error: error.message });
    }
  });
 


  

console.log("i am in user ");
const userProfile = asyncHandler(async(req,res) => {
    const username = req.params.username || req.body.username || req.query.username || req.username;
    
    console.log("Fetching profile for username:", username);
    try {
        const user = await User.findOne({ username }).select('-password -refreshToken');
        if (!user) {
            return res.status(404).json(new ApiResponse(404, null, 'User not found'));
        }
        res.json(new ApiResponse(200, user, 'User profile fetched successfully'));
    } catch (error) {
        console.error("Error in userProfile:", error);
        throw new ApiError(500, "Error while fetching user profile");
    }
})


const currentUser =asyncHandler(async(req, res) => {
    try{
        if (!req.user) {
            throw new ApiError(401, "User not authenticated");
        }
        console.log("Current user:", req.user.username);
        res.json(new ApiResponse(200, { username: req.user.username }, 'Current user fetched successfully'));
    }catch(error){
        console.error("Error in currentUser:", error);
         throw new ApiError(500, "Error while fetching current user");
    }
})



export { 
    registerUser,
    loginUser,
    updateUserProfile,
    userProfile,
    currentUser
    // logoutUser,
    // refreshAccessToken,
    // changeUserPassword,
    // updateAccountDetails,
    // getUserProfile
 }





