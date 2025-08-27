"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/products");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 ">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Login</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">Sign in to continue</p>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-8 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg rounded-2xl bg-gradient-to-r from-red-400 to-pink-500 hover:from-pink-500 hover:to-red-400 hover:-translate-y-1 hover:scale-105"
      >
        Continue with Google
      </button>


      <p className="max-w-xs mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
        (Use Google or the demo credentials to access protected pages)
      </p>
    </div>
  );
}
