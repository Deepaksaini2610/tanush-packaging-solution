import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { C, PAGES, path } from "../config/config";
import mainLogo from "../assets/mainlogo.webp";

export default function Navbar({ page }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll par navbar me halki shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu khula ho to page scroll band
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopLink = ([k, label]) => (
    <Link
      key={k}
      to={path(k)}
      className={`relative py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-[#F39C12] after:transition-transform after:duration-300 ${
        page === k
          ? "text-[#1F3A93] after:scale-x-100"
          : "text-slate-600 after:scale-x-0 hover:text-[#1F3A93] hover:after:scale-x-100"
      }`}
    >
      {label}
    </Link>
  );

  const mobileLink = ([k, label]) => (
    <Link
      key={k}
      to={path(k)}
      onClick={() => setOpen(false)}
      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
        page === k
          ? "bg-blue-50 text-[#1F3A93]"
          : "text-slate-700 hover:bg-slate-50"
      }`}
    >
      {label}
      <ArrowRight
        size={18}
        className={page === k ? "text-[#F39C12]" : "text-slate-300"}
      />
    </Link>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#14275F] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs sm:text-[13px]">
          <span className="hidden font-medium tracking-wide text-blue-100 sm:inline">
            Custom Sachet Packaging | 1g to 50g
          </span>

          <div className="ml-auto flex items-center gap-5">
            <a
              href={`tel:${C.phone}`}
              className="inline-flex items-center gap-1.5 font-medium transition hover:text-[#F39C12]"
            >
              <Phone size={13} />
              {C.phone}
            </a>
            <span className="hidden text-blue-200 sm:inline">{C.gst}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={mainLogo}
              alt="Tanush Packaging Solution Logo"
              className="h-14 w-auto object-contain sm:h-16"
            />

            {/* Mobile/tablet pe hidden, lg+ pe visible */}
            <div className="hidden leading-tight lg:block">
              <p className="text-xl font-extrabold tracking-tight text-[#1F3A93]">
                Tanush <span className="text-[#F39C12]">Packaging</span>
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Solution
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-7">
              {PAGES.map(desktopLink)}
            </nav>

            <Link
              to={path("contact")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#F39C12] px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e08e0b] hover:shadow-md"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-[#1F3A93] transition hover:bg-[#1F3A93] hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            open
              ? "grid-rows-[1fr] border-t border-slate-200"
              : "grid-rows-[0fr]"
          }`}
        >
          <nav className="overflow-hidden bg-white">
            <div className="flex flex-col gap-1 px-4 py-4">
              {PAGES.map(mobileLink)}

              <Link
                to={path("contact")}
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#F39C12] px-5 py-3 font-bold text-slate-900"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
