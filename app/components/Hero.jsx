"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Hero() {
  const { data: session } = useSession(); // Check login session

  return (
    <section className="overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto gap-10 px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Explore <span className="text-blue-600 dark:text-blue-400">ShopEase</span>  
            <span className="block text-indigo-600 dark:text-indigo-400 mt-2">Your Cosmetic Wonderland</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Discover top-quality products, exclusive deals, and lightning-fast delivery. Make shopping a delightful experience.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href={session ? "/dashboard/add-product" : "/login"}
              className="relative px-8 py-4 font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              {session ? "Add Your Product" : "Get Started"}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-full transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-80 md:h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="E-commerce products"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700"
            priority
          />
        </div>
      </div>
    </section>
  );
}
