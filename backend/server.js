import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import MessageRoutes from "./routes/message.routes.js";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", MessageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
