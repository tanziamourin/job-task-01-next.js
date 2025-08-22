"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Logo from "./../components/Logo";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const pathname = usePathname();

  // Check active route
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Button style: active shows gradient, inactive shows outline
  const buttonStyle = (active = false, extra = "", type = "primary") => {
    let base = `relative px-6 py-2 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${extra}`;
    
    if (type === "primary") {
      return active
        ? `${base} bg-gradient-to-r from-blue-600 to-indigo-600 text-white`
        : `${base} bg-transparent text-blue-600 dark:text-blue-400 border-2 border-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:text-white`;
    } else if (type === "red") {
      return active
        ? `${base} bg-red-700 text-white`
        : `${base} bg-transparent text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white`;
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 font-medium">
          <Link href="/" className={buttonStyle(isActive("/"))}>
            Home
          </Link>
          <Link href="/products" className={buttonStyle(isActive("/products"))}>
            Products
          </Link>

          {session ? (
            <div className="relative">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className={buttonStyle(isActive("/dashboard"), "flex items-center gap-2")}
              >
                Dashboard {dashboardOpen ? <HiX size={16} /> : <HiMenu size={16} />}
              </button>

              {dashboardOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-md shadow-lg flex flex-col gap-2 p-2">
                  <Link
                    href="/dashboard/add-product"
                    className={buttonStyle(isActive("/dashboard/add-product"), "text-sm py-2")}
                    onClick={() => setDashboardOpen(false)}
                  >
                    Add Product
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setDashboardOpen(false);
                    }}
                    className={buttonStyle(false, "text-sm py-2", "red")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className={buttonStyle(isActive("/login"), "", "red")}>
              Login
            </Link>
          )}
          <ThemeToggle></ThemeToggle>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 dark:text-gray-200"
          >
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-50 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200">
            <HiX size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 mt-4">
          <Link
            href="/"
            className={buttonStyle(isActive("/")) + " text-center"}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={buttonStyle(isActive("/products")) + " text-center"}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          {session ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className={buttonStyle(isActive("/dashboard")) + " flex justify-between items-center py-2"}
              >
                Dashboard {dashboardOpen ? <HiX size={16} /> : <HiMenu size={16} />}
              </button>

              {dashboardOpen && (
                <div className="flex flex-col gap-2 ml-4 mt-2">
                  <Link
                    href="/dashboard/add-product"
                    className={buttonStyle(isActive("/dashboard/add-product"), "text-sm py-2")}
                    onClick={() => setIsOpen(false)}
                  >
                    Add Product
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                      setDashboardOpen(false);
                    }}
                    className={buttonStyle(false, "text-sm py-2", "red")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className={buttonStyle(isActive("/login"), "", "red")}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </nav>
  );
}
