import small from '../assets/small.webp'
import sachet from '../assets/sachets.webp'
import masala from '../assets/masala.avif'
import mouthfreshner from '../assets/freshner.webp'
import rakhi from '../assets//rakhi.webp'
import poojakit from '../assets/poojakit.webp'

// Saare product pages ka data yahin se aata hai.
// Naya product add karna ho to bas ek naya object yahan add kar do.
// `image`: apni photo import karke daalo, jaise  image: sachetImg  (abhi null = placeholder)

export const PRODUCTS = [
  {
    slug: "sachet-packaging",
    name: "Sachet Packaging",
    metaTitle:
      "Sachet Packaging Manufacturer in Alwar | 1g to 50g | Tanush Packaging",
    metaDescription:
      "Custom sachet packaging from 1g to 50g for powders, spices, liquids and more. Printed sachets with your brand design. Get a quote from Tanush Packaging, Alwar.",
    h1: "Custom Sachet Packaging, 1g to 50g",
    intro:
      "We pack your product into neat, sealed, branded sachets. Whether you sell a spice blend, a health powder or a liquid sample, we fill and seal it in the size you need, with your design printed on the pouch.",
    image: small,
    features: [
      "Sachet sizes from 1g to 50g",
      "Printed with your logo and design",
      "Tight, leak-resistant sealing",
      "Suitable for powder, granules and liquid",
      "Small and bulk order quantities",
      "Tear notch for easy opening",
    ],
    uses: [
      "Spice and masala sachets",
      "Health and protein powder samples",
      "Shampoo and cosmetic sample packs",
      "Instant drink and tea mixes",
      "Detergent and cleaning powders",
    ],
    faqs: [
      [
        "What sachet sizes do you pack?",
        "We pack custom sachets from 1g to 50g. Tell us the weight you need and we will suggest the right pouch size.",
      ],
      [
        "Can you print my brand design on the sachet?",
        "Yes. Share your logo and artwork and we will print it on the sachet.",
      ],
      [
        "Do you take small orders?",
        "Contact us with your quantity and we will tell you what is possible for your product.",
      ],
      [
        "Which products can be packed in sachets?",
        "Powders, granules, spices, mouth fresheners and many liquid or paste products. Call us if you are unsure about yours.",
      ],
    ],
  },
  {
    slug: "mini-pack-packaging",
    name: "Mini Pack Packaging",
    metaTitle:
      "Mini Pack Packaging Service in Alwar | Small Packs | Tanush Packaging",
    metaDescription:
      "Mini pack packaging for trial packs, samples and low-price retail packs. Printed mini pouches filled and sealed by Tanush Packaging, Alwar, Rajasthan.",
    h1: "Mini Pack Packaging for Samples and Small Retail Packs",
    intro:
      "Mini packs help you launch a product at a low price point or hand out samples before a full-size sale. We fill, seal and finish small packs so they look good on a shop counter and are easy to carry.",
    image: sachet,
    features: [
      "Low-price retail packs",
      "Trial and sample packs",
      "Printed pouches with your branding",
      "Uniform filling weight",
      "Clean, secure sealing",
      "Ready for shop display and distribution",
    ],
    uses: [
      "Namkeen and snack mini packs",
      "Masala and condiment packs",
      "Sample packs for new product launches",
      "Promotional and giveaway packs",
      "Travel-size products",
    ],
    faqs: [
      [
        "What is a mini pack?",
        "A mini pack is a small-quantity pack, usually sold at a low price or given as a sample.",
      ],
      [
        "Can I use mini packs to test a new product?",
        "Yes. Many brands use them to let customers try a product before buying the full size.",
      ],
      [
        "Do you handle both filling and printing?",
        "Yes. We can handle the pouch design, filling and sealing together.",
      ],
    ],
  },
  {
    slug: "powder-packaging",
    name: "Powder Packaging",
    metaTitle:
      "Powder Packaging Service in Alwar | Sachets & Pouches | Tanush Packaging",
    metaDescription:
      "Powder packaging in sachets and pouches with accurate filling and clean sealing. Suitable for spice, health, food and household powders. Tanush Packaging, Alwar.",
    h1: "Powder Packaging in Sachets and Pouches",
    intro:
      "Powders need accurate filling and a good seal to stay fresh and avoid spillage. We pack fine and coarse powders into printed sachets and pouches, filled to the weight you specify.",
    image: masala,
    features: [
      "Accurate weight filling",
      "Dust-free, clean sealing",
      "Moisture-resistant pouch options",
      "Sachets and small pouches",
      "Custom printing",
      "Consistent quality across batches",
    ],
    uses: [
      "Ground spices and masala powders",
      "Health drink and protein powders",
      "Milk and tea premixes",
      "Cleaning and detergent powders",
      "Herbal and ayurvedic powders",
    ],
    faqs: [
      [
        "Can you pack very fine powders?",
        "Yes. Tell us the type of powder and we will choose the right pouch and sealing method.",
      ],
      [
        "How do you keep powder fresh?",
        "We use properly sealed pouches. For moisture-sensitive products, ask us about suitable material options.",
      ],
      [
        "Can I get my own brand printed?",
        "Yes, we print custom designs on sachets and pouches.",
      ],
    ],
  },
  {
    slug: "spices-packaging",
    name: "Spices Packaging",
    metaTitle:
      "Spices Packaging in Alwar | Masala & Chilli Flakes Packing | Tanush Packaging",
    metaDescription:
      "Spices packaging for masala, chilli flakes, turmeric and more. Printed sachets and pouches that keep aroma and freshness. Tanush Packaging, Alwar, Rajasthan.",
    h1: "Spices Packaging: Masala, Chilli Flakes and More",
    intro:
      "Spices lose aroma quickly when exposed to air. We pack them into sealed, printed sachets and pouches so the flavour stays intact from our unit to your customer's kitchen.",
    image: masala,
    features: [
      "Aroma-protecting sealed packs",
      "Whole, crushed and ground spices",
      "Chilli flakes packaging",
      "Sachets for retail and sampling",
      "Printed with your brand and product details",
      "Hygienic packing process",
    ],
    uses: [
      "Chilli flakes and oregano sachets",
      "Turmeric, coriander and red chilli powder",
      "Garam masala and chaat masala",
      "Pizza and pasta seasoning sachets",
      "Restaurant and cloud kitchen supply",
    ],
    faqs: [
      [
        "Do you pack chilli flakes?",
        "Yes, chilli flakes and similar seasonings are among the products we pack.",
      ],
      [
        "Can you pack both powder and whole spices?",
        "Yes. Share the spice type and pack weight you need.",
      ],
      [
        "Is packing available for restaurants and kitchens?",
        "Yes. We can prepare sachets for restaurants, cafes and food delivery brands.",
      ],
    ],
  },
  {
    slug: "mouth-freshener-packaging",
    name: "Mouth Freshener Packaging",
    metaTitle:
      "Mouth Freshener Packaging in Alwar | Sachets & Mini Packs | Tanush Packaging",
    metaDescription:
      "Mouth freshener packaging in printed sachets and mini packs: saunf, mukhwas, digestive mixes. Neat sealing and branding by Tanush Packaging, Alwar.",
    h1: "Mouth Freshener Packaging in Sachets and Mini Packs",
    intro:
      "Mukhwas and mouth fresheners sell best in small, attractive packs. We fill and seal them into printed sachets and mini packs that suit counter sales, restaurants and gifting.",
    image: mouthfreshner,
    features: [
      "Small single-serve sachets",
      "Mini packs for retail counters",
      "Even filling for dry mixes",
      "Printed with your brand",
      "Sealed to keep freshness",
      "Suitable for restaurants and hotels",
    ],
    uses: [
      "Saunf and sugar-coated saunf",
      "Mukhwas and digestive mixes",
      "Restaurant billing-counter packs",
      "Wedding and event hampers",
      "Retail shop counter display",
    ],
    faqs: [
      [
        "Which mouth fresheners can you pack?",
        "Saunf, mukhwas, digestive mixes and similar dry products.",
      ],
      [
        "Can I order for a restaurant or event?",
        "Yes. Tell us the quantity and design and we will plan the pack.",
      ],
      [
        "Do you offer custom branding?",
        "Yes. Your logo and design can be printed on the pack.",
      ],
    ],
  },
  {
    slug: "rakhi-packaging",
    name: "Rakhi Packaging",
    metaTitle:
      "Rakhi Packaging in Alwar | Roli Chawal Sachets | Tanush Packaging",
    metaDescription:
      "Rakhi packaging with roli chawal sachets and festive packs. Printed, ready-to-use rakhi pack components from Tanush Packaging, Alwar, Rajasthan.",
    h1: "Rakhi Packaging and Roli Chawal Sachets",
    intro:
      "Rakhi season needs fast, reliable packing. We prepare roli chawal sachets and festive pack components so your rakhis reach customers complete and ready to gift.",
    image: rakhi,
    features: [
      "Roli and chawal sachets",
      "Festive printed designs",
      "Neatly sealed small sachets",
      "Bulk supply for the rakhi season",
      "Easy to insert in rakhi packs",
      "Custom branding for sellers",
    ],
    uses: [
      "Roli chawal sachet inside rakhi packs",
      "Rakhi manufacturers and wholesalers",
      "Online rakhi sellers",
      "Gift shops and stationery stores",
      "Festival gift hampers",
    ],
    faqs: [
      [
        "What is roli chawal packaging?",
        "Roli (tilak powder) and chawal (rice) are packed in small sachets and placed inside rakhi packs.",
      ],
      [
        "Should I order early for Raksha Bandhan?",
        "Yes. Demand rises sharply before the festival, so place your order well in advance.",
      ],
      [
        "Can the sachet carry my brand name?",
        "Yes. We can print your brand or festive design.",
      ],
    ],
  },
  {
    slug: "pooja-samagri-kit-packaging",
    name: "Pooja Samagri Kit Packaging",
    metaTitle:
      "Pooja Samagri Kit Packaging in Alwar | Havan & Festival Kits | Tanush Packaging",
    metaDescription:
      "Pooja samagri kit packing: roli, chawal, haldi, kumkum, camphor and more in sachets and kits. Custom pooja kits for festivals, temples and retailers. Tanush Packaging, Alwar.",
    h1: "Pooja Samagri Kit Packaging",
    intro:
      "We pack pooja samagri into ready-to-use kits: roli, chawal, haldi, kumkum and other items in separate sealed sachets, assembled together so devotees get everything in one pack.",
    image: poojakit,
    features: [
      "Complete kits with items in separate sachets",
      "Festival-specific kits (Diwali, Navratri, Satyanarayan and more)",
      "Custom item lists as per your requirement",
      "Hygienic, sealed items",
      "Printed with your brand",
      "Bulk supply for retailers and temples",
    ],
    uses: [
      "Daily pooja kits for retail stores",
      "Festival and havan kits",
      "Online pooja samagri sellers",
      "Temple and event distribution",
      "Gift and prasad packs",
    ],
    faqs: [
      [
        "Can you make a kit with my own list of items?",
        "Yes. Share the items and quantities and we will pack them as a kit.",
      ],
      [
        "Are items packed separately?",
        "Yes. Each item goes in its own sealed sachet, and the sachets are assembled together in the kit.",
      ],
      [
        "Do you supply for festivals in bulk?",
        "Yes. Contact us early with your festival and quantity so we can plan.",
      ],
    ],
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
