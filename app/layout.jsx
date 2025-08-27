import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextAuthProvider from "./components/NextAuthProvider";

import "./globals.css";

export const metadata = {
  title: "Product App",
  description: "Next.js 15 app with authentication & products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-900 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <NextAuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
