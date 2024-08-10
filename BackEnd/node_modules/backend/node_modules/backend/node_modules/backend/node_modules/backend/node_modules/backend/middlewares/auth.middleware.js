import jwt  from "jsonwebtoken";
import {ApiError} from "../Utils/ApiError.js";
import {asyncHandler} from "../Utils/asyncHandler.js";

import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        console.log("inside verify jwt middleware");

        // Access token from cookies or Authorization header
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        console.log("Cookies:", req.cookies);  // This will log all the cookies sent in the request

        if (!token) {
            throw new ApiError("Not authorized, token is missing", 401);
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError("User not found", 404);
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        throw new ApiError(401, "Invalid access token");
    }
});


export default { verifyJWT };

