/**
 * Remote image URLs verified against Unsplash (avoid 404s from removed photos).
 * Format: auto=format&fit=crop for reliable Next.js Image optimization.
 */
const u = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMAGES = {
  hero: '/brand/home.png',
  brand: {
    /** Full logo (mark + Arabic wordmark), for light backgrounds */
    logo: '/brand/logo.png',
    /** Full logo with white wordmark, for dark backgrounds */
    logoLight: '/brand/logo-light.png',
    /** Mark only (the "A" with arrow) */
    mark: '/brand/logo-mark.png',
  },
  destinations: {
    alula: u('1506905925346-21bda4d32df4', 800),
    dubai: u('1512453979798-5ea266f8880c', 800),
    paris: u('1502602898657-3e91760cbb34', 800),
    riyadh: u('1526778548025-fa2f459cd5c1', 800),
    redSea: u('1544551763-46a013bb70d5', 800),
    switzerland: u('1476514525535-07fb3b4ae5f1', 800),
  },
  luxuryBanner: u('1476514525535-07fb3b4ae5f1', 1600, 85),
  gallery: {
    travel: u('1488646953014-85cb44e25828', 900),
    dubai: u('1512453979798-5ea266f8880c', 600),
    resort: u('1566073771259-6a8506099945', 600),
    flight: u('1436491865332-7a61a109cc05', 600),
    beach: u('1520250497591-112f2f40a3f4', 900),
  },
} as const;
