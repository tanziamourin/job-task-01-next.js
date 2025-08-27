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
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 4))); // top 3 products
  }, []);

  return (
    <section className="p-10 mx-auto text-center transition-colors duration-300 max-w-7xl">
      <h2 className="my-16 mb-6 text-5xl font-bold text-gray-900 dark:text-white">Highlights</h2>
      <div className="grid grid-cols-1 gap-6 my-16 mb-6 md:grid-cols-4">
        {products.map(p => (
          <div
            key={p._id}
            className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800 hover:shadow-xl"
          >
            <div className="relative w-full h-56 mb-4">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">{p.name}</h3>
            <p className="font-medium text-gray-600 dark:text-gray-300">${p.price}</p>
             <Link
                href={`/products/${p._id}`}
                className="inline-block px-5 py-2 mt-4 text-white transition-colors rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 hover:-translate-y-1 "
              >
                View Details
              </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() => router.push("/products")}
        className="px-6 py-2 mt-16 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
      >
        View All Products
      </button>
    </section>
  );
}
