"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation"; // ✅ Next.js 15 path hook

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ এখনকার active path

  // Active + Hover link style
  const linkClass = (href) =>
    `relative transition-colors duration-300 ${
      pathname === href ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
    } 
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 
     ${pathname === href ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-green-600">
          ShopEase 🛒
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className={linkClass("/dashboard/add-product")}
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`px-4 py-2 rounded-lg transition ${
                pathname === "/login"
                  ? "bg-green-700 text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 bg-gray-50 px-4 py-3 border-t shadow-sm">
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className={linkClass("/dashboard/add-product")}
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`px-4 py-2 rounded-lg transition ${
                pathname === "/login"
                  ? "bg-green-700 text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
