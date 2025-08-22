import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, 
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String }, 
    benefits: { type: [String] }, 
    suggestion: { type: String }, 
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
