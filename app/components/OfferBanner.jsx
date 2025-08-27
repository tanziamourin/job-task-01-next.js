// app/components/OfferBanner.jsx
"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-3 text-white shadow-md bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-600 dark:to-purple-700"
    >
 <div className="flex items-center justify-between mx-auto max-w-7xl">
         {/* Offer Text */}
      <p className="text-sm font-medium md:text-base">
        🌸 Limited Time: Get <span className="font-bold">30% OFF</span> on all skincare products!
      </p>

      {/* CTA + Close */}
      <div className="flex items-center gap-4">
        <Link
          href="/products"
          className="bg-white text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all"
        >
          Shop Now
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="p-1 transition-all rounded-full hover:bg-white/20"
        >
          <X size={18} />
        </button>
      </div>
 </div>
    </motion.div>
  );
}
