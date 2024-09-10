import { updateUserProfile } from "../controllers/user.controller.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import {User} from "../models/user.model.js"
const createProfile = asyncHandler(async (req, res, next) => {
    const loggedInUserId = req.user.id;
    const { userId } = req.params;
    if (loggedInUserId !== userId) {
        return res.status(403).json(
            new ApiResponse(403, null, "You are not authorized to edit this profile.")
        );
    }
    try {
        const updatedUser = await updateUserProfile(userId, req.body);
        res.status(200).json(
            new ApiResponse(200, updatedUser, "Profile updated successfully.")
        );
    } catch (error) {
        res.status(500).json(
            new ApiResponse(500, null, "Server error. Unable to update profile.")
        );
    }
});

const getUserProfile = asyncHandler(async (req, res, next)=>{
   try {
    const user = await User.findOne({ username: req.params.username });
    if(!user){
        return res.status(404).json(
            new ApiResponse(404, null, "User not found.")
        );
    }
    res.status(200).json(
        new ApiResponse(200, user, "User profile fetched successfully.")
    );
   } catch (error) {
    res.status(500).json(
        new ApiResponse(500, null, "Server error. Unable to fetch user profile.")
    );
   }
})


export { createProfile,getUserProfile };
