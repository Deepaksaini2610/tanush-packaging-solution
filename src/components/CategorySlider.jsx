import { useRef } from "react";

const categories = [
  {
    title: "Masala & Spices",
    image: "../assets/masala spices.avif",
    desc: "Premium spice sachet packing",
  },
  {
    title: "Mehendi & Face Pack",
    image: "/images/mehendi.jpg",
    desc: "Beauty powder packaging",
  },
  {
    title: "Roli, Chawal & Haldi",
    image: "../assets/roli chawal.webp",
    desc: "Festival and puja packs",
  },
  {
    title: "Mukhwas & Mishri",
    image: "/images/mukhwas.jpg",
    desc: "Small food sachet packing",
  },
  {
    title: "Sample & Trial Packs",
    image: "/images/sample.jpg",
    desc: "Custom sample packaging",
  },
];

export default function CategorySlider() {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-50 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F39C12]">
              Our Packaging Categories
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Who We Pack For
            </h2>

            <p className="mt-2 text-slate-600">
              Packaging solutions for different industries.
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => slide(-1)}
              className="h-11 w-11 rounded-full border bg-white text-xl hover:bg-[#1F3A93] hover:text-white transition"
              aria-label="Previous categories"
            >
              &#8592;
            </button>

            <button
              onClick={() => slide(1)}
              className="h-11 w-11 rounded-full border bg-white text-xl hover:bg-[#1F3A93] hover:text-white transition"
              aria-label="Next categories"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="group min-w-[250px] max-w-[250px] snap-start overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1F3A93] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>

                <div className="mt-4 h-1 w-10 rounded-full bg-[#F39C12] transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 text-center text-xs text-slate-400">
          Swipe to explore more categories →
        </p>
      </div>
    </section>
  );
}
