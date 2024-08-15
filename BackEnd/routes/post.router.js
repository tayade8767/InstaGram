import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();


import {
    pushPost,
    fetchAllPosts,
} from '../controllers/post.controller.js'


router.route('/fetch').get(verifyJWT,fetchAllPosts);
router.route("/create").post(verifyJWT, upload.single("posts"), pushPost)

export default router;