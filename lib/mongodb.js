// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) throw new Error("⚠️ Please add your MONGODB_URI to .env.local");

let client;
let clientPromise;

if (!global._mongoClient) {
  client = new MongoClient(uri, options);
  global._mongoClient = client;
  clientPromise = client.connect();
} else {
  client = global._mongoClient;
  clientPromise = client.connect();
}

export default clientPromise; // default export required for MongoDB Adapter
