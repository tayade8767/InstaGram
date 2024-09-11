import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app, httpServer } from "./app.js"; // Importing httpServer along with app

dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    httpServer.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
}).catch((err) => {
    console.error("MongoDB server connection failed:", err);
});
