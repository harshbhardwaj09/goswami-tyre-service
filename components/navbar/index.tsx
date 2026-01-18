"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Products", "Services", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 bg-black border-b-2 border-red-600 transition-shadow duration-300 ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="italic text-lg font-bold text-red-500">
            Goswami Tyres
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-gray-200">
            {NAV_ITEMS.map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-red-500 transition"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Desktop Login */}
          <button className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Login
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 inset-x-0 z-40 md:hidden bg-black border-t border-red-600 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center px-6 py-8 text-gray-200">
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className="w-full py-4 text-center border-b border-white/10 hover:text-red-500 transition cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {item}
            </span>
          ))}

          <button className="mt-6 bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 transition">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
