"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <html lang="en" className={inter.className}>
      <body className="transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
          <nav className="space-x-4">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#awards">Awards</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </header>
        <main className="p-4 md:p-8 max-w-4xl mx-auto scroll-smooth">{children}</main>
      </body>
    </html>
  );
}
