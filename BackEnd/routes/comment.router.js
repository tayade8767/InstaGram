import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();

import {
    addComment, 
    updateComment,
    deleteComment
} from '../controllers/comment.controller.js';

router.route('/write-comment/:imagevideoId').post(verifyJWT,addComment);

router.route('/update-comment/:commentId').patch(verifyJWT,updateComment);

router.route('/delete-comment/:commentId').delete(verifyJWT,deleteComment);

export default router;