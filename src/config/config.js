export const C = {
  name: "Tanush packaging solution",
  phone: "+91 9887743377",
  wa: "91 9887743377",
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


// config.js me purane META ki jagah ye poora META paste karo.
// Keys page ke URL ke hisaab se hain: home, about, services, contact, aur har product ka slug.

export const META = {
  home: [
    "Sachet & Mini Pack Packaging in Alwar | Tanush Packaging",
    "Custom sachet and mini pack packaging from 1g to 50g for spices, powders, mouth fresheners, rakhi and pooja kits. Get a quote from Tanush Packaging, Alwar.",
  ],
  about: [
    "About Us | Tanush Packaging Solution",
    "Learn about Tanush Packaging Solution, a sachet and mini pack packaging partner in Alwar, Rajasthan.",
  ],
  services: [
    "Packaging Services | Tanush Packaging Solution",
    "Branded and plain sachets, packaging design help, and powder and granule filling from 1g to 50g. See how our packaging services work.",
  ],
  contact: [
    "Contact Us | Tanush Packaging Solution",
    "Get a quote for sachet and mini pack packaging. Call or WhatsApp Tanush Packaging Solution, Lal Diggi, Alwar.",
  ],

  // Product pages
  "sachet-packaging": [
    "Sachet Packaging in Alwar, 1g to 50g | Tanush Packaging",
    "Custom printed sachet packaging from 1g to 50g for powders, spices, tea, herbal products and more. Plain and branded options. Get a quote from Tanush, Alwar.",
  ],
  "mini-pack-packaging": [
    "Mini Pack Packaging in Alwar | Sample & Trial Packs",
    "Mini pack packaging for sample, trial and low-price retail packs. Printed mini sachets filled and sealed by Tanush Packaging Solution, Alwar, Rajasthan.",
  ],
  "powder-packaging": [
    "Powder Packaging in Alwar | Sachets 1g to 50g",
    "Powder packaging with accurate weight filling and uniform sealing, 1g to 50g. For masala, herbal, protein, mehendi and face pack powders. Tanush, Alwar.",
  ],
  "spices-packaging": [
    "Spices & Masala Packaging in Alwar | Tanush Packaging",
    "Spices and masala packaging in sealed, printed sachets: chilli flakes, turmeric, garam masala and more. Fresh, branded packs from Tanush Packaging, Alwar.",
  ],
  "mouth-freshener-packaging": [
    "Mouth Freshener Packaging in Alwar | Mukhwas Sachets",
    "Mouth freshener packaging for saunf, mukhwas and mishri in printed sachets and mini packs. Neat sealing and branding by Tanush Packaging, Alwar, Rajasthan.",
  ],
  "rakhi-packaging": [
    "Rakhi Packaging in Alwar | Roli Chawal Sachets",
    "Rakhi packaging with roli, chawal, haldi and kesar sachets for Raksha Bandhan. Sealed, printed festive packs from Tanush Packaging, Alwar, Rajasthan.",
  ],
  "pooja-samagri-kit-packaging": [
    "Pooja Samagri Kit Packaging in Alwar | Tanush Packaging",
    "Pooja samagri kit packing with roli, chawal, haldi, kesar and more in separate sealed sachets. Festival and retail kits from Tanush Packaging, Alwar.",
  ],
};
