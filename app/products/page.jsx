export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  const products = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <h2 className="text-xl">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            <a href={`/products/${p.id}`} className="text-blue-600 underline">
              Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
