"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349030916494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FARUQ DIGITAL HUB on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-105 transition"
    >
      <FaWhatsapp className="text-3xl" />

      <span className="hidden sm:inline font-bold">
        Chat on WhatsApp
      </span>
    </a>
  );
}