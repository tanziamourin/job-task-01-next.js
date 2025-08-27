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
    <div className="p-6 mx-auto mt-10 max-w-7xl">
      <div className="flex flex-col gap-16 md:flex-row">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[400px] flex-shrink-0">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-start w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{product.description}</p>
          <p className="mt-4 text-xl font-semibold text-blue-600">${product.price}</p>

          {product.benefits?.length > 0 && (
            <ul className="mt-4 text-gray-700 list-disc list-inside dark:text-gray-300">
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

          <Link href="/" className="px-5 py-4 mt-6 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 hover:-translate-y-1 hover:scale-105">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
