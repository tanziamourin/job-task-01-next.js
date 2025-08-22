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
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="text-gray-600">Sign in to continue</p>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
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
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Login with Test Account
      </button>

      <p className="text-sm text-gray-500 mt-4">
        (Use Google or the demo credentials to access protected pages)
      </p>
    </div>
  );
}
