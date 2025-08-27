import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";
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
      <h1 className="my-16 mb-6 text-5xl font-bold text-center text-gray-900 dark:text-white">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-8 my-16 md:grid-cols-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="flex flex-col h-full overflow-hidden transition-all duration-300 shadow-md bg-gradient-to-tr from-pink-50 via-purple-50 to-indigo-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
          >
            {/* Product Image */}
            <div className="relative flex-shrink-0 w-full h-56">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name || "Product Image"}
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {p.name || "Unnamed Product"}
              </h2>
              <p className="flex-grow mt-2 text-gray-600 dark:text-gray-400">
                {p.description || "No description available."}
              </p>
              <p className="mt-3 text-lg font-bold text-pink-600 dark:text-pink-400">
                ${p.price ?? "N/A"}
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
    </div>
  );
}
