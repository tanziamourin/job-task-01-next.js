"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Hero() {
  const { data: session } = useSession();

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-tr from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>

      <div className="relative grid items-center grid-cols-1 gap-10 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Content */}
        <div className="z-10 text-center md:text-left">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl dark:text-white">
            Explore <span className="text-pink-500 dark:text-pink-400">ShopEase</span>  
            <span className="block mt-2 text-purple-500 dark:text-purple-400">Your Cosmetic Wonderland</span>
          </h1>
          <p className="max-w-lg mx-auto mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300 md:mx-0">
            Discover top-quality products, exclusive deals, and lightning-fast delivery. Make shopping a delightful experience.
          </p>

          <div className="flex justify-center gap-4 md:justify-start">
            <Link
              href={session ? "/dashboard/add-product" : "/login"}
              className="relative px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-pink-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 hover:-translate-y-1 hover:scale-105"
            >
              {session ? "Add Your Product" : "Get Started"}
              <span className="absolute w-0 h-1 transition-all duration-300 transform -translate-x-1/2 bg-white rounded-full -bottom-1 left-1/2 group-hover:w-3/4"></span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-80 md:h-[500px] w-full z-10">
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-200 via-purple-200 to-indigo-200 opacity-40 rounded-xl"></div>
          <Image
            src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="E-commerce products"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover shadow-2xl rounded-xl ring-1 ring-gray-200 dark:ring-gray-700"
            priority
          />
        </div>
      </div>
    </section>
  );
}
