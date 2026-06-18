"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Compass, ChevronDown } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"invest" | "explore">("invest");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "invest") {
      window.location.href = `/properties?search=${encodeURIComponent(searchQuery)}`;
    } else {
      window.location.href = `/hotels?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Image with parallax overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2000&q=80"
            alt="Majestic Kumbhalgarh Fort and Aravalli Hills"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="luxury-container relative z-10 w-full flex flex-col items-center text-center mt-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-gold-400/20 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-8"
        >
          <Compass className="h-3 w-3 animate-spin-slow" />
          The Crown of the Aravallis
        </motion.div>

        {/* Cinematic Headline */}
        <h1 className="max-w-4xl text-white font-heading font-black leading-tight tracking-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Where Heritage Meets
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-gradient-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 filter drop-shadow-md"
          >
            Legendary Growth
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-white/75 text-base sm:text-lg md:text-xl font-light mb-12 px-4"
        >
          Discover premium agricultural land, commercial properties, and luxury hotels around the historical fort of Kumbhalgarh — home to the world's second-longest continuous wall.
        </motion.p>

        {/* Interactive Search Bar Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-3xl px-4 mb-16"
        >
          <div className="glass rounded-3xl p-3 md:p-4 shadow-2xl border border-white/10 backdrop-blur-md">
            {/* Tabs */}
            <div className="flex gap-2 mb-3 px-2">
              <button
                onClick={() => setActiveTab("invest")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                  activeTab === "invest"
                    ? "bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                Invest in Land
              </button>
              <button
                onClick={() => setActiveTab("explore")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                  activeTab === "explore"
                    ? "bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                Explore Resorts
              </button>
            </div>

            {/* Search Input Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative flex items-center">
                <MapPin className="absolute left-4 h-5 w-5 text-terracotta-400" />
                <input
                  type="text"
                  placeholder={
                    activeTab === "invest"
                      ? "Search Agricultural Land, Farms, Commercial Plots..."
                      : "Search Heritage Hotels, Luxury Resorts, Homestays..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:bg-white/10 transition-all text-sm font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 font-bold shadow-lg hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
              >
                Find Opportunities
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Live Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full max-w-5xl border-t border-white/10 pt-8"
        >
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-gradient-gold font-heading mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/55 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/60 font-bold">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border-2 border-white/30 flex justify-center p-1 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })}
        >
          <ChevronDown className="h-4 w-4 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
