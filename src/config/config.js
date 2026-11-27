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


export const META = {
  home: [
    "Tanush Packaging Solution | Sachet & Mini Pack Packaging",
    "Tanush Packaging Solution offers custom sachet packaging, mini packs, powder packaging, spices packaging and customized packaging solutions in India.",
  ],

  about: [
    "About Us | Tanush Packaging Solution",
    "Learn about Tanush Packaging Solution, our packaging capabilities and our commitment to quality packaging solutions.",
  ],

  services: [
    "Packaging Services | Tanush Packaging Solution",
    "Explore our packaging services including sachet packing, powder packaging, spices packaging, mouth freshener packaging and mini packs.",
  ],

  contact: [
    "Contact Us | Tanush Packaging Solution",
    "Contact Tanush Packaging Solution for packaging enquiries, custom packaging requirements and quotations.",
  ],
};
