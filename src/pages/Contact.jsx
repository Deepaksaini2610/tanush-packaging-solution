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

    // WhatsApp
    const whatsappURL = `https://wa.me/${C.wa}?text=${encodeURIComponent(msg)}`;

    // Email
    const emailURL = `mailto:${C.email}?subject=${encodeURIComponent("New Quote Enquiry")}&body=${encodeURIComponent(msg)}`;

    window.open(whatsappURL, "_blank");
    window.location.href = emailURL;
  };

  const fields = [
    ["name", "Your name"],
    ["phone", "Phone number"],
    ["product", "What will you pack?"],
    ["size", "Sachet size (mm)"],
    ["weight", "Weight per sachet (g)"],
    ["qty", "Quantity needed"],
    ["note", "Anything else?"],
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-5">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>

        <p className="mt-3 text-slate-600">
          Fill in the form and send your request directly on WhatsApp.
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <p>Phone: {C.phone}</p>
          <p>Email: {C.email}</p>
          <p>Address: {C.city}</p>
          <p>{C.gst}</p>
          <p>{C.fssai}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:col-span-3">
        {fields.map(([name, label]) => (
          <div key={name}>
            <label className="mb-1 block text-sm font-medium">{label}</label>

            <input
              name={name}
              type={name === "phone" ? "tel" : "text"}
              value={f[name]}
              onChange={set}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>
        ))}

        <div>
          <label className="mb-1 block text-sm font-medium">Design</label>

          <select
            name="design"
            value={f.design}
            onChange={set}
            className="w-full rounded-md border px-3 py-2"
          >
            <option>I have my own design</option>
            <option>I need design help</option>
            <option>Plain sachet + sticker</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <button
            onClick={send}
            className="rounded-md bg-[#1F3A93] px-6 py-3 font-semibold text-white"
          >
            Send quote request on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
