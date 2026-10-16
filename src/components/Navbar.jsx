"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B12]/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:min-h-[76px] lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 text-lg font-bold tracking-tight sm:text-2xl"
        >
          <span className="text-violet-400">&lt;</span>
          Riadul<span className="text-violet-400">.dev</span>
          <span className="text-violet-400"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden shrink-0 items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-violet-700 lg:inline-flex xl:px-5"
        >
          Download CV <span aria-hidden="true">↓</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 lg:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile & Tablet Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0B0B12] px-4 py-4 sm:px-6 lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-violet-500/10 hover:text-violet-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;