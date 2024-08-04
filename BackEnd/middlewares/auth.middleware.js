const jwt = require("jsonwebtoken")
const ApiError = require("../Utils/ApiError.js");
const asyncHandler = require("../Utils/asyncHandler.js");

const User = require("../models/user.model.js");

const VerifyUserJWT= asyncHandler(async()=>{
    try {
        const token = req.cookie?.accessToken||req.header("Authorization")?.replace("Bearer ", "");
        if(!token){
            throw new ApiError("Not authorized, token is missing", 401);
        }
        const decodeToken =jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

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

module.exports = VerifyUserJWT;

