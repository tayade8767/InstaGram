import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const { verifyJWT } = authMiddleware;

const router =Router();

import { 
    registerUser,
    loginUser,
    getcurrentuser,
    // logoutUser,
    userProfile,
    updateUserProfile,
    currentUser
    // refreshAccessToken,
    // changeUserPassword,
    // updateAccountDetails,
    // getUserProfile
 } from '../controllers/user.controller.js';

 console.log("use.router.js file for updating user profile");

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);//not use verity jwt this route
console.log("use.router.js file");
router.route('/profile/:username').get(verifyJWT,userProfile);//api/v1/users/profile


router.route('/currentuser').get(verifyJWT,currentUser);///currentuser

router.route('/update-profile/:username').patch(
    verifyJWT,
    upload.single("avatar"),
    updateUserProfile
);


router.route('/login').post(loginUser);
router.route('/me').get(verifyJWT,getcurrentuser);

// router.route('/logout').post(verifyJWT,logoutUser);
// router.route('/refresh-token').post(refreshAccessToken);
// router.route('/change-password').post(verifyJWT,changeUserPassword);
// router.route('/update-account').patch(verifyJWT,upload.single('avatar'),updateAccountDetails);
// router.route('/c/:username').get(verifyJWT,getUserProfile);


export default router;