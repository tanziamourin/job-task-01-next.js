"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BestSellerCarousel() {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);
  const controls = useAnimation();

  // Fetch best seller products from API
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const bestSellers = data.filter((p) => p.isBestSeller).slice(0, 10);
        setProducts(bestSellers);
      });
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!products.length) return;

    let x = 0;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        x -= 2; // scroll speed
        if (Math.abs(x) >= carouselRef.current.scrollWidth / 2) x = 0; // loop
        carouselRef.current.style.transform = `translateX(${x}px)`;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [products]);

  if (!products.length) return null;

  // Duplicate products for seamless looping
  const loopProducts = [...products, ...products];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <h2 className="text-3xl font-bold text-center text-gray-900 md:text-4xl dark:text-white">
        Best Sellers
      </h2>

      <div className="relative mt-10 overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 whitespace-nowrap cursor-grab"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }} // temporary, drag allowed
        >
          {loopProducts.map((p, index) => (
            <div
              key={p._id + "-" + index}
              className="flex-shrink-0 transition-shadow duration-300 bg-white shadow-lg w-80 dark:bg-gray-800 rounded-3xl hover:shadow-xl"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                <Image
                  src={p.image || "/placeholder.png"}
                  alt={p.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {p.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">${p.price}</p>
                <Link
                  href={`/products/${p._id}`}
                  className="inline-block px-4 py-2 mt-3 text-white transition-all rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
