import Link from "next/link";
import Image from "next/image";
import { connectDB } from "../../../lib/mongodb";
import Product from "../../../models/Product";
import mongoose from "mongoose";

export default async function ProductDetailsPage({ params }) {
  await connectDB();

  const { id } = params;

  // ✅ ID Validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return <p className="mt-10 text-center text-red-500">❌ Invalid Product ID</p>;
  }

  let product = null;
  try {
    product = await Product.findById(id).lean();

    // ❗️ convert _id properly, otherwise Next.js serialization error হতে পারে
    if (product) {
      product._id = product._id.toString();
    }
  } catch (error) {
    console.error("Error fetching product:", error.message);
    return (
      <p className="mt-10 text-center text-red-500">
        ⚠️ Failed to fetch product. Please try again later.
      </p>
    );
  }

  if (!product) {
    return (
      <p className="mt-10 text-center text-gray-700 dark:text-gray-300">
        Product not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white shadow-lg dark:bg-gray-900 rounded-xl">
      {/* Image Section */}
      <div className="relative w-full mb-6 h-72 md:h-96">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name || "Product Image"}
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        {product.title && (
          <h2 className="text-xl font-semibold text-blue-600 md:text-2xl dark:text-blue-400">
            {product.title}
          </h2>
        )}

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {product.name || "Unnamed Product"}
        </h1>

        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          {product.description || "No description available."}
        </p>

        <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
          ${product.price ?? "N/A"}
        </p>

        {product.benefits?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Benefits:
            </h3>
            <ul className="text-gray-700 list-disc list-inside dark:text-gray-300">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {product.suggestion && (
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <p className="italic text-gray-600 dark:text-gray-300">
              💡 Suggestion: {product.suggestion}
            </p>
          </div>
        )}

        <Link
          href="/"
          className="px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
