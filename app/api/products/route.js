import { connectDB } from "../../../lib/mongodb";
import Product from "../../../models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find({});
  return Response.json(products);
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newProduct = await Product.create(body);

    return Response.json(
      { message: "✅ Product added successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error creating product:", error);
    return new Response("Server Error", { status: 500 });
  }
}
