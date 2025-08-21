import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div className="p-6">You must <a href="/login" className="underline">login</a> first</div>;
  }

  return (
    <form action="/api/products" method="POST" className="p-6 flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Add New Product</h1>
      <input type="text" name="name" placeholder="Product name" required className="border p-2" />
      <textarea name="description" placeholder="Description" className="border p-2"></textarea>
      <input type="number" name="price" placeholder="Price" required className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Product</button>
    </form>
  );
}
