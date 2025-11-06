import express from "express";
import dotenv from "dotenv";
import "colors";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import appointmentRoutes from "./routes/appointmentRoutes.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected".bgGreen.white);
  } catch (error) {
    console.log(`❌ MongoDB Connection Error: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};
connectDB();

// Base API Test Route
app.get("/", (req, res) => {
  res.send("<h1>✅ Node Server Running Successfully</h1>");
});

// API Routes
app.use("/api/v1/appointments", appointmentRoutes);

// Port Config
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(
    `🚀 Server Running in ${process.env.NODE_ENV} Mode on Port ${PORT}`.bgCyan.white
  );
});
