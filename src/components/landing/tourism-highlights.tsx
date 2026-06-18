"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import Link from "next/link";

const tourismSpots = [
  {
    title: "Kumbhalgarh Fort",
    subtitle: "A UNESCO World Heritage Site",
    description: "Encircle the fortress featuring the world's second-longest continuous wall, spanning 36 kilometers of rugged Aravalli ridges.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    link: "/tourism/kumbhalgarh-fort",
    badge: "History"
  },
  {
    title: "Tiger Reserve Sanctuary",
    subtitle: "Untouched Wildlife Sanctuary",
    description: "Home to panthers, wolves, leopards, and the newly designated Tiger Corridor — a hotspot for high-end safari lodges.",
    image: "https://images.unsplash.com/photo-1615959189197-48400dc26416?auto=format&fit=crop&w=1200&q=80",
    link: "/tourism/tiger-reserve",
    badge: "Wildlife"
  },
  {
    title: "Ranakpur Jain Temple",
    subtitle: "Architectural Wonder",
    description: "A short drive from the fort lies this marvel of 1,444 uniquely carved marble pillars — a massive magnet for global spiritual tourism.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    link: "/tourism/temples",
    badge: "Architecture"
  }
];

export function TourismHighlights() {
  return (
    <section className="section-padding bg-forest-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-400/5 rounded-full blur-3xl" />

      <div className="luxury-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            <Compass className="h-3 w-3" />
            Explore the Sanctuary
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white leading-tight font-heading font-bold"
          >
            A Tapestry of Heritage, Nature, and Adventure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base md:text-lg mt-4 max-w-2xl font-light"
          >
            Kumbhalgarh is not just a real estate hub; it is a legendary destination drawing thousands of global explorers daily. Here is what makes this land timeless.
          </motion.p>
        </div>

        {/* Spot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {tourismSpots.map((spot, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-400/40 transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-forest-950/80 text-gold-300 rounded-full border border-gold-400/20 backdrop-blur-sm">
                    {spot.badge}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="flex-1 flex flex-col p-6 lg:p-8">
                <div className="mb-4">
                  <span className="text-xs text-gold-400 font-semibold tracking-wider block mb-1">
                    {spot.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {spot.title}
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-8 font-light flex-1">
                  {spot.description}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={spot.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-gold-400 transition-colors group/link cursor-pointer"
                  >
                    Discover More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform text-gold-400" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
