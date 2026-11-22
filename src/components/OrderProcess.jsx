import {
  ClipboardList,
  Calculator,
  Palette,
  Wallet,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const orderSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    desc: "Tell us your product, sachet size, weight and required quantity.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Get Your Best Quote",
    desc: "We share pricing, production details and sample options.",
    icon: Calculator,
  },
  {
    number: "03",
    title: "Design Approval",
    desc: "Share your artwork or let our team prepare a design for approval.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Production Begins",
    desc: "After 50% advance payment, printing and production begin.",
    icon: Wallet,
  },
  {
    number: "05",
    title: "Quality Check & Dispatch",
    desc: "Your sachets are checked, packed and dispatched safely.",
    icon: PackageCheck,
  },
];

export default function OrderProcess() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background decoration */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            Simple & Easy Process
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            How Your Order <span className="text-[#1F3A93]">Works</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            From your first enquiry to final delivery, we make sachet packaging
            simple and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-1 rounded-full bg-gradient-to-r from-[#1F3A93] via-[#F39C12] to-[#1F3A93] lg:block" />

          {orderSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative"
                style={{
                  animation: `fadeUp 0.7s ease ${index * 0.15}s both`,
                }}
              >
                {/* Icon circle */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-[#1F3A93] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-3 group-hover:bg-[#F39C12] group-hover:text-slate-900 group-hover:shadow-xl">
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                {/* Card */}
                <div className="mt-7 h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-orange-300 group-hover:shadow-xl">
                  <span className="text-4xl font-black text-orange-100 transition-colors duration-300 group-hover:text-orange-300">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.desc}
                  </p>

                  <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-[#F39C12] transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-slate-600">
            Ready to start your packaging journey?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-[#1F3A93] px-7 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#14275F] hover:shadow-xl"
          >
            Start Your Order
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
