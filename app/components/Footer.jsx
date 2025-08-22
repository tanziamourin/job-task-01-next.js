export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:items-start gap-8">
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-green-600 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/dashboard/add-product" className="hover:text-green-600 transition">
                Add Product
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-green-600 transition">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: support@productapp.com</li>
            <li>Phone: +880 1700000000</li>
            <li>Address: Sylhet, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-6"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-gray-600">
        © 2025 Product App. All rights reserved.
      </div>
    </footer>
  );
}
