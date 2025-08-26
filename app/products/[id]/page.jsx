// app/products/[id]/page.jsx
import Link from "next/link";
import  {connectDB}  from "../../../lib/mongodb";
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

  if (!product) return <p className="mt-10 text-center">Product not found</p>;

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white shadow-lg dark:bg-gray-900 rounded-xl">
      {/* Image Section */}
      <div className="relative w-full mb-6 h-72 md:h-96">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        {/* Title */}
        {product.title && (
          <h2 className="text-xl font-semibold text-blue-600 md:text-2xl dark:text-blue-400">
            {product.title}
          </h2>
        )}

        {/* Name */}
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {product.name}
        </h1>

        {/* Description */}
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
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
            <ul className="text-gray-700 list-disc list-inside dark:text-gray-300">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Suggestion (if available) */}
        {product.suggestion && (
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <p className="italic text-gray-600 dark:text-gray-300">
              💡 Suggestion: {product.suggestion}
            </p>
          </div>
        )}

        {/* go to home */}
        <Link className="px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          Go to home
        </Link>
      </div>
    </div>
  );
}
