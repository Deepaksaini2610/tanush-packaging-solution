import { useEffect, useState } from "react";
import { slides } from "../data/siteData";
import Sachets from "./Sachets";

export default function Carousel({ go }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const t = setInterval(() => {
      setI((n) => (n + 1) % slides.length);
    }, 5500);

    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setI((i - 1 + slides.length) % slides.length);

  const next = () => setI((i + 1) % slides.length);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slides.map((s, n) => (
          <div
            key={n}
            className={`relative w-full shrink-0 ${s.bg} ${
              s.image ? "bg-cover bg-center bg-no-repeat" : ""
            }`}
            style={s.image ? { backgroundImage: `url(${s.image})` } : undefined}
          >
            {/* Dark overlay taaki image ke upar text saaf padhe */}
            {s.overlay && <div className="absolute inset-0 bg-black/50" />}

            <div className="relative z-10 mx-auto grid min-h-[430px] max-w-6xl items-center gap-8 px-12 py-12 md:grid-cols-2">
              <div>
                <h1 className="text-3xl font-bold sm:text-5xl">{s.title}</h1>

                <p className="mt-4 text-lg">{s.text}</p>

                <button
                  onClick={() => go(s.go)}
                  className={`mt-6 rounded-md px-6 py-3 font-semibold ${s.btn}`}
                >
                  {s.cta}
                </button>
              </div>

              <div className="flex justify-center">
                <Sachets body={s.body} seal={s.seal} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white hover:bg-black/50"
      >
        &#8249;
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white hover:bg-black/50"
      >
        &#8250;
      </button>

      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2">
        {slides.map((_, n) => (
          <button
            key={n}
            onClick={() => setI(n)}
            aria-label={`Go to slide ${n + 1}`}
            className={`h-2.5 rounded-full ${
              n === i ? "w-7 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
