import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router =Router();

import { 
    registerUser,
    // loginUser,
 } from '../controllers/user.controller.js';


router.route('/register').post(registerUser);

// router.route('/login').post(loginUser);

export default router;