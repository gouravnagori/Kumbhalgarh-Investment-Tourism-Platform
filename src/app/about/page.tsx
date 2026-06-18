"use client";

import { motion } from "framer-motion";
import { Shield, Users, Eye, Award, MapPin, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Verified & Transparent",
    description:
      "Every listed property undergoes on-ground verification — title check, survey mapping, and legal review — before it reaches our platform.",
  },
  {
    icon: Eye,
    title: "Local Intelligence",
    description:
      "Our team lives and works in Kumbhalgarh. We know every village, every landowner family, and every upcoming infrastructure project in the zone.",
  },
  {
    icon: Target,
    title: "Investment-Grade Data",
    description:
      "We provide proprietary Investment Scores, Tourism Impact Ratings, and ROI projections for every property — not just listing details.",
  },
  {
    icon: Users,
    title: "Dealer Ecosystem",
    description:
      "We empower local property dealers with technology — branded microsites, lead tracking, WhatsApp automation, and analytics dashboards.",
  },
];

const team = [
  {
    name: "The Founders",
    role: "Real Estate & Technology",
    description:
      "A team of Rajasthani heritage enthusiasts and technology professionals who believe Kumbhalgarh deserves a world-class digital presence.",
  },
  {
    name: "Local Property Experts",
    role: "On-Ground Verification",
    description:
      "A network of 25+ verified property dealers and land surveyors who provide accurate, real-time data across 50+ villages.",
  },
  {
    name: "Tourism Advisory Board",
    role: "Content & Curation",
    description:
      "Travel writers, historians, and wildlife experts who curate the tourism content, guides, and destination profiles.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2000&q=80"
            alt="Kumbhalgarh Fort aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="luxury-container relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 block mb-3">
              Our Story
            </span>
            <h1 className="text-foreground max-w-3xl">
              Building the Digital <span className="text-gradient-gold">Identity</span> of Kumbhalgarh
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-foreground mb-6">
                More Than a Listing Platform
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed font-light">
                <p>
                  Kumbhalgarh is one of India&apos;s most undervalued heritage destinations. With the world&apos;s second-longest continuous fort wall, a thriving wildlife sanctuary, and fertile Aravalli valleys, it has every ingredient for explosive growth.
                </p>
                <p>
                  Yet, until now, there was no single platform that brought together investors, tourists, dealers, and hoteliers in a cohesive digital ecosystem.
                </p>
                <p>
                  We are building that ecosystem — not as a simple listing directory, but as a premium, data-driven platform that treats Kumbhalgarh with the brand identity it deserves.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-border"
            >
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Kumbhalgarh Aravalli landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border-white/10 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-terracotta-400" />
                  <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Headquarters</span>
                </div>
                <span className="text-lg font-bold font-heading text-white">
                  Kumbhalgarh, Rajsamand, Rajasthan
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-zinc-50 dark:bg-zinc-950">
        <div className="luxury-container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-500 block mb-3">
              What Sets Us Apart
            </span>
            <h2 className="text-foreground">
              Our <span className="text-forest-600 dark:text-forest-400">Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-5 p-6 bg-card border border-border rounded-3xl shadow-sm hover:shadow-md hover:border-gold-400/20 transition-all duration-300 group"
                >
                  <div className="shrink-0 h-14 w-14 rounded-2xl bg-forest-50 dark:bg-forest-950/30 border border-border group-hover:border-forest-500/30 flex items-center justify-center transition-all">
                    <Icon className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-500 block mb-3">
              The People Behind Kumbhalgarh
            </span>
            <h2 className="text-foreground">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Award className="h-8 w-8 text-gold-300" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider block mb-4">
                  {member.role}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
