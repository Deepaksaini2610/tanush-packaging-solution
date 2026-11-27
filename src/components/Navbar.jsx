import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { C, PAGES, path } from "../config/config";
import { PRODUCTS } from "../data/products";
import mainLogo from "../assets/mainlogo.webp";

export default function Navbar({ page }) {
  const [open, setOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const productActive = PRODUCTS.some((p) => pathname === `/${p.slug}`);

  // Contact ko Products ke baad dikhane ke liye alag kiya
  const mainPages = PAGES.filter(([k]) => k !== "contact");
  const contactPage = PAGES.find(([k]) => k === "contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Page badalte hi mobile menu band
  useEffect(() => {
    setOpen(false);
    setMobileProducts(false);
  }, [pathname]);

  const linkClass = (active) =>
    `relative py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-[#F39C12] after:transition-transform after:duration-300 ${
      active
        ? "text-[#1F3A93] after:scale-x-100"
        : "text-slate-600 after:scale-x-0 hover:text-[#1F3A93] hover:after:scale-x-100"
    }`;

  const desktopLink = ([k, label]) => (
    <Link key={k} to={path(k)} className={linkClass(page === k)}>
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
              {mainPages.map(desktopLink)}

              {/* Products dropdown */}
              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`${linkClass(productActive)} inline-flex items-center gap-1`}
                >
                  Products
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                    {PRODUCTS.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/${p.slug}`}
                          className={`block px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-blue-50 hover:text-[#1F3A93] ${
                            pathname === `/${p.slug}`
                              ? "bg-blue-50 text-[#1F3A93]"
                              : "text-slate-700"
                          }`}
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {contactPage && desktopLink(contactPage)}
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
            <div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              {mainPages.map(mobileLink)}

              {/* Products accordion */}
              <button
                type="button"
                onClick={() => setMobileProducts(!mobileProducts)}
                aria-expanded={mobileProducts}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  productActive
                    ? "bg-blue-50 text-[#1F3A93]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Products
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform ${
                    mobileProducts ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProducts && (
                <ul className="ml-4 flex flex-col border-l-2 border-slate-200 pl-2">
                  {PRODUCTS.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-3 py-2.5 text-[15px] font-medium ${
                          pathname === `/${p.slug}`
                            ? "text-[#1F3A93]"
                            : "text-slate-600 hover:text-[#1F3A93]"
                        }`}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {contactPage && mobileLink(contactPage)}

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
