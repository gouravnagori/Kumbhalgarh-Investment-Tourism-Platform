// ─── Brand Colors (Rajasthani Heritage + Luxury) ───────────────────────────
export const COLORS = {
  forest: {
    50: "hsl(152, 44%, 95%)",
    100: "hsl(152, 44%, 85%)",
    200: "hsl(152, 44%, 70%)",
    300: "hsl(152, 44%, 55%)",
    400: "hsl(152, 44%, 40%)",
    500: "hsl(152, 44%, 28%)",
    600: "hsl(152, 44%, 22%)",
    700: "hsl(152, 44%, 18%)",
    800: "hsl(152, 44%, 12%)",
    900: "hsl(152, 44%, 8%)",
  },
  gold: {
    50: "hsl(42, 78%, 95%)",
    100: "hsl(42, 78%, 85%)",
    200: "hsl(42, 78%, 72%)",
    300: "hsl(42, 78%, 62%)",
    400: "hsl(42, 78%, 55%)",
    500: "hsl(42, 78%, 48%)",
    600: "hsl(42, 78%, 38%)",
    700: "hsl(42, 78%, 28%)",
    800: "hsl(42, 78%, 18%)",
    900: "hsl(42, 78%, 10%)",
  },
  terracotta: {
    50: "hsl(16, 65%, 95%)",
    100: "hsl(16, 65%, 85%)",
    200: "hsl(16, 65%, 72%)",
    300: "hsl(16, 65%, 60%)",
    400: "hsl(16, 65%, 52%)",
    500: "hsl(16, 65%, 42%)",
    600: "hsl(16, 65%, 32%)",
    700: "hsl(16, 65%, 22%)",
    800: "hsl(16, 65%, 15%)",
    900: "hsl(16, 65%, 8%)",
  },
} as const;

// ─── Navigation Links ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Invest", href: "/properties", highlight: true },
  { label: "Hotels & Resorts", href: "/hotels" },
  { label: "Tourism", href: "/tourism" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

// ─── Property Categories ───────────────────────────────────────────────────
export const PROPERTY_CATEGORIES = [
  { label: "Agricultural Land", slug: "agricultural-land", icon: "Sprout" },
  { label: "Commercial Land", slug: "commercial-land", icon: "Building2" },
  { label: "Residential Land", slug: "residential-land", icon: "Home" },
  { label: "Luxury Villa", slug: "luxury-villa", icon: "Castle" },
  { label: "Farm House", slug: "farm-house", icon: "TreePine" },
  { label: "Hotel", slug: "hotel", icon: "Hotel" },
  { label: "Resort", slug: "resort", icon: "Palmtree" },
  { label: "Homestay", slug: "homestay", icon: "House" },
  { label: "Wedding Venue", slug: "wedding-venue", icon: "PartyPopper" },
  { label: "Restaurant", slug: "restaurant", icon: "UtensilsCrossed" },
  { label: "Cafe", slug: "cafe", icon: "Coffee" },
  { label: "Adventure Camp", slug: "adventure-camp", icon: "Tent" },
  { label: "Camping Site", slug: "camping-site", icon: "Flame" },
  { label: "Investment Property", slug: "investment-property", icon: "TrendingUp" },
  { label: "Industrial Land", slug: "industrial-land", icon: "Factory" },
  { label: "Tourism Property", slug: "tourism-property", icon: "Map" },
] as const;

// ─── Statistics (Hero Section) ─────────────────────────────────────────────
export const HERO_STATS = [
  { value: "1000+", label: "Cr Investment Potential" },
  { value: "36", label: "km Fort Wall" },
  { value: "360+", label: "Ancient Temples" },
  { value: "150+", label: "Premium Properties" },
] as const;

// ─── Social Links ──────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { platform: "Instagram", href: "#", icon: "Instagram" },
  { platform: "Facebook", href: "#", icon: "Facebook" },
  { platform: "Twitter", href: "#", icon: "Twitter" },
  { platform: "YouTube", href: "#", icon: "Youtube" },
  { platform: "WhatsApp", href: "#", icon: "MessageCircle" },
] as const;

// ─── Site Metadata ─────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "Kumbhalgarh",
  tagline: "The Crown of the Aravallis",
  description:
    "Discover premium investment opportunities, luxury resorts, heritage tourism, and untouched landscapes in Kumbhalgarh, Rajasthan — home to the world's second-longest wall.",
  url: "https://kumbhalgarh.in",
  ogImage: "/og-image.jpg",
  creator: "Kumbhalgarh Investment & Tourism Platform",
  keywords: [
    "Kumbhalgarh",
    "Rajasthan",
    "investment",
    "tourism",
    "real estate",
    "luxury resort",
    "heritage property",
    "Kumbhalgarh Fort",
    "Tiger Reserve",
    "farmland",
    "wedding venue",
  ],
} as const;
