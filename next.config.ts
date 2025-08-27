import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional, ভালো practice
  images: {
    domains: ["images.unsplash.com"], // এখানে Unsplash এর domain allow করা হয়েছে
  },
  webpack: (config) => {
    // '@' কে project root হিসেবে alias করা
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
