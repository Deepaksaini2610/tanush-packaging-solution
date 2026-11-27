import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Phone, Check, ArrowRight, Package, ChevronDown } from "lucide-react";
import { C, path } from "../config/config";
import { PRODUCTS, getProduct } from "../data/products";
import useSeo, { SITE_URL } from "../hooks/useSeo";

export default function ProductPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const product = getProduct(slug);

  const schema = useMemo(() => {
    if (!product) return [];
    const url = `${SITE_URL}/${product.slug}`;
    return [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: product.name,
        description: product.metaDescription,
        url,
        areaServed: "IN",
        provider: {
          "@type": "LocalBusiness",
          name: "Tanush Packaging Solution",
          url: SITE_URL,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          { "@type": "ListItem", position: 2, name: product.name, item: url },
        ],
      },
    ];
  }, [product]);

  useSeo({
    title: product?.metaTitle ?? "Tanush Packaging Solution",
    description: product?.metaDescription ?? "",
    path: product ? `/${product.slug}` : "/",
    schema,
  });

  if (!product) return <Navigate to="/" replace />;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#14275F] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-blue-200">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{product.name}</span>
            </nav>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
              {product.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
              {product.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={path("contact")}
                className="inline-flex items-center gap-2 rounded-lg bg-[#F39C12] px-6 py-3 font-bold text-slate-900 transition hover:bg-[#e08e0b]"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${C.phone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                <Phone size={17} />
                {C.phone}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15">
            {product.image ? (
              <img
                src={product.image}
                alt={`${product.name} by Tanush Packaging Solution`}
                width="640"
                height="480"
                className="aspect-[4/3] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 text-blue-200">
                <Package size={56} strokeWidth={1.25} />
                <span className="text-sm">{product.name}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#1F3A93] sm:text-3xl">
          What you get with our {product.name.toLowerCase()}
        </h2>
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-slate-700">
              <Check size={20} className="mt-0.5 shrink-0 text-[#F39C12]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Uses */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1F3A93] sm:text-3xl">
            Where it is used
          </h2>
          <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {product.uses.map((u) => (
              <li key={u} className="py-3.5 text-slate-700">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#1F3A93] sm:text-3xl">
          Common questions
        </h2>
        <div className="mt-6 space-y-3">
          {product.faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-lg border border-slate-200 bg-white px-5 py-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-800">
                {q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3A93] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Need {product.name.toLowerCase()}?
            </h2>
            <p className="mt-1 text-blue-100">
              Tell us your product, pack size and quantity. We will get back
              with a quote.
            </p>
          </div>
          <Link
            to={path("contact")}
            className="inline-flex items-center gap-2 rounded-lg bg-[#F39C12] px-6 py-3 font-bold text-slate-900 transition hover:bg-[#e08e0b]"
          >
            Get a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-extrabold tracking-tight text-[#1F3A93]">
          Our other packaging services
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {related.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/${p.slug}`}
                className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#1F3A93] hover:text-[#1F3A93]"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
