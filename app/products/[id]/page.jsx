import Image from "next/image";
import Link from "next/link";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export default async function ProductDetailsPage({ params }) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return <p className="mt-10 text-center text-red-500">Invalid Product ID</p>;
  }

  const product = await Product.findById(params.id).lean();

  if (!product) {
    return <p className="mt-10 text-center text-gray-500">Product not found</p>;
  }

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <div className="relative w-full mb-6 h-80">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
      <p className="mt-2 text-xl font-semibold text-blue-600">
        ${product.price}
      </p>

      {product.benefits?.length > 0 && (
        <ul className="mt-4 list-disc list-inside">
          {product.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {product.suggestion && (
        <div className="p-3 mt-4 bg-gray-100 rounded-md dark:bg-gray-800">
          💡 {product.suggestion}
        </div>
      )}

      <Link href="/" className="inline-block mt-6 text-blue-600 underline">
        ⬅ Back to Home
      </Link>
    </div>
  );
}
