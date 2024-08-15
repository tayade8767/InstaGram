import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router = Router();
import { findUser } from '../controllers/search.controller.js';


router.route('/search').get(findUser);


export default router;