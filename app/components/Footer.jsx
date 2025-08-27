import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 mt-16 text-gray-800 shadow-inner bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-gray-200">
      <div className="gap-12 px-4 mx-auto max-w-7xl md:flex md:justify-between md:items-start">
        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-xl font-bold text-pink-600 dark:text-pink-400">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                Products
              </a>
            </li>
            <li>
              <a href="/dashboard/add-product" className="transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                Add Product
              </a>
            </li>
            <li>
              <a href="/login" className="transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-pink-600 dark:text-pink-400">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@productapp.com" className="hover:underline">support@productapp.com</a></li>
            <li>Phone: <a href="tel:+8801700000000" className="hover:underline">+880 1700000000</a></li>
            <li>Address: Sylhet, Bangladesh</li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-pink-600 transition bg-pink-100 rounded-full dark:bg-gray-700 dark:text-pink-400 hover:bg-pink-300 dark:hover:bg-gray-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-500 transition bg-pink-100 rounded-full dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-600">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-pink-500 transition bg-pink-100 rounded-full dark:bg-gray-700 dark:text-pink-400 hover:bg-pink-300 dark:hover:bg-gray-600">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-700 transition bg-pink-100 rounded-full dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-300 dark:hover:bg-gray-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-300 dark:border-gray-700"></div>

      {/* Copyright */}
      <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        © 2025 Product App. All rights reserved.
      </div>
    </footer>
  );
}
