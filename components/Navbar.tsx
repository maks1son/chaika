"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { label: "О гостинице", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(12,53,61,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-18 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <SeagullMark
            className={`h-7 w-7 transition-colors ${
              scrolled ? "text-teal" : "text-ivory"
            }`}
          />
          <span
            className={`font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-[0.2em] transition-colors ${
              scrolled ? "text-petrol-deep" : "text-ivory"
            }`}
          >
            ЧАЙКА
          </span>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-petrol-deep/70 hover:text-teal"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Phone + CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:+79372390022"
            className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-petrol-deep hover:text-teal" : "text-ivory hover:text-cyan"
            }`}
          >
            <Phone className="h-4 w-4" />
            8-937-239-00-22
          </a>
          <a
            href="#rooms"
            className={`text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-teal text-ivory hover:bg-cyan"
                : "bg-ivory text-petrol-deep hover:bg-cyan hover:text-ivory"
            }`}
          >
            Забронировать
          </a>
        </div>
      </nav>
    </header>
  );
}

function SeagullMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 18C8 18 12 6 18 6C22 6 23 12 24 12C25 12 26 6 30 6C36 6 40 18 46 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
