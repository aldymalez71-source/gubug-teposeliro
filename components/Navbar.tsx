"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#hero", id: "hero" },
  { label: "Tentang", href: "#about", id: "about" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "Galeri", href: "#gallery", id: "gallery" },
  { label: "Kontak", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1
            className={`text-2xl font-bold transition-colors duration-500 ${
              scrolled ? "text-amber-700" : "text-white"
            }`}
          >
            Gubug Teposeliro
          </h1>

          <p
            className={`text-xs transition-colors duration-500 ${
              scrolled ? "text-gray-500" : "text-gray-200"
            }`}
          >
            Guyub ing Rasa, Tepo ing Ati.
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-amber-500"
                      : scrolled
                      ? "text-gray-700 hover:text-amber-700"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol WA Desktop */}
        <a
          href="https://wa.me/6281245682002"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-lg bg-amber-700 px-5 py-2 text-white transition hover:bg-amber-800"
        >
          Pesan Sekarang
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition ${
            scrolled ? "text-amber-700" : "text-white"
          }`}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 border-b transition ${
                activeSection === item.id
                  ? "bg-amber-100 text-amber-700 font-semibold"
                  : "hover:bg-amber-50"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/6281245682002"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 py-4 text-center font-semibold text-white hover:bg-green-700"
          >
            🟢 Pesan via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}