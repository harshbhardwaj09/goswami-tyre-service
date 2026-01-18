'use client'

import { useEffect, useState } from "react"

const Navbar = () => {
  const list = ["Home", "About", "Products", "Services", "Contact"]
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-black border-b-2 border-red-600
          transition-all duration-300
          ${scrolled ? "shadow-2xl" : ""}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="italic text-lg font-bold text-red-500">
            Goswami Tyre Services
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-gray-200">
            {list.map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-red-500 transition"
              >
                {item}
              </span>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <button className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Login
          </button>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-16 left-0 right-0 bg-black border-t border-red-600 z-40 md:hidden">
          <div className="flex flex-col text-gray-200 px-6 py-6 gap-6">
            {list.map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-red-500 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </span>
            ))}

            <button className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
