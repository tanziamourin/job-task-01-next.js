"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Shopping bags"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg">
          Welcome to <span className="text-blue-600">ShopEase</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          Discover amazing products with exclusive deals and fast delivery 🚀
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <Link
            href="/products"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
