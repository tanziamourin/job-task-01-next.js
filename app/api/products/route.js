// app/api/products/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Product from "../../../models/Product";

// ✅ GET: Fetch all products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("❌ GET /products error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ✅ POST: Add a new product
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newProduct = await Product.create(body);
    return NextResponse.json(
      { message: "✅ Product added successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ POST /products error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
