import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  BadgeCheck,
  Package,
  Clock,
  MessageCircle,
} from "lucide-react";
import { C } from "../config/config";

function WhatsAppIcon({ size = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.900 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.900 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

const initialForm = {
  name: "",
  phone: "",
  product: "",
  size: "",
  weight: "",
  qty: "",
  design: "I have my own design",
  note: "",
};

const fields = [
  {
    name: "name",
    label: "Your Name",
    type: "text",
    placeholder: "e.g. Rahul Sharma",
    required: true,
    auto: "name",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. 9876543210",
    required: true,
    auto: "tel",
  },
  {
    name: "product",
    label: "What Will You Pack?",
    type: "text",
    placeholder: "e.g. Masala, tea, protein powder",
  },
  {
    name: "size",
    label: "Sachet Size (mm)",
    type: "text",
    placeholder: "e.g. 70 x 50",
  },
  {
    name: "weight",
    label: "Weight Per Sachet (g)",
    type: "text",
    placeholder: "e.g. 5g",
  },
  {
    name: "qty",
    label: "Quantity Needed",
    type: "text",
    placeholder: "e.g. 10,000 pcs",
  },
];

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-slate-200 focus:border-[#1F3A93] focus:ring-blue-100"
  }`;

export default function Contact() {
  const [f, setF] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const waNumber = String(C.wa).replace(/\D/g, "");

  const set = (e) => {
    const { name, value } = e.target;
    setF((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (sent) setSent(false);
  };

  const validate = () => {
    const err = {};
    if (!f.name.trim()) err.name = "Please enter your name.";

    const digits = f.phone.replace(/\D/g, "");
    if (!f.phone.trim()) err.phone = "Please enter your phone number.";
    else if (digits.length < 10)
      err.phone = "Enter a valid 10-digit phone number.";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const send = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Sirf wahi lines jo bhari gayi hain
    const lines = [
      `Hello ${C.name}, I want a quote.`,
      "",
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone.trim()}`,
      f.product.trim() && `Product: ${f.product.trim()}`,
      f.size.trim() && `Sachet Size: ${f.size.trim()}`,
      f.weight.trim() && `Weight: ${f.weight.trim()}`,
      f.qty.trim() && `Quantity: ${f.qty.trim()}`,
      `Design: ${f.design}`,
      f.note.trim() && `Note: ${f.note.trim()}`,
    ].filter((line) => (line !== false && line !== "" ? true : line === ""));

    const msg = lines.join("\n");
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Phone Number",
      value: C.phone,
      link: `tel:${C.phone}`,
    },
    {
      icon: Mail,
      title: "Email Address",
      value: C.email,
      link: `mailto:${C.email}`,
    },
    { icon: MapPin, title: "Our Address", value: C.city, link: null },
    { icon: FileText, title: "GST Number", value: C.gst, link: null },
    { icon: BadgeCheck, title: "FSSAI License", value: C.fssai, link: null },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#1F3A93]">
            We are here to help
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Contact <span className="text-[#1F3A93]">Us</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Have a question or need a quotation? Get in touch with us. We would
            love to hear from you!
          </p>

          {/* Quick actions */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${C.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1F3A93] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#14275F]"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1DA851]"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Our Contact Details
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map(({ icon: Icon, title, value, link }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1F3A93] transition group-hover:bg-[#1F3A93] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-sm font-semibold text-slate-500">
                  {title}
                </h3>

                {link ? (
                  <a
                    href={link}
                    className="mt-2 block break-words text-base font-bold text-[#1F3A93] hover:text-[#F39C12]"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-2 break-words text-base font-bold text-slate-800">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-5">
          {/* LEFT PANEL */}
          <div className="relative bg-[#1F3A93] p-8 text-white md:col-span-2 md:p-10">
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#F39C12]/20 blur-3xl" />

            <h2 className="relative text-3xl font-bold">Get A Free Quote</h2>

            <p className="relative mt-4 leading-7 text-blue-100">
              Tell us about your packaging requirements. Our team will connect
              with you shortly.
            </p>

            <div className="relative mt-10 space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: "Quick Response",
                  text: "Connect directly on WhatsApp",
                },
                {
                  icon: Package,
                  title: "Custom Packaging",
                  text: "Share your product requirements",
                },
                {
                  icon: Clock,
                  title: "Fast Quotation",
                  text: "Get rates and sample options quickly",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F39C12]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-blue-100">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={send}
            noValidate
            className="p-6 md:col-span-3 md:p-10"
          >
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Send Your Enquiry
            </h2>

            <p className="mb-7 text-sm text-slate-500">
              Fields marked <span className="text-red-500">*</span> are
              required.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map(
                ({ name, label, type, placeholder, required, auto }) => (
                  <div key={name}>
                    <label
                      htmlFor={name}
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      {label}
                      {required && <span className="text-red-500"> *</span>}
                    </label>

                    <input
                      id={name}
                      name={name}
                      type={type}
                      inputMode={type === "tel" ? "tel" : undefined}
                      autoComplete={auto}
                      value={f[name]}
                      onChange={set}
                      placeholder={placeholder}
                      aria-invalid={!!errors[name]}
                      aria-describedby={
                        errors[name] ? `${name}-error` : undefined
                      }
                      className={inputClass(!!errors[name])}
                    />

                    {errors[name] && (
                      <p
                        id={`${name}-error`}
                        className="mt-1.5 text-xs font-medium text-red-500"
                      >
                        {errors[name]}
                      </p>
                    )}
                  </div>
                ),
              )}

              <div className="sm:col-span-2">
                <label
                  htmlFor="design"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Design Requirement
                </label>

                <select
                  id="design"
                  name="design"
                  value={f.design}
                  onChange={set}
                  className={inputClass(false)}
                >
                  <option>I have my own design</option>
                  <option>I need design help</option>
                  <option>Plain sachet + sticker</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="note"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Additional Message
                </label>

                <textarea
                  id="note"
                  name="note"
                  rows="4"
                  value={f.note}
                  onChange={set}
                  placeholder="Tell us more about your requirements..."
                  className={`${inputClass(false)} resize-none`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-[#1DA851] hover:shadow-xl active:scale-[0.98]"
                >
                  <WhatsAppIcon size={24} />
                  Send Enquiry on WhatsApp
                </button>

                {sent ? (
                  <p
                    className="mt-3 text-center text-sm font-medium text-green-600"
                    role="status"
                  >
                    WhatsApp khul gaya hai. Wahan "Send" dabana na bhoolein.
                  </p>
                ) : (
                  <p className="mt-3 text-center text-xs text-slate-400">
                    Your enquiry will open directly in WhatsApp.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
