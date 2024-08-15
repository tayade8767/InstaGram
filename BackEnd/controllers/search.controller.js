import {User} from "../models/user.model.js"
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";

const findUser = asyncHandler(async(req,res,next)=>{
     try {
        const query =req.query.q;
        if(!query){
            return res.json([]);
        }
        const users = await User.find({
            username: { $regex: `^${query}`, $options: 'i' } 
          }).limit(10); 
      
    const usernames = users.map(user => user.username);
          res.json(usernames);
     } catch (error) { 
        res.status(500).json( new ApiResponse(200,{message: error},"error"));
     }
})

export {findUser}