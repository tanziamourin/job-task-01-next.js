import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please add your MONGODB_URI to .env.local");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection error", err);
  }
};
