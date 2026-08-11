"use client";

import { useState } from "react";
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/Logo.png"
            alt="FARUQ DIGITAL HUB Logo"
            className="w-12 h-12 object-contain"
          />

          <span className="text-xl font-bold">
            FARUQ DIGITAL HUB
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a
            href="/"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaHome /> Home
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaServicestack /> Services
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaInfoCircle /> About
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaPhone /> Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">

          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaHome /> Home
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaServicestack /> Services
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaInfoCircle /> About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaPhone /> Contact
          </a>

        </div>
      )}
    </nav>
  );
}