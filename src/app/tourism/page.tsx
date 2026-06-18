"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Mountain, TreePine, Landmark, Camera } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    title: "Kumbhalgarh Fort",
    subtitle: "UNESCO World Heritage",
    description:
      "Walk along the world's second-longest continuous wall spanning 36 km across the Aravalli ridges. The Badal Mahal palace offers breathtaking sunset views over the Marwar plains.",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    icon: Landmark,
    link: "/tourism/kumbhalgarh-fort",
    stats: [
      { label: "Wall Length", value: "36 km" },
      { label: "Built In", value: "15th Century" },
      { label: "Temples Inside", value: "360+" },
    ],
  },
  {
    title: "Kumbhalgarh Wildlife Sanctuary",
    subtitle: "Tiger Reserve & Eco-Tourism",
    description:
      "A 578 sq km sanctuary home to leopards, wolves, sloth bears, and the recently designated Tiger Corridor. Experience guided jungle safaris, night trails, and birdwatching expeditions.",
    image:
      "https://images.unsplash.com/photo-1615959189197-48400dc26416?auto=format&fit=crop&w=1200&q=80",
    icon: TreePine,
    link: "/tourism/tiger-reserve",
    stats: [
      { label: "Area", value: "578 km²" },
      { label: "Species", value: "200+" },
      { label: "Safari Routes", value: "4" },
    ],
  },
  {
    title: "Ranakpur Jain Temple",
    subtitle: "Architectural Marvel",
    description:
      "Marvel at the 15th-century Chaturmukha Dharana Vihara with 1,444 uniquely carved marble pillars — no two alike. A pilgrimage site that attracts historians, architects, and spiritual seekers worldwide.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    icon: Mountain,
    link: "/tourism/temples",
    stats: [
      { label: "Carved Pillars", value: "1,444" },
      { label: "Distance", value: "50 km" },
      { label: "Built In", value: "1446 AD" },
    ],
  },
];

const activities = [
  {
    title: "Heritage Walk & Fort Tour",
    description: "Guided exploration through ancient fort corridors, secret passages, and the legendary Badal Mahal.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Jungle Safari & Wildlife Tracking",
    description: "Open-top jeep safaris through the sanctuary with expert naturalist guides for dawn and dusk game drives.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Horseback Trail Through the Hills",
    description: "Ride through scenic Aravalli ridges and tribal villages on Marwari steeds, ending at sunset viewpoints.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Stargazing in the Dark Sky Reserve",
    description: "Minimal light pollution makes Kumbhalgarh one of Rajasthan's best stargazing locations.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TourismPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2000&q=80"
            alt="Kumbhalgarh panoramic view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="luxury-container relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 border border-terracotta-500/20 text-terracotta-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Compass className="h-3 w-3" />
              Explore Kumbhalgarh
            </div>
            <h1 className="text-foreground max-w-3xl">
              Discover the <span className="text-gradient-gold">Untold Story</span> of the Aravallis
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4 font-light">
              Heritage forts, wildlife sanctuaries, sacred temples, and adventure trails — all within a 50-kilometer radius of India&apos;s best-kept secret.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destination Deep Dives */}
      <section className="section-padding">
        <div className="luxury-container space-y-24">
          {destinations.map((dest, idx) => {
            const Icon = dest.icon;
            const isReversed = idx % 2 !== 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-border ${isReversed ? "lg:[direction:ltr]" : ""}`}>
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex gap-6">
                      {dest.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <span className="text-lg md:text-xl font-bold text-gold-300 font-heading block">
                            {stat.value}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-forest-50 dark:bg-forest-950/30 border border-border flex items-center justify-center">
                      <Icon className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-terracotta-500 uppercase tracking-widest">
                        {dest.subtitle}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-foreground mb-6">{dest.title}</h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 font-light">
                    {dest.description}
                  </p>
                  <Link
                    href={dest.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-forest-600 to-forest-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    Explore This Destination
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-zinc-50 dark:bg-zinc-950">
        <div className="luxury-container">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-500 block mb-3">
              Adventures & Experiences
            </span>
            <h2 className="text-foreground">
              Things to Do in <span className="text-forest-600 dark:text-forest-400">Kumbhalgarh</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-gold-400/20 transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-3 right-3">
                    <Camera className="h-5 w-5 text-white/70 drop-shadow-md" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold font-heading text-foreground mb-2 group-hover:text-forest-600 dark:group-hover:text-forest-400 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
