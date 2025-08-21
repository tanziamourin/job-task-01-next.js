"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login with Google
      </button>
      <button
        onClick={() =>
          signIn("credentials", {
            email: "test@test.com",
            password: "1234",
            callbackUrl: "/products",
          })
        }
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Login with Test Account
      </button>
    </div>
  );
}
