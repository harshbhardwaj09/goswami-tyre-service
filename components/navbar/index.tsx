'use client'

import { useEffect, useState } from "react"
import NavButton from "./NavButton"

const Navbar = () => {
  const list = ["Home", "About", "Products", "Services", "Contact"]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-4 left-0 right-0 z-50
        mx-4
        bg-white
        border border-gray-300
        rounded-xl
        transition-all duration-300
        ${scrolled ? "shadow-lg translate-y-0" : "shadow-md -translate-y-1"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="italic text-lg font-bold text-gray-800">
          Goswami Tyre Services
        </h1>

        <div className="hidden md:flex gap-6 text-gray-600">
      {list.map((item) => <NavButton key={item} buttonText={item} />)}
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
