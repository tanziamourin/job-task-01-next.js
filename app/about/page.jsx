// app/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 ">
      <div className="flex flex-col items-center gap-12 px-6 mx-auto max-w-7xl md:flex-row">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="https://images.unsplash.com/photo-1511923199659-1c16881689de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Brand Story"
            width={600}
            height={400}
            className="object-cover shadow-2xl rounded-2xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center md:w-1/2 md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Story & Mission
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            At <span className="font-semibold text-pink-500">May Cosmetics</span>, we believe that beauty should be gentle — on your skin and on the planet. Our journey started with a simple idea: create high-quality skincare and cosmetics that are cruelty-free, eco-friendly, and infused with natural ingredients.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is to empower you to glow confidently while making responsible choices. From sustainable packaging to ethically sourced ingredients, we care about every step in our process.
          </p>

          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-start">
            <div className="flex-1 p-4 bg-pink-100 shadow-lg dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400">Eco-Friendly</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Our products are sustainably packaged and cruelty-free, supporting a healthier planet.
              </p>
            </div>

            <div className="flex-1 p-4 bg-pink-100 shadow-lg dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400">Natural Ingredients</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                We carefully select organic and natural ingredients for skin-friendly and effective products.
              </p>
            </div>

            <div className="flex-1 p-4 bg-pink-100 shadow-lg dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400">Our Mission</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Deliver premium beauty products that inspire confidence while respecting nature.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
