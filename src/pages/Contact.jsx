import { useState } from "react";
import { C } from "../config/config";

export default function Contact() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    product: "",
    size: "",
    weight: "",
    qty: "",
    design: "I have my own design",
    note: "",
  });

  const set = (e) => {
    setF({ ...f, [e.target.name]: e.target.value });
  };

  const send = () => {
    if (!f.name.trim() || !f.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const msg = `
Hello ${C.name}, I want a quote.

Name: ${f.name}
Phone: ${f.phone}
Product: ${f.product}
Sachet Size: ${f.size}
Weight: ${f.weight}
Quantity: ${f.qty}
Design: ${f.design}
Note: ${f.note}
`;

    const whatsappURL = `https://wa.me/${String(C.wa).replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const contactCards = [
    {
      icon: "📞",
      title: "Phone Number",
      value: C.phone,
      link: `tel:${C.phone}`,
    },
    {
      icon: "✉️",
      title: "Email Address",
      value: C.email,
      link: `mailto:${C.email}`,
    },
    {
      icon: "📍",
      title: "Our Address",
      value: C.city,
      link: null,
    },
    {
      icon: "📋",
      title: "GST Number",
      value: C.gst,
      link: null,
    },
    {
      icon: "🏢",
      title: "FSSAI License",
      value: C.fssai,
      link: null,
    },
  ];

  const fields = [
    ["name", "Your Name", "text"],
    ["phone", "Phone Number", "tel"],
    ["product", "What Will You Pack?", "text"],
    ["size", "Sachet Size (mm)", "text"],
    ["weight", "Weight Per Sachet (g)", "text"],
    ["qty", "Quantity Needed", "text"],
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1F3A93]">
            WE ARE HERE TO HELP
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-slate-900">
            Contact <span className="text-[#1F3A93]">Us</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Have a question or need a quotation? Get in touch with us. We would
            love to hear from you!
          </p>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Our Contact Details
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-sm font-semibold text-slate-500">
                  {item.title}
                </h3>

                {item.link ? (
                  <a
                    href={item.link}
                    className="mt-2 block break-words text-base font-bold text-[#1F3A93] hover:text-blue-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 break-words text-base font-bold text-slate-800">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-5">
          {/* LEFT PANEL */}
          <div className="bg-[#1F3A93] p-8 text-white md:col-span-2 md:p-10">
            <h2 className="text-3xl font-bold">Get A Free Quote</h2>

            <p className="mt-4 leading-7 text-blue-100">
              Tell us about your packaging requirements. Our team will connect
              with you shortly.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold">Quick Response</p>
                  <p className="text-sm text-blue-100">
                    Connect directly on WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="font-semibold">Custom Packaging</p>
                  <p className="text-sm text-blue-100">
                    Share your product requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 md:col-span-3 md:p-10">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Send Your Enquiry
            </h2>

            <p className="mb-7 text-sm text-slate-500">
              Fill in your details below.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map(([name, label, type]) => (
                <div key={name}>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {label}
                    {(name === "name" || name === "phone") && (
                      <span className="text-red-500"> *</span>
                    )}
                  </label>

                  <input
                    name={name}
                    type={type}
                    value={f[name]}
                    onChange={set}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    required={name === "name" || name === "phone"}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#1F3A93] focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Design Requirement
                </label>

                <select
                  name="design"
                  value={f.design}
                  onChange={set}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#1F3A93]"
                >
                  <option>I have my own design</option>
                  <option>I need design help</option>
                  <option>Plain sachet + sticker</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Additional Message
                </label>

                <textarea
                  name="note"
                  rows="4"
                  value={f.note}
                  onChange={set}
                  placeholder="Tell us more about your requirements..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#1F3A93]"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="button"
                  onClick={send}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-[#1DA851] hover:shadow-xl active:scale-[0.98]"
                >
                  <span className="text-2xl">💬</span>
                  Send Enquiry on WhatsApp
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  Your enquiry will open directly in WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
