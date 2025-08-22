
import Image from "next/image";

export default async function ProductsPage() {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");

  const products = await res.json();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">✨ Products ✨</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-56">
              <Image
                src={p.image || "/placeholder.png"} 
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {p.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {p.description}
              </p>
              <p className="font-bold text-lg text-blue-600 dark:text-blue-400 mt-3">
                ${p.price}
              </p>

              <a
                href={`/products/${p._id}`}
                className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
