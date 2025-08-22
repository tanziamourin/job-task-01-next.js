"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 3))); // top 3 products
  }, []);

  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900 text-center transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {products.map(p => (
          <div
            key={p._id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative w-full h-56 mb-4">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{p.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">${p.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => router.push("/products")}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        View All Products
      </button>
    </section>
  );
}
