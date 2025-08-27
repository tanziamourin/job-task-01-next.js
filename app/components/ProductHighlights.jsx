"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4))); // top 4 products
  }, []);

  return (
    <section className="p-10 mx-auto text-center transition-colors duration-300 max-w-7xl">
      <h2 className="my-16 mb-6 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
        Highlights
      </h2>

      <div className="grid grid-cols-1 gap-6 my-16 md:grid-cols-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="flex flex-col h-full overflow-hidden transition-all duration-300 shadow-md bg-gradient-to-tr from-pink-50 via-purple-50 to-indigo-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
          >
            {/* Product Image */}
            <div className="relative flex-shrink-0 w-full h-56">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow p-4 text-center">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {p.name}
              </h3>
              <p className="flex-grow mt-2 text-gray-600 dark:text-gray-400">
                {p.description || "No description available."}
              </p>
              <p className="mt-3 text-lg font-bold text-pink-600 dark:text-pink-400">
                ${p.price}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/products/${p._id}`}
                  className="inline-block px-5 py-2 mt-4 font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 hover:-translate-y-1"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push("/products")}
        className="px-6 py-3 mt-16 font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 hover:-translate-y-1"
      >
        View All Products
      </button>
    </section>
  );
}
