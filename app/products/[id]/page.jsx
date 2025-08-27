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
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-pink-200">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-start w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-pink-600 dark:text-pink-400">{product.name}</h1>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {product.description}
          </p>

          <p className="mt-6 text-2xl font-bold text-purple-600 dark:text-purple-400">
            ${product.price}
          </p>

          {/* Benefits */}
          {product.benefits?.length > 0 && (
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
              {product.benefits.map((b, i) => (
                <li key={i} className="before:text-pink-400">{b}</li>
              ))}
            </ul>
          )}

          {/* Suggestion */}
          {product.suggestion && (
            <div className="p-4 mt-6 font-medium text-pink-700 border border-pink-200 rounded-lg bg-pink-50 dark:bg-pink-900 dark:border-pink-700 dark:text-pink-300">
              💡 {product.suggestion}
            </div>
          )}

          {/* Back Button */}
          <Link
            href="/"
            className="px-6 py-3 mt-8 font-semibold text-center text-white transition-all duration-300 transform shadow-lg rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 hover:-translate-y-1 hover:scale-105"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
