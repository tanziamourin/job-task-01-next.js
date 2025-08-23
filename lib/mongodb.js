import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("⚠️ Please add your MONGODB_URI to .env.local");
}

let client = global._mongoClient;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, options);
  global._mongoClient = client;
  clientPromise = client.connect();
} else {
  clientPromise = global._mongoClient.connect();
}

export default clientPromise;
