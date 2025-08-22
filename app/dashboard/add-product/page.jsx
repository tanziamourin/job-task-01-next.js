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
          benefits: form.benefits.split(","),
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center px-8 py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h1 className="text-4xl font-bold mb-4">Add a New Product</h1>
          <p className="text-lg opacity-90">
            Fill out the form and add your product to the platform. Make sure all
            details are correct before submitting.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="px-8 py-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="text"
              name="benefits"
              placeholder="Benefits (comma separated)"
              value={form.benefits}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <textarea
              name="suggestion"
              placeholder="Suggestion"
              value={form.suggestion}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />

            {/* Hero-style Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
