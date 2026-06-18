"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Coffee, Utensils, Wifi, ParkingCircle } from "lucide-react";

const sampleHotels = [
  {
    id: 1,
    title: "The Kumbha Heritage Palace",
    rating: 5,
    category: "Luxury Palace Resort",
    price: "₹18,000 / Night",
    location: "Fort Road, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    description: "Experience royal Rajasthani hospitality with panoramic fort wall views, private infinity pools, and heritage dining suites.",
  },
  {
    id: 2,
    title: "Aravalli Forest Lodge",
    rating: 4,
    category: "Eco-Safari Resort",
    price: "₹12,500 / Night",
    location: "Tiger Sanctuary Buffer Zone, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    description: "Nestled within the dense Aravalli scrub forest, offering luxury canopy tents, wildlife guided tours, and organic farms.",
  },
  {
    id: 3,
    title: "The Lakhela Vista Resort",
    rating: 4,
    category: "Lakeside Resort",
    price: "₹9,800 / Night",
    location: "Lakhela Lake Front, Kumbhalgarh",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    description: "Stunning lakeside retreat featuring private balconies, wellness spa rooms, and a floating multi-cuisine lounge.",
  }
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-20">
      <div className="luxury-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 block mb-2">Heritage Stays</span>
          <h1 className="text-3xl md:text-5xl font-black font-heading text-foreground tracking-tight">
            Luxury Stays & Resorts
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Stay in style. Handpicked royal estates, boutique resorts, and jungle lodges in Kumbhalgarh.
          </p>
        </div>

        {/* Hotels List */}
        <div className="space-y-12">
          {sampleHotels.map((hotel, idx) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col lg:flex-row bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image side */}
              <div className="lg:w-2/5 relative min-h-[300px]">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-full object-cover img-zoom absolute inset-0"
                />
              </div>

              {/* Text side */}
              <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span className="text-xs font-semibold text-gold-500 tracking-wider uppercase">
                      {hotel.category}
                    </span>
                    <div className="flex items-center gap-0.5 text-gold-400">
                      {Array.from({ length: hotel.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-forest-650 dark:group-hover:text-forest-400 transition-colors">
                    {hotel.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 text-terracotta-400 shrink-0" />
                    <span>{hotel.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                    {hotel.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-xs border-t border-border/50 pt-4 mb-6">
                    <span className="flex items-center gap-1.5"><Wifi className="h-4 w-4 text-forest-550" /> High-speed WiFi</span>
                    <span className="flex items-center gap-1.5"><Utensils className="h-4 w-4 text-forest-550" /> Fine Dining</span>
                    <span className="flex items-center gap-1.5"><Coffee className="h-4 w-4 text-forest-550" /> Royal Breakfast</span>
                    <span className="flex items-center gap-1.5"><ParkingCircle className="h-4 w-4 text-forest-550" /> Valet Parking</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Average tariff</span>
                    <span className="text-xl font-bold text-forest-700 dark:text-gold-300 font-heading">
                      {hotel.price}
                    </span>
                  </div>
                  <button className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-forest-600 to-forest-750 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:from-forest-750 hover:to-forest-800">
                    Book Stay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
