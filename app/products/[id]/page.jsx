// app/products/[id]/page.jsx
import { connectDB } from "../../../lib/mongodb";
import Product from "../../../models/Product";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  await connectDB();

  let product = null;
  try {
    product = await Product.findById(params.id).lean();
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl">
      {/* Image Section */}
      <div className="relative w-full h-72 md:h-96 mb-6">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        {/* Title */}
        {product.title && (
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
            {product.title}
          </h2>
        )}

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
          ${product.price}
        </p>

        {/* Benefits (if available) */}
        {product.benefits?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Benefits:
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Suggestion (if available) */}
        {product.suggestion && (
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="italic text-gray-600 dark:text-gray-300">
              💡 Suggestion: {product.suggestion}
            </p>
          </div>
        )}

        {/* Add to Cart */}
        {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
}
