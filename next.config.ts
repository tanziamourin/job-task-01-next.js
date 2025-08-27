import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ["images.unsplash.com" ,  "i.ibb.co" , "plus.unsplash.com"], // এখানে Unsplash এর domain allow করা হয়েছে
  },
  webpack: (config) => {

    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
