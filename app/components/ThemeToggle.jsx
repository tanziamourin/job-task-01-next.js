"use client";
import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 p-2 text-gray-800 transition-transform duration-300 bg-gray-200 rounded-full shadow-lg top-6 right-6 dark:bg-gray-700 dark:text-gray-200 hover:scale-110"
      title="Toggle Theme"
    >
      {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
}
