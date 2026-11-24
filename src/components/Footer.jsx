import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import { C, PAGES, path } from "../config/config";
import mainLogo from "../assets/mainlogo.webp";

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

export default function Footer() {
  const waNumber = String(C.wa).replace(/\D/g, "");

  const contacts = [
    { icon: Phone, value: C.phone, link: `tel:${C.phone}` },
    { icon: Mail, value: C.email, link: `mailto:${C.email}` },
    { icon: MapPin, value: C.city, link: null },
  ];

  const legal = [
    { icon: FileText, label: "GST", value: C.gst },
    { icon: BadgeCheck, label: "FSSAI", value: C.fssai },
  ];

  return (
    <footer className="bg-[#0F1B45] text-slate-300">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-[#1F3A93] via-[#F39C12] to-[#1F3A93]" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={mainLogo}
              alt={`${C.name} logo`}
              className="h-12 w-auto rounded bg-white p-1 object-contain"
            />
          </Link>

          <h3 className="mt-4 text-lg font-bold text-white">{C.name}</h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Contract sachet packaging partner. Custom printed and plain sachets
            for powders and granules, from 1g to 50g.
          </p>

          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1DA851]"
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <span className="mt-2 block h-0.5 w-10 bg-[#F39C12]" />

          <ul className="mt-5 space-y-3 text-sm">
            {PAGES.map(([k, label]) => (
              <li key={k}>
                <Link
                  to={path(k)}
                  className="group inline-flex items-center gap-1.5 transition hover:text-[#F39C12]"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#F39C12] transition group-hover:translate-x-0.5"
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Contact Us
          </h3>
          <span className="mt-2 block h-0.5 w-10 bg-[#F39C12]" />

          <ul className="mt-5 space-y-4 text-sm">
            {contacts.map(({ icon: Icon, value, link }) => (
              <li key={value} className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-[#F39C12]" />
                {link ? (
                  <a
                    href={link}
                    className="break-words transition hover:text-[#F39C12]"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="break-words">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Business info */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Business Details
          </h3>
          <span className="mt-2 block h-0.5 w-10 bg-[#F39C12]" />

          <ul className="mt-5 space-y-4 text-sm">
            {legal.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-[#F39C12]" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="break-words font-medium text-slate-200">
                    {value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {C.name}. All rights reserved.
          </p>
          <p>Custom Sachet Packaging | 1g to 50g</p>
        </div>
      </div>
    </footer>
  );
}
