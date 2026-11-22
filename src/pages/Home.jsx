import Carousel from "../components/Carousel";
import ServiceList from "../components/ServiceList";
import { segments, steps } from "../data/siteData";

const wrap = "mx-auto max-w-6xl px-4";
const h2 = "text-2xl font-bold text-slate-900 sm:text-3xl";

export default function Home({ go }) {
  return (
    <>
      <Carousel go={go} />

      <section className={`${wrap} py-14`}>
        <h2 className={h2}>What we do</h2>

        <ServiceList />

        <button
          onClick={() => go("services")}
          className="mt-8 font-semibold text-[#1F3A93] underline"
        >
          See all services
        </button>
      </section>

      <section className="bg-slate-50 py-14">
        <div className={wrap}>
          <h2 className={h2}>Who we pack for</h2>

          <ul className="mt-6 flex flex-wrap gap-3">
            {segments.map((s) => (
              <li
                key={s}
                className="rounded-full border bg-white px-4 py-2 text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${wrap} py-14`}>
        <h2 className={h2}>How an order works</h2>

        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((s, n) => (
            <li key={s} className="rounded-md border p-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F3A93] text-white">
                {n + 1}
              </span>
              <p className="mt-3 text-sm">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#1F3A93] py-12 text-white">
        <div
          className={`${wrap} flex flex-col justify-between gap-4 sm:flex-row`}
        >
          <div>
            <h2 className="text-2xl font-bold">
              Need sachets made for your product?
            </h2>
            <p>Share the details and get a rate.</p>
          </div>

          <button
            onClick={() => go("contact")}
            className="rounded-md bg-[#F39C12] px-6 py-3 font-semibold text-slate-900"
          >
            Get a free quote
          </button>
        </div>
      </section>
    </>
  );
}
