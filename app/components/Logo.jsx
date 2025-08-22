// Logo.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ }) {
  return (
    <Link href="/">
      <Image
        src="/logo/logo.png"
        alt="ShopEase Logo"
        className="pb-0 "
         width={110}    // required
        height={50} 
        priority
      />
    </Link>
  );
}
