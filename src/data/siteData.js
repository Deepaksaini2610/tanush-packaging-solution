import { C } from "../config/config";
import sachets from "../assets/sachets.webp";
import roli from '../assets/roli.webp'

export const sizes = [
  { g: 1, h: 52 },
  { g: 5, h: 72 },
  { g: 10, h: 92 },
  { g: 25, h: 118 },
  { g: 50, h: 144 },
];

export const services = [
  [
    "Branded Packaging Solutions",
    `Custom printing with your logo, brand colours and artwork ${C.moqPrinted}.`,
  ],
  [
    "Plain Packs with Brand Labels",
    `A lower-minimum option. Starts from ${C.moqPlain}.`,
  ],
  [
    "Packaging Design Assistance",
    "Send your logo and product details. We prepare a design for approval.",
  ],
  [
    "Powder and granule filling",
    "Accurate weight filling and uniform sealing from 1g to 50g.",
  ],
];

export const segments = [
  "Masala and spices",
  "Tea and coffee",
  "Herbal and ayurvedic powder",
  "Protein and supplements",
  "Mehendi and face pack",
  "Roli, chawal, haldi, kesar",
  "Mukhwas and mishri",
  "Sample and trial packs",
];

export const steps = [
  "You send product, sachet size, weight and quantity",
  "We share the rate and sample options",
  "Design is finalised",
  "50% advance, then printing and production",
  "Packing, quality check and dispatch",
];

export const slides = [
  {
    bg: "bg-[#14275F] text-white", // fallback color agar image load na ho
    image: sachets,
    overlay: true, // text readable rakhne ke liye dark layer
    title: "Custom Mini Pack Packaging from 1g to 50g",
    text: "Tell us the product, size and quantity.",
    cta: "Get a free quote",
    go: "contact",
    body: "#ffffff",
    seal: "#F39C12",
    btn: "bg-[#F39C12] text-slate-900",
  },
  {
    bg: "bg-[#14275F] text-white",
    title: "Your own design on every sachet",
    text: `Printed sachets start from ${C.moqPrinted}.`,
    cta: "See our services",
    go: "services",
    body: "#F39C12",
    seal: "#ffffff",
    btn: "bg-white text-[#14275F]",
  },
  {
    bg: "bg-[#F39C12] text-slate-900",
    title: "Small packs for rakhi and festival gifting",
    text: "Roli, chawal, haldi, kesar and masala in sealed sachets.",
    cta: "Talk to us",
    go: "contact",
    body: "#1F3A93",
    seal: "#ffffff",
    btn: "bg-[#1F3A93] text-white",
  },
];
