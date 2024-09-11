import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',          
    credentials: true,
}));

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

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

import chatRouter from './routes/chat.router.js'


/*   for importing files END     */ 




/*   for defining routes START   */ 

console.log("app.js file")

app.use("/api/v1/users",UserRouter);//api/v1/users/profile  http://localhost:3000/api/v1/users/currentuser

// app.use("/api/v1/posts",PostRouter);               //   user all routes

app.use("/api/v1/posts",PostRouter);                //   like all routes

app.use("/api/v1/comment",CommentRouter);          //  comment all routes
 

app.use("/api/autocomplete",SearchRouter);


// app.use("/api/profile",Profile)

app.use("/api/autocomplete",SearchRouter);       // search all routes

app.use("/api/v1/chat", chatRouter);            // chat all routes



/*  fro defining routes END      */



/*    start of the chat app server code      */

const users = {}; // Object to store users and their socket IDs

io.on('connection', (socket) => {
  socket.on('user_connected', (userId) => {
    console.log("New User Connected:", userId);
    users[userId] = socket.id;
    console.log(`User connected: ${userId}, Socket ID: ${socket.id}`);
    io.emit('user_status_change', { userId, status: 'online' });
  });

  socket.on('private_message', ({ message, senderId, receiverId }) => {
    console.log(`Private message from ${senderId} to ${receiverId}: ${message}`);
    const receiverSocketId = users[receiverId];
    if (receiverSocketId) {
      // Send to the receiver
      io.to(receiverSocketId).emit('receive_private_message', {
        message,
        senderId,
        receiverId
      });
      // Send acknowledgment back to the sender
      socket.emit('message_sent', {
        message,
        senderId,
        receiverId
      });
    } else {
      socket.emit('message_error', { error: 'User is not online', receiverId });
    }
  });

  socket.on('disconnect', () => {
    const disconnectedUserId = Object.keys(users).find(key => users[key] === socket.id);
    if (disconnectedUserId) {
      delete users[disconnectedUserId];
      console.log(`User disconnected: ${disconnectedUserId}`);
      io.emit('user_status_change', { userId: disconnectedUserId, status: 'offline' });
    }
  });
});

/*    end of the chat app server code       */

export { app,httpServer }



