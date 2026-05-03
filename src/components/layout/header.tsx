"use client";

import { useState } from "react";
import { navLinks } from "@/lib/portfolio-data";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6l-12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="container-width flex h-18 items-center justify-between py-4">
        <a href="#home" className="text-lg font-extrabold tracking-tight w-14 h-14 rounded-full border border-black flex justify-center items-center">
          DKN
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-black text-zinc-800 transition-colors hover:bg-black hover:text-white lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <a
            href="/Dilip_Kumar_N_Frontend_Engineer.pdf"
            download
            className="hidden rounded-lg border border-black px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-white lg:inline-flex lg:px-5"
          >
            Resume
          </a>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <div className="container-width py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
