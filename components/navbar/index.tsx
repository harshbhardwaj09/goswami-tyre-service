"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const NAV_ITEMS = ["Home", "About", "Products", "Services", "Contact"];
const OFFSET = -110;
const DURATION = 900;

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      for (const item of NAV_ITEMS) {
        const section = document.getElementsByName(item)[0];
        if (!section) continue;

        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 120 && bottom >= 120) {
          setActive(item);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (
    item: string,
    extraClasses = "",
    onClick: (() => void) & MouseEventHandler<HTMLButtonElement>,
  ) => (
    <ScrollLink
      key={item}
      to={item}
      smooth
      duration={DURATION}
      offset={OFFSET}
      onClick={onClick}
      className={`cursor-pointer transition-colors ${
        active === item ? "text-red-500" : "hover:text-red-500"
      } ${extraClasses}`}
    >
      {item}
    </ScrollLink>
  );

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 bg-black border-b-2 border-red-600 transition-shadow ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <ScrollLink
            to="Home"
            smooth
            duration={DURATION}
            offset={OFFSET}
            onClick={() => setActive("Home")}
            className="flex items-center pt-2.5 cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Goswami Tyres Logo"
              width={180}
              height={80}
              priority
              className="object-contain"
            />
          </ScrollLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 text-gray-200">
            {NAV_ITEMS.map((item) => renderLink(item, "", () => {}))}
          </div>

          <button className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Login
          </button>

          {/* HAMBURGER / CLOSE */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* OVERLAY (outside click closes menu) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-16 inset-x-0 z-50 md:hidden bg-black border-t border-red-600 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center px-6 py-8 text-gray-200">
          {NAV_ITEMS.map((item) =>
            renderLink(
              item,
              "w-full py-4 text-center border-b border-white/10",
              () => {
                setActive(item);
                setOpen(false);
              },
            ),
          )}
        </div>
      </div>
    </>
  );
}
