import { useState } from "react";
import { Link } from "react-router-dom";
import { C, PAGES, path } from "../config/config";

export default function Navbar({ page }) {
  const [open, setOpen] = useState(false);

  const navLink = ([k, label]) => (
    <Link
      key={k}
      to={path(k)}
      onClick={() => setOpen(false)}
      className={`py-1 text-sm font-medium ${
        page === k
          ? "border-b-2 border-[#F39C12] text-[#1F3A93]"
          : "text-slate-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <div className="bg-[#1F3A93] text-white">
        <div className="mx-auto flex max-w-6xl justify-end gap-6 px-4 py-2 text-sm">
          <a href={`tel:${C.phone}`}>Mobile: {C.phone}</a>
          <span>{C.gst}</span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-xl font-bold text-[#1F3A93]">
            Tanush <span className="text-[#F39C12]">MiniPack</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {PAGES.map(navLink)}
          </nav>

          <button
            className="rounded-md border px-3 py-2 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-3 border-t p-4 md:hidden">
            {PAGES.map(navLink)}
          </nav>
        )}
      </header>
    </>
  );
}
