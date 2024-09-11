// controllers/chat.controller.js
import  Chat  from '../models/messages.model.js';  
import { User } from '../models/user.model.js';

// import { User } from '../models/user.model';
import { ApiError } from '../Utils/ApiError.js';
import { asyncHandler } from '../Utils/asyncHandler.js';
import { ApiResponse } from '../Utils/ApiResponse.js';

const sendMessage = asyncHandler(async (req, res) => {
  const { receiverId, message } = req.body;
  const senderId = req.user.id; 

  const chatMessage = await Chat.create({
    sender: senderId,
    receiver: receiverId,
    message,
  });

  // const sender = await User.findById(senderId).select("-password");

  return res
        .status(200)
        .json(
            new ApiResponse(200, 
              chatMessage,
                "User logged in successfully"
            )
        );
});

// const getChatHistory = asyncHandler(async (req, res) => {
//   const { selecteduserforchat } = req.params;
//   const senderId = req.user.id;
//   console.log(selecteduserforchat);
//   console.log(senderId);
//   const chats = await Chat.find({
//     $or: [
//       { sender: senderId, receiver: selecteduserforchat },
//       // { sender: selecteduserforchat, receiver: senderId },
//     ],
//   }).sort('timestamp');

//   return res
//         .status(200)
//         .json(
//             new ApiResponse(200, 
//               chats,
//                 "User logged in successfully"
//             )
//         );
// });

const getallusersformessages = asyncHandler(async (req, res) => {

  // console.log("enter in this");
  
  const getallusers = await User.find().select("-password");


  if(!getallusers) {
     throw new ApiError(400, 'User not found');
  }

  return res
        .status(200)
        .json(
            new ApiResponse(200, 
              getallusers,
                "User logged in successfully"
            )
        );

});

export {
    sendMessage,
    // getChatHistory,
    getallusersformessages
}
