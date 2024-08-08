import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();


import {
    pushPost,
    fetchAllPosts,
} from '../controllers/post.controller.js'


router.route('/create').post(verifyJWT,pushPost);

router.route('/').get(verifyJWT,fetchAllPosts);

export default router;