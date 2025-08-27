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
    <section className="p-10 text-center transition-colors duration-300">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Highlights</h2>
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
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
          </div>
        ))}
      </div>
      <button
        onClick={() => router.push("/products")}
        className="px-6 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
      >
        View All Products
      </button>
    </section>
  );
}
