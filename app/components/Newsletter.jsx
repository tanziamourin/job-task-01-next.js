"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);
  const [buttonParticles, setButtonParticles] = useState([]);

  useEffect(() => {
    setMounted(true);

    // Generate sparkle positions after client mounts
    setParticles(
      Array.from({ length: 12 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
      }))
    );

    setButtonParticles(
      Array.from({ length: 5 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
      }))
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing! 🌸");
    setEmail("");
  };

  return (
    <section className="relative w-full py-20 overflow-hidden transition-all duration-500 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-3xl">
      {/* Background Sparkles */}
      {mounted && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-sparkle"
              style={{ top: p.top, left: p.left, animationDelay: p.delay }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center text-gray-900 dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-3xl font-bold md:text-5xl"
        >
          Stay in the Glow ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-lg opacity-90"
        >
          Subscribe to get exclusive offers, beauty tips, and the latest product launches.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 text-gray-900 bg-white border border-gray-300 shadow-sm outline-none sm:w-2/3 rounded-3xl focus:ring-2 focus:ring-pink-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
          />

          <button
            type="submit"
            className="relative px-8 py-3 font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl hover:from-purple-400 hover:to-pink-400 hover:scale-105"
          >
            Subscribe
            {/* Sparkles on button */}
            {mounted &&
              buttonParticles.map((p, i) => (
                <span
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-sparkle"
                  style={{ top: p.top, left: p.left, animationDelay: p.delay }}
                />
              ))}
          </button>
        </motion.form>

        <p className="mt-4 text-sm opacity-80">
          We respect your privacy. No spam, just beauty. 🌹
        </p>
      </div>

      <Toaster position="top-right" reverseOrder={false} />

      <style jsx>{`
        @keyframes sparkle {
          0%, 100% {
            transform: scale(0.8) translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2) translateY(-5px);
            opacity: 1;
          }
        }
        .animate-sparkle {
          animation: sparkle 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
