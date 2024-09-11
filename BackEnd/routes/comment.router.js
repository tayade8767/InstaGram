import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();

import {
    addComment, 
    // updateComment,
    // deleteComment
} from '../controllers/comment.controller.js';

router.route('/pushcomment').post(verifyJWT,addComment);

// router.route('/update-comment/:commentId').patch(verifyJWT,updateComment);

// router.route('/delete-comment/:commentId').delete(verifyJWT,deleteComment);

export default router;