import { useNavigate } from "react-router-dom";
import ServiceList from "../components/ServiceList";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold">Our Services</h1>

      <p className="mt-3 max-w-2xl text-slate-600">
        Four ways to work with us, depending on your order size and whether you
        already have a design.
      </p>

      <ServiceList />

      <button
        onClick={() => navigate("/contact")}
        className="mt-10 rounded-md bg-[#1F3A93] px-6 py-3 text-white"
      >
        Ask for a quote
      </button>
    </section>
  );
}
