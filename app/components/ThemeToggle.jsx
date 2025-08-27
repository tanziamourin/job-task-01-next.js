"use client";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-800 transition bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200 hover:scale-110"
      title="Toggle Theme"
    >
      {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
}
