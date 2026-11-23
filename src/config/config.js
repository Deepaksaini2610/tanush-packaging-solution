export const C = {
  name: "Tanush packaging solution",
  phone: "+91 9887743377",
  wa: "91 9887743377",
  gst: "GSTIN: XXXXXXXXXXXXXXX",
  email: "i.deepaksaini2610@gmail.com",
  city: "Alwar, Rajasthan, India",
  moqPrinted: "2 lakh pcs",
  moqPlain: "5,000 pcs",
};

export const PAGES = [
  ["home", "Home"],
  ["about", "About Us"],
  ["services", "Services"],
  ["contact", "Contact Us"],
];

export const path = (k) => (k === "home" ? "/" : `/${k}`);

export const META = {
  home: [
    "Tanush MiniPack | Custom Sachet Packing",
    "Custom printed sachet packing from 1g to 50g.",
  ],
  about: ["About Us | Tanush MiniPack", "About our sachet packaging unit."],
  services: [
    "Sachet Packing Services | Tanush MiniPack",
    "Custom printed sachets and powder filling.",
  ],
  contact: [
    "Contact Us | Tanush MiniPack",
    "Get a quote for custom sachet packing.",
  ],
};
