import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  NextAuthProvider  from "./components/NextAuthProvider";
import "./globals.css";

export const metadata = {
  title: "Product App",
  description: "Next.js 15 app with authentication & products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
