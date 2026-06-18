"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Maximize2, Sparkles, Filter, List, Map } from "lucide-react";
import { useState } from "react";

const sampleProperties = [
  {
    id: 1,
    title: "The Aravalli Vista Farms",
    category: "Agricultural Land",
    price: "₹4.50 Cr",
    area: "12 Bigah",
    location: "Kelwara Valley, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    score: "9.4",
    tag: "High ROI Potential",
  },
  {
    id: 2,
    title: "Royal Heritage Resort Site",
    category: "Commercial Land",
    price: "₹12.00 Cr",
    area: "4.5 Acres",
    location: "Fort Road, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    score: "9.8",
    tag: "Prime Location",
  },
  {
    id: 3,
    title: "Fort View Luxury Villa Plot",
    category: "Residential Land",
    price: "₹1.80 Cr",
    area: "12,000 Sq.Ft.",
    location: "Club Mahindra Road, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    score: "8.9",
    tag: "Scenic Ridge",
  },
  {
    id: 4,
    title: "The Sunset Sanctuary Resort",
    category: "Hotel & Resort",
    price: "₹8.50 Cr",
    area: "18 Rooms",
    location: "Wildlife Forest Buffer, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    score: "9.2",
    tag: "Running Property",
  },
  {
    id: 5,
    title: "Aravalli Eco-Farm Plots",
    category: "Farm House",
    price: "₹2.20 Cr",
    area: "2 Bigha",
    location: "Lakhela Lake Road, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    score: "9.1",
    tag: "Lakeside View",
  },
  {
    id: 6,
    title: "National Highway Commercial Corner",
    category: "Commercial Land",
    price: "₹6.80 Cr",
    area: "1.2 Acres",
    location: "NH-162 Extension, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1507530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    score: "9.3",
    tag: "Corner Plot",
  }
];

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Agricultural Land", "Commercial Land", "Residential Land", "Hotel & Resort", "Farm House"];

  const filteredProperties = selectedCategory === "All"
    ? sampleProperties
    : sampleProperties.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-8 pb-20">
      <div className="luxury-container">
        {/* Breadcrumb / Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 block mb-2">Investment Portal</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-foreground tracking-tight">
              Invest in Kumbhalgarh
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Verified agricultural land, commercial plots, and heritage hospitality properties.
            </p>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center gap-2 bg-secondary p-1 rounded-xl border border-border">
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "list"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="h-3.5 w-3.5" />
              List View
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "map"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Map className="h-3.5 w-3.5" />
              Interactive Map
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                selectedCategory === cat
                  ? "bg-forest-600 border-forest-600 text-white shadow-md"
                  : "border-border text-muted-foreground bg-card hover:bg-accent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Grid content */}
        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-gold-400/20 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-forest-950/80 text-gold-300 rounded-full border border-gold-400/20 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-black/60 border border-gold-400/30 text-gold-400 rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Sparkles className="h-3 w-3 fill-gold-400 text-gold-400" />
                      Score: {item.score}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-terracotta-500 uppercase tracking-wider block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-3 group-hover:text-forest-600 dark:group-hover:text-forest-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-6 text-xs text-muted-foreground flex-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-terracotta-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="h-3.5 w-3.5 text-forest-500 shrink-0" />
                      <span>{item.area}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Price on request</span>
                      <span className="text-xl font-black text-forest-750 dark:text-gold-300 font-heading">
                        {item.price}
                      </span>
                    </div>
                    <button className="px-4 py-2 text-xs font-bold bg-secondary hover:bg-accent text-foreground rounded-full transition-colors border border-border">
                      View details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-border relative bg-secondary flex items-center justify-center">
            {/* Background design representing a map */}
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-8 text-center text-white/80">
              <Map className="h-16 w-16 text-gold-400 mb-4 animate-pulse" />
              <h2 className="text-2xl font-bold font-heading mb-2">Interactive Geographic Map</h2>
              <p className="text-sm text-white/50 max-w-md">
                In Phase 4, this section will render a styled Google Map marked with satellite boundaries, water tables, and elevation contour layers for premium land search.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
