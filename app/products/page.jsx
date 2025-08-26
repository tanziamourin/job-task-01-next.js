import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

  let products = [];
  try {
    const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch products");
    products = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (products.length === 0) {
    return (
      <p className="mt-10 text-center text-red-500">
        No products found or failed to fetch products.
      </p>
    );
  }

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-center">✨ Products ✨</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p._id}
            className="overflow-hidden transition-shadow duration-300 bg-white shadow-md dark:bg-gray-900 rounded-2xl hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative w-full h-56">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name || "Product Image"}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {p.name || "Unnamed Product"}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {p.description || "No description available."}
              </p>
              <p className="mt-3 text-lg font-bold text-blue-600 dark:text-blue-400">
                ${p.price ?? "N/A"}
              </p>

              <Link
                href={`/products/${p._id}`}
                className="inline-block px-5 py-2 mt-4 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
