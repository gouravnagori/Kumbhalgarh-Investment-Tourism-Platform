"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Maximize2, Star } from "lucide-react";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    title: "The Aravalli Vista Farms",
    category: "Agricultural Land",
    price: "₹4.50 Cr",
    area: "12 Bigah",
    location: "Kelwara Valley, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    investmentScore: "9.4",
    tag: "High ROI Potential",
    isLarge: true,
  },
  {
    id: 2,
    title: "Royal Heritage Resort Site",
    category: "Commercial Land",
    price: "₹12.00 Cr",
    area: "4.5 Acres",
    location: "Fort Road, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    investmentScore: "9.8",
    tag: "Prime Location",
    isLarge: false,
  },
  {
    id: 3,
    title: "Fort View Luxury Villa Plot",
    category: "Residential Land",
    price: "₹1.80 Cr",
    area: "12,000 Sq.Ft.",
    location: "Club Mahindra Road, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    investmentScore: "8.9",
    tag: "Scenic Ridge",
    isLarge: false,
  },
  {
    id: 4,
    title: "The Sunset Sanctuary Resort",
    category: "Hotel & Resort",
    price: "₹8.50 Cr",
    area: "18 Rooms",
    location: "Wildlife Forest Buffer, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    investmentScore: "9.2",
    tag: "Running Property",
    isLarge: false,
  },
];

export function FeaturedShowcase() {
  return (
    <section className="section-padding bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="luxury-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-500 mb-3"
            >
              Curated Opportunities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-foreground leading-tight"
            >
              Featured Estates & <span className="text-gradient-gold">Investment Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex shrink-0"
          >
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-forest-600 to-forest-700 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:from-forest-700 hover:to-forest-800 transition-all duration-300 group cursor-pointer"
            >
              Browse All Listings
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Card - takes 2 cols on lg, 1st child */}
          <div className="lg:col-span-2">
            {featuredItems.filter(item => item.isLarge).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-border bg-card flex flex-col h-full min-h-[500px]"
              >
                {/* Image background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                </div>

                {/* Badges top */}
                <div className="relative z-10 p-6 md:p-8 flex items-center justify-between w-full">
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-forest-600/90 text-white rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-gold-400 border border-gold-400/30 backdrop-blur-sm text-xs font-semibold">
                    <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                    <span>Investment Score: {item.investmentScore}</span>
                  </div>
                </div>

                {/* Content bottom */}
                <div className="relative z-10 mt-auto p-6 md:p-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-md">
                    <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60 text-xs">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-terracotta-400" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="h-3.5 w-3.5 text-forest-400" />
                        {item.area}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-xs uppercase tracking-widest text-white/50">Asking Price</span>
                    <span className="text-2xl md:text-3xl font-extrabold text-gold-300 font-heading">
                      {item.price}
                    </span>
                    <Link
                      href={`/properties/${item.id}`}
                      className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-xs transition-all duration-300 group/btn cursor-pointer"
                    >
                      Inquire Details
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Small Cards Column */}
          <div className="flex flex-col gap-8">
            {featuredItems.filter(item => !item.isLarge).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-border bg-card flex flex-col min-h-[280px] lg:flex-1"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                </div>

                {/* Category Badge top */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-forest-600/90 text-white rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold text-gold-300 bg-black/55 border border-gold-400/20 px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-gold-400" />
                    Score: {item.investmentScore}
                  </span>
                </div>

                {/* Content bottom */}
                <div className="relative z-10 mt-auto p-5 text-white">
                  <h3 className="text-lg font-bold font-heading mb-1.5 text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-white/60 text-[11px]">
                      <MapPin className="h-3 w-3 text-terracotta-400 shrink-0" />
                      <span className="truncate max-w-[140px]">{item.location}</span>
                    </div>
                    <span className="text-base font-bold text-gold-300 font-heading">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
