import { useEffect } from "react";

export const SITE_URL = "https://tanushpackagingsolution.com";

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

// Har page par title, description, canonical, Open Graph aur JSON-LD set karta hai.
export default function useSeo({
  title,
  description,
  path = "/",
  schema = [],
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const scripts = schema.map((data) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.pageSchema = "true";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      return s;
    });

    return () => scripts.forEach((s) => s.remove());
  }, [title, description, path, schema]);
}
