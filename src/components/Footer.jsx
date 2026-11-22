import { Link } from "react-router-dom";
import { C, PAGES, path } from "../config/config";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{C.name}</h3>
          <p className="mt-2 text-sm">Custom sachet packing, 1g to 50g.</p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Pages</h3>
          <ul className="mt-2 space-y-2">
            {PAGES.map(([k, label]) => (
              <li key={k}>
                <Link to={path(k)}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-2">{C.phone}</p>
          <p>{C.email}</p>
          <p>{C.city}</p>
          <p>{C.gst}</p>
          <p>{C.fssai}</p>
        </div>
      </div>

      <p className="border-t border-slate-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} {C.name}. All rights reserved.
      </p>
    </footer>
  );
}
