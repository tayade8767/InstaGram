import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',          // Your frontend URL
    credentials: true,
}));

app.use(express.json({limit: "32kb"}));
app.use(express.urlencoded({ extended:true,limit:"32kb" }));
app.use(express.static("public"));
app.use(cookieParser());

/*   for importing  files START   */


import UserRouter from './routes/user.router.js';
import PostRouter from './routes/post.router.js';
import LikeRouter from './routes/like.router.js';
import CommentRouter from './routes/comment.router.js';

/*   for importing files END     */ 




/*   for defining routes START   */ 

console.log("app.js file")

app.use("/api/v1/users",UserRouter);

app.use("/",PostRouter);               //   user all routes

app.use("/api/v1/posts",PostRouter);                //   like all routes

app.use("/api/v1/comment",CommentRouter);          //  comment all routes

/*  fro defining routes END      */

export { app }



