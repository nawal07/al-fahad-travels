import type { SEOContent } from "@/types/content";

export const pagesSEO = {
  about: {
    title: {
      en: "About Al-Fahad Travels | Premium Saudi Travel",
      ar: "من نحن | الفهد للسفر والسياحة",
    },
    description: {
      en: "Discover Al-Fahad Travels — leading tourism in Saudi Arabia with innovation, quality, and Vision 2030 alignment.",
      ar: "تعرف على الفهد للسفر والسياحة — رائدة في المملكة بالابتكار والجودة ومواكبة رؤية 2030.",
    },
  },
  services: {
    title: {
      en: "Travel Services | Flights, Hotels, VIP & MICE",
      ar: "خدماتنا | طيران، فنادق، VIP وفعاليات",
    },
    description: {
      en: "Comprehensive travel services: flight ticketing, luxury stays, tours, visas, insurance, corporate travel, and VIP experiences.",
      ar: "خدمات سفر شاملة: تذاكر طيران، إقامة فاخرة، جوالات، تأشيرات، تأمين، قطاع الأعمال وVIP.",
    },
  },
  partners: {
    title: {
      en: "Our Partners & Clients | Al-Fahad Travels",
      ar: "شركاؤنا وعملاؤنا | الفهد للسفر والسياحة",
    },
    description: {
      en: "Trusted by leading organizations across Saudi Arabia and the region.",
      ar: "موثوقون من قبل مؤسسات رائدة في المملكة والمنطقة.",
    },
  },
  contact: {
    title: {
      en: "Contact Al-Fahad Travels | Riyadh Travel Experts",
      ar: "اتصل بنا | الفهد للسفر والسياحة الرياض",
    },
    description: {
      en: "Reach Al-Fahad Travels in Riyadh for bespoke travel planning. Email, phone, and WhatsApp support.",
      ar: "تواصل مع الفهد للسفر والسياحة في الرياض لتخطيط رحلاتك. بريد إلكتروني، هاتف وواتساب.",
    },
  },
  blog: {
    title: {
      en: "Travel Insights | Al-Fahad Travels Blog",
      ar: "رؤى السفر | مدونة الفهد للسفر والسياحة",
    },
    description: {
      en: "Destination guides, travel tips, and luxury tourism insights from Al-Fahad Travels.",
      ar: "أدلة الوجهات ونصائح السفر ورؤى السياحة الفاخرة من الفهد للسفر والسياحة.",
    },
    noIndex: true,
  },
  inquiry: {
    title: {
      en: "Travel Inquiry | Plan Your Journey",
      ar: "استفسار سفر | خطط رحلتك",
    },
    description: {
      en: "Submit your travel inquiry for flights, packages, and bespoke itineraries.",
      ar: "أرسل استفسارك للرحلات والبرامج والخطط المخصصة.",
    },
    noIndex: true,
  },
} as const satisfies Record<string, SEOContent>;
