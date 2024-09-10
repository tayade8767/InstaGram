import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();


import {
    createProfile,
    getUserProfile,
} from '../controllers/profile.controller.js';

router.route("/:userId").put(verifyJWT, createProfile);
router.route("/:username").get(verifyJWT, getUserProfile);
 export default router;