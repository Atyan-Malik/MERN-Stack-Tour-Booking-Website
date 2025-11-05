import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/Route.js";
import userRoute from "./routes/User.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/Review.js";
import bookingRoute from "./routes/Booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
  credentials: true,
};

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("database connected");
  } catch (err) {
    console.log("database not connected", err);
  }
};

//middlewares

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log(`server is running on ${port}`);
});
