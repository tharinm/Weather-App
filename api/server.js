import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

//localhost:3000
http: app.use(
  cors({ origin: "https://weather-f.onrender.com", credentials: true })
);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/auth", userRoutes);

app.listen(8000, () => {
  connect();
  console.log("Server is running !");
});
