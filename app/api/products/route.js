import { connectDB } from "../../../lib/mongodb";
import Product from "../../../models/Product";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("❌ GET /products error:", error);
    return new Response("Server Error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newProduct = await Product.create(body);
    return new Response(JSON.stringify({ message: "✅ Product added successfully", product: newProduct }), { status: 201 });
  } catch (error) {
    console.error("❌ POST /products error:", error);
    return new Response("Server Error", { status: 500 });
  }
}
