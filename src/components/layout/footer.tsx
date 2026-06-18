"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Heart,
  ChevronRight,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, PROPERTY_CATEGORIES } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

// Custom SVG components for brand icons that are missing in newer lucide-react versions
const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);


const footerSections = [
  {
    title: "Invest",
    links: [
      { label: "Agricultural Land", href: "/properties?category=agricultural-land" },
      { label: "Commercial Land", href: "/properties?category=commercial-land" },
      { label: "Luxury Villas", href: "/properties?category=luxury-villa" },
      { label: "Farm Houses", href: "/properties?category=farm-house" },
      { label: "Investment Properties", href: "/properties?category=investment-property" },
    ],
  },
  {
    title: "Stay",
    links: [
      { label: "Hotels", href: "/hotels" },
      { label: "Resorts", href: "/hotels?category=resort" },
      { label: "Homestays", href: "/hotels?category=homestay" },
      { label: "Wedding Venues", href: "/hotels?category=wedding-venue" },
      { label: "Camping Sites", href: "/hotels?category=camping-site" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Kumbhalgarh Fort", href: "/tourism/kumbhalgarh-fort" },
      { label: "Tiger Reserve", href: "/tourism/tiger-reserve" },
      { label: "Ancient Temples", href: "/tourism/temples" },
      { label: "Wildlife Safari", href: "/tourism/wildlife" },
      { label: "Travel Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "For Dealers", href: "/dealer-register" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialIcons = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: MessageCircle, href: "#", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative bg-forest-900 text-white/80 overflow-hidden">
      {/* Decorative gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-forest-600 via-gold-400 to-terracotta-400" />

      {/* Newsletter CTA Section */}
      <div className="luxury-container section-padding pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-gradient-to-br from-forest-700/50 to-forest-800/50 border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta-400/5 rounded-full blur-3xl" />

          <div className="flex-1 relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Stay Connected with Kumbhalgarh
            </h3>
            <p className="text-white/60 max-w-lg">
              Get exclusive investment opportunities, travel guides, and the latest property listings delivered to your inbox.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-3 relative z-10">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-72 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/30 transition-all text-sm"
            />
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-forest-900 font-semibold text-sm hover:from-gold-300 hover:to-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-400/25 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Grid */}
      <div className="luxury-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column - spans 2 cols on lg */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-gold-300 font-heading">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white font-heading leading-none">
                  Kumbhalgarh
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/80 font-medium">
                  Invest & Explore
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {SITE_CONFIG.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="h-4 w-4 text-white/50 group-hover:text-gold-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-sans">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="luxury-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-white/35">
            <span>© {new Date().getFullYear()} Kumbhalgarh. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-white/35">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-terracotta-400 fill-terracotta-400" />
            <span>in Rajasthan, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
