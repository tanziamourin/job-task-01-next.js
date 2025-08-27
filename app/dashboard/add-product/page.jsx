"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    name: "",
    description: "",
    price: "",
    image: "",
    benefits: "",
    suggestion: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          benefits: form.benefits.split(",").map((b) => b.trim()),
        }),
      });

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        setForm({
          title: "",
          name: "",
          description: "",
          price: "",
          image: "",
          benefits: "",
          suggestion: "",
        });
        router.push("/products");
      } else {
        toast.error("❌ Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 ">
      {/* Top Text */}
      <div className="w-full max-w-3xl px-4 mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Add Your Product
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Fill out the form below and share your amazing product with the community.
        </p>
      </div>

      {/* Full Width Form */}
      <div className="w-full max-w-4xl p-8 bg-white shadow-2xl dark:bg-gray-800 md:p-12 rounded-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="benefits"
            placeholder="Benefits (comma separated)"
            value={form.benefits}
            onChange={handleChange}
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            name="suggestion"
            placeholder="Suggestion"
            value={form.suggestion}
            onChange={handleChange}
            className="w-full p-4 transition border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 text-lg font-bold text-white transition-transform duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 hover:shadow-xl"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
