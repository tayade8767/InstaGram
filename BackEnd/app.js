import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',          
    credentials: true,
}));

app.use(express.json({limit: "32kb"}));
app.use(express.urlencoded({ extended:true,limit:"32kb" }));
app.use(express.static("public"));
app.use(cookieParser());




import UserRouter from './routes/user.router.js';
import PostRouter from './routes/post.router.js';
import LikeRouter from './routes/like.router.js';
import CommentRouter from './routes/comment.router.js';
import SearchRouter from './routes/search.router.js';
// import Profile from './routes/profile.router.js'
import userprofile  from './routes/user.router.js';
/*   for importing files END     */ 




/*   for defining routes START   */ 

console.log("app.js file")

app.use("/api/v1/users",UserRouter);//api/v1/users/profile  http://localhost:3000/api/v1/users/currentuser

// app.use("/api/v1/posts",PostRouter);               //   user all routes

app.use("/api/v1/posts",PostRouter);                //   like all routes

app.use("/api/v1/comment",CommentRouter);          //  comment all routes
 
app.use("/api/autocomplete",SearchRouter);


// app.use("/api/profile",Profile)


/*  fro defining routes END      */

export { app }



