import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { C, META } from "./config/config";

function Shell() {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (page) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  const page = location.pathname.replace("/", "") || "home";

  useEffect(() => {
    window.scrollTo(0, 0);

    const [title, desc] = META[page] || [
      "Page Not Found | Tanush MiniPack",
      "",
    ];

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = desc;
  }, [location.pathname, page]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar page={page} />

      <main>
        <Routes>
          <Route path="/" element={<Home go={go} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <a
        href={`https://wa.me/${C.wa}?text=${encodeURIComponent("Hello, I want a quote for sachet packing.")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
