import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware';
import {verifyJWT} from '../middlewares/auth.middleware';

const router = Router();


import {
    pushPost
} from '../controllers/post.controller'




router.route("/create").post(verifyJWT, upload.single("posts"), pushPost)


export default router;