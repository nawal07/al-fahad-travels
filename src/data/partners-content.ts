/**
 * Partner logos live in `public/partners/{id}.svg` (official logos via Wikimedia Commons).
 * If a logo is missing or fails to load, an initials placeholder is shown.
 */
export type PartnerSlot = {
  id: string;
  name: string;
  /** e.g. `/partners/saudia.svg` — optional until assets are added */
  logo?: string;
  category: "airline" | "hotel" | "government" | "corporate";
};

export const partnerCategories = {
  airline: { en: "Airlines", ar: "شركات الطيران" },
  hotel: { en: "Hotels", ar: "الفنادق" },
  government: { en: "Government", ar: "حكومي" },
  corporate: { en: "Corporate", ar: "شركات" },
} as const;

/** Partner grid, grouped by category on the Partners page */
export const partnerSlots: PartnerSlot[] = [
  { id: "saudia", name: "Saudia", category: "airline", logo: "/partners/saudia.svg" },
  { id: "emirates", name: "Emirates", category: "airline", logo: "/partners/emirates.svg" },
  { id: "qatar", name: "Qatar Airways", category: "airline", logo: "/partners/qatar.svg" },
  { id: "etihad", name: "Etihad", category: "airline", logo: "/partners/etihad.svg" },
  { id: "marriott", name: "Marriott", category: "hotel", logo: "/partners/marriott.svg" },
  { id: "hilton", name: "Hilton", category: "hotel", logo: "/partners/hilton.svg" },
  { id: "accor", name: "Accor", category: "hotel", logo: "/partners/accor.svg" },
  { id: "hyatt", name: "Hyatt", category: "hotel", logo: "/partners/hyatt.svg" },
  { id: "tourism", name: "Ministry of Tourism", category: "government", logo: "/partners/tourism.svg" },
  { id: "neom", name: "NEOM", category: "corporate", logo: "/partners/neom.svg" },
  { id: "aramco", name: "Aramco", category: "corporate", logo: "/partners/aramco.svg" },
  { id: "stc", name: "stc", category: "corporate", logo: "/partners/stc.svg" },
];
