export default async function ProductDetails({ params }) {
  const res = await fetch(`http://localhost:3000/api/products?id=${params.id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}
