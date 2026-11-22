import Carousel from "../components/Carousel";
import CategorySlider from "../components/CategorySlider";
import OrderProcess from "../components/OrderProcess";
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

      <CategorySlider />
      <section className={`${wrap} py-14`}>
        <OrderProcess />
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
