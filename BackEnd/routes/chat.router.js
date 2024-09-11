

import { Router } from 'express';
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;
import { 
    sendMessage,
    // getChatHistory,
    getallusersformessages,
 } from '../controllers/chat.controller.js';

const router = Router();

// Route to send a message
router.post('/send', verifyJWT, sendMessage);

//  Route to get chat history between two users
// router.get('/history/:selecteduserforchat', verifyJWT, getChatHistory);

router.get('/allusers',verifyJWT,getallusersformessages);

export default router;
