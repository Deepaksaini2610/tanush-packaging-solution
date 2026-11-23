import { useNavigate } from "react-router-dom";
import {
  Package,
  Target,
  ShieldCheck,
  Palette,
  Scale,
  Truck,
  CheckCircle,
  ArrowRight,
  Factory,
  Award,
  Users,
} from "lucide-react";

import { C } from "../config/config";

const highlights = [
  {
    icon: Package,
    title: "1g to 50g Packing",
    desc: "Small and convenient sachet packaging for different products.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    desc: "Your own artwork, colours and logo on sachet packaging.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    desc: "Careful filling, sealing and batch-wise quality checks.",
  },
  {
    icon: Target,
    title: "Made to Order",
    desc: "Every order is prepared according to your requirements.",
  },
];

const reasons = [
  "Custom printed sachet packaging",
  "Plain sachet with sticker option",
  "Design support for your brand",
  "Powder and granule filling",
  "Flexible product and size requirements",
  "Quality checking before dispatch",
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-[#14275F] py-20 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
              ABOUT OUR COMPANY
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Packaging Your Products,
              <span className="text-[#F39C12]"> Building Your Brand.</span>
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-blue-100">
              Welcome to {C.name}, your contract sachet packaging partner in{" "}
              {C.city}. We provide custom packaging solutions for powders and
              granules from 1g to 50g.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F39C12] px-7 py-4 font-bold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-orange-400"
            >
              Work With Us
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            <img
              src="../../public/sachets.webp"
              alt="Sachet packaging products"
              className="h-[350px] w-full rounded-2xl object-cover shadow-2xl transition duration-700 hover:scale-105"
            />

            <div className="absolute -bottom-6 -left-4 rounded-xl bg-white p-5 text-slate-900 shadow-xl sm:-left-8">
              <p className="text-3xl font-extrabold text-[#1F3A93]">1g–50g</p>
              <p className="text-sm text-slate-500">Sachet Packing Range</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="relative">
          <img
            src="/images/packing-machine.jpg"
            alt="Sachet packaging process"
            className="h-[390px] w-full rounded-2xl object-cover shadow-lg"
          />

          <div className="absolute -right-3 -top-4 rounded-xl bg-[#F39C12] p-5 text-slate-900 shadow-lg">
            <Factory size={32} />
            <p className="mt-2 font-bold">Contract</p>
            <p className="text-sm">Packaging Unit</p>
          </div>
        </div>

        <div>
          <span className="font-bold uppercase tracking-widest text-[#F39C12]">
            Who We Are
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Your Trusted Sachet Packaging Partner
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {C.name} is a contract packaging unit based in
            {` ${C.city}`}. We specialise in filling and sealing powders and
            granules into small sachets.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you have your own product design or need design assistance,
            we work according to your packaging requirements, quantity and
            specifications.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our goal is to help businesses get convenient, properly packed and
            branded sachet products.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <span className="font-bold uppercase tracking-widest text-[#F39C12]">
              Our Capabilities
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-orange-300 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#1F3A93] transition duration-300 group-hover:bg-[#1F3A93] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <span className="font-bold uppercase tracking-widest text-[#F39C12]">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
            Packaging Solutions Designed Around Your Needs
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            We understand that every business has different packaging
            requirements. That's why we offer made-to-order sachet packaging
            solutions.
          </p>

          <div className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3">
                <CheckCircle size={21} className="shrink-0 text-green-600" />

                <span className="text-slate-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#1F3A93] p-7 text-white transition hover:-translate-y-2">
            <Scale size={32} className="text-orange-400" />
            <h3 className="mt-5 text-2xl font-bold">1g–50g</h3>
            <p className="mt-2 text-sm text-blue-100">Packing Weight Range</p>
          </div>

          <div className="rounded-2xl bg-orange-400 p-7 text-slate-900 transition hover:-translate-y-2">
            <Package size={32} />
            <h3 className="mt-5 text-2xl font-bold">Custom</h3>
            <p className="mt-2 text-sm">Sachet Packaging</p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-7 transition hover:-translate-y-2">
            <Award size={32} className="text-[#1F3A93]" />
            <h3 className="mt-5 text-xl font-bold">Quality</h3>
            <p className="mt-2 text-sm text-slate-500">Focused Production</p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-7 transition hover:-translate-y-2">
            <Users size={32} className="text-[#1F3A93]" />
            <h3 className="mt-5 text-xl font-bold">Branding</h3>
            <p className="mt-2 text-sm text-slate-500">Your Own Design</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES TABLE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <span className="font-bold uppercase tracking-widest text-[#F39C12]">
              Business Information
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Our Packaging Capabilities
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            {[
              ["Weight Range", "1g to 50g per sachet"],
              ["Sachet Size", "70mm x 50mm, other sizes on request"],
              ["Printed Sachet MOQ", C.moqPrinted],
              ["Plain Sachet + Sticker MOQ", C.moqPlain],
              ["Payment Terms", "50% advance, balance before dispatch"],
              ["Location", C.city],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-slate-100 p-5 transition hover:bg-blue-50 sm:grid-cols-2"
              >
                <span className="font-semibold text-slate-800">{label}</span>

                <span className="text-slate-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#14275F] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let's Pack Your Product Together!
          </h2>

          <p className="mt-4 text-blue-100">
            Tell us your packaging requirements and get a quotation for your
            next order.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F39C12] px-8 py-4 font-bold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-orange-400"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
