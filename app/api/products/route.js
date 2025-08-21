let products = [
  { id: "1", name: "Laptop", description: "Good laptop", price: 1000 },
  { id: "2", name: "Phone", description: "Smartphone", price: 500 },
];

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (id) {
    const product = products.find((p) => p.id === id);
    return Response.json(product);
  }
  return Response.json(products);
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = { id: Date.now().toString(), ...body };
  products.push(newProduct);
  return Response.json(newProduct);
}
