import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("⚠️ Please add your MONGODB_URI to .env.local");

/** -------------------
 *  For Mongoose (Products API)
 * -------------------- */
let isConnected = false;
export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ MongoDB (Mongoose) connected");
  } catch (err) {
    console.error("❌ MongoDB connection error", err);
    throw err;
  }
};

/** -------------------
 *  For NextAuth Adapter (MongoClient)
 * -------------------- */
let client;
let clientPromise;

if (!global._mongoClient) {
  client = new MongoClient(MONGODB_URI);
  global._mongoClient = client;
  clientPromise = client.connect();
} else {
  client = global._mongoClient;
  clientPromise = client.connect();
}

export default clientPromise; // default export for NextAuth
