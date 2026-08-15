export const SITE_CONFIG = {
  name: 'Al-Fahad Travels',
  nameAr: 'الفهد للسفر والسياحة',
  legalName: 'Al-Fahad International Travel and Tourism',
  defaultLocale: 'en' as const,
  locales: ['en', 'ar'] as const,
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alfahhadtravel.com',
  contact: {
    email: 'info@alfahhad.com.sa',
    phones: ['+966112255558'],
    address: {
      en: 'Al-Izdehar District, Exit 9, Riyadh, Saudi Arabia',
      ar: 'حي الازدهار، مخرج 9، الرياض، المملكة العربية السعودية',
    },
    whatsapp: '+966112255558',
  },
} as const;

export type Locale = (typeof SITE_CONFIG.locales)[number];
