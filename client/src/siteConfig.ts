/**
 * Centralized site configuration and NAP (Name, Address, Phone) baseline.
 * 
 * Verified Business Information:
 * - Canonical domain: https://www.ahsheatingair.com (enforcing www + HTTPS)
 * - Official Business NAP: Registered on Google Business Profile & Florida HVAC license CAC1817865
 * - Primary Official Business Phone: (352) 847-1377 (confirmed original business phone)
 */

export const SITE_CONFIG = {
  // Canonical host
  canonicalDomain: "https://www.ahsheatingair.com",

  // Business Identity (LocalBusiness NAP Baseline)
  brandName: "AHS Heating & Air",
  legalName: "AHS, LLC.",
  license: "CAC1817865",
  licenseFull: "Florida Certified HVAC Contractor #CAC1817865",
  experienceYears: 28,

  // Addresses & Physical Location
  address: {
    street: "7 Hemlock Terrace Ln",
    city: "Ocala",
    state: "FL",
    zip: "34472",
    country: "US",
  },
  geo: {
    latitude: 29.17025,
    longitude: -82.15693,
  },
  mapsUrl: "https://maps.app.goo.gl/9pPgTumWVu12mjkA7",

  // Operating Hours
  hours: "7:00 AM – 7:00 PM",
  daysOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

  // Phone Architecture (Confirmed Original Business Number across all pages):
  primaryPhone: "(352) 847-1377",
  primaryTel: "tel:+13528471377",
  activeDisplayPhone: "(352) 847-1377",
  activeDisplayTel: "tel:+13528471377",

  // Social / Web Mentions
  sameAs: [
    "https://maps.app.goo.gl/9pPgTumWVu12mjkA7",
  ],

  // Rating & Review Proof
  rating: {
    score: "5.0",
    reviewCount: "17", // Verified real customer reviews showcased on the site
  },
};
