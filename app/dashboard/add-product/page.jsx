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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="flex flex-col items-center min-h-screen p-6 transition-colors duration-500 bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Top Text */}
      <div className="w-full max-w-3xl px-4 mb-10 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
          Add Your Product
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Share your amazing cosmetic product with the community by filling out the form below.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-4xl p-8 shadow-2xl bg-gradient-to-tr from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {[
            { name: "title", placeholder: "Product Title" },
            { name: "name", placeholder: "Product Name" },
            { name: "description", placeholder: "Description", type: "textarea" },
            { name: "price", placeholder: "Price", type: "number" },
            { name: "image", placeholder: "Image URL" },
            { name: "benefits", placeholder: "Benefits (comma separated)" },
            { name: "suggestion", placeholder: "Suggestion", type: "textarea" },
          ].map((field) =>
            field.type === "textarea" ? (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full p-4 transition bg-white border shadow-sm rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            ) : (
              <input
                key={field.name}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full p-4 transition bg-white border shadow-sm rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            )
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 text-lg font-bold text-white transition-transform duration-300 shadow-lg rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 hover:shadow-xl"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
