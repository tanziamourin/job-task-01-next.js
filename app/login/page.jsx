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
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 ">
      <h1 className="text-5xl font-bold text-gray-600 dark:text-white">Login</h1>
      <p className="text-gray-600  dark:text-white">Sign in to continue</p>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-6 py-2 text-gray-600 bg-red-500 rounded-md dark:text-white hover:bg-red-600"
      >
        Continue with Google
      </button>

      {/* Test Credentials Login */}
      <button
        onClick={() =>
          signIn("credentials", {
            email: "test@test.com",
            password: "1234",
            redirect: true,
            callbackUrl: "/products",
          })
        }
        className="px-6 py-2 text-gray-600 bg-green-600 rounded-md dark:text-white hover:bg-green-700"
      >
        Login with Test Account
      </button>

      <p className="mt-4 text-sm text-gray-600 dark:text-white">
        (Use Google or the demo credentials to access protected pages)
      </p>
    </div>
  );
}
