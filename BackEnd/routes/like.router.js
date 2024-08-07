import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();

import {
    toggleCommentLike,
    toggleimageVideoLike,
} from '../controllers/like.controller.js';

router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/v/:videoId").post(toggleimageVideoLike);

export default router;