import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',          // Your frontend URL
    credentials: true,
}))

app.use(express.json({limit: "32kb"}))
app.use(express.urlencoded({ extended:true,limit:"32kb" }))
app.use(express.static("public"))
app.use(cookieParser())
/*   for importing  files START   */

import UserRouter from './routes/user.router.js';

/*   for importing files END     */ 





/*   for defining routes START   */ 

console.log("app.js file")
app.use("/api/v1/users",UserRouter);
/*  fro defining routes END      */

export { app }