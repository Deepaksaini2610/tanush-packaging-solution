import { useState } from "react";
import { Link } from "react-router-dom";
import { C, PAGES, path } from "../config/config";
import mainLogo from '../assets/mainlogo.webp'

export default function Navbar({ page }) {
  const [open, setOpen] = useState(false);

  const navLink = ([k, label]) => (
    <Link
      key={k}
      to={path(k)}
      onClick={() => setOpen(false)}
      className={`py-2 text-sm font-semibold transition-colors duration-200 ${
        page === k
          ? "border-b-2 border-[#F39C12] text-[#1F3A93]"
          : "text-slate-700 hover:text-[#F39C12]"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1F3A93] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-end gap-4 px-4 py-2 text-xs sm:text-sm">
          <a href={`tel:${C.phone}`} className="hover:text-orange-300">
            Mobile: {C.phone}
          </a>
          <span>{C.gst}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={mainLogo}
              alt="Tanush Packaging Solution Logo"
              className="h-12 w-auto object-contain"
            />

            <span className="text-lg font-extrabold tracking-tight text-[#1F3A93] sm:text-xl">
              Tanush
              <span className="text-[#F39C12]">Packaging</span>
              <span className="text-[#1F3A93]">Solution</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {PAGES.map(navLink)}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#1F3A93] transition hover:bg-[#1F3A93] hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? "Close ✕" : "☰ Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav className="flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4 shadow-md md:hidden">
            {PAGES.map(navLink)}
          </nav>
        )}
      </header>
    </>
  );
}
