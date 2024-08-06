import jwt  from "jsonwebtoken";
import {ApiError} from "../Utils/ApiError.js";
import {asyncHandler} from "../Utils/asyncHandler.js";

import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async()=>{
    try {
        const token = req.cookie?.accessToken||req.header("Authorization")?.replace("Bearer ", "");
        if(!token){
            throw new ApiError("Not authorized, token is missing", 401);
        }
        const decodeToken =verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodeToken?._id)
        .select("-password -refreshToken")
        if(!user){
            throw new ApiError("User not found", 404);
        }
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401,"Invalid access token");
    }
})

export default { verifyJWT };

