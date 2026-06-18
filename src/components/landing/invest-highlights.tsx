"use client";

import { motion } from "framer-motion";
import { TrendingUp, Coins, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const investmentReasons = [
  {
    icon: TrendingUp,
    title: "Unprecedented Land Appreciation",
    description: "Kumbhalgarh is witnessing a 25-30% year-on-year increase in agricultural and commercial land values, driven by expansion of the tourism corridor.",
  },
  {
    icon: Coins,
    title: "High ROI Hospitality Zone",
    description: "With over 85% hotel occupancy during peak season, resort and homestay investments offer robust rental yields and short payback periods.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Land Titles & Clearances",
    description: "We work directly with local families and authorities to curate lands with clear titles, demarcation, and verified registry entries.",
  },
  {
    icon: Award,
    title: "Eco-Tourism Friendly Subsidies",
    description: "The Rajasthan Tourism Policy provides significant subsidies, tax exemptions, and fast-track approvals for eco-friendly resort layouts.",
  },
];

export function InvestHighlights() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-400/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

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
              Strategic Investment Portal
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-foreground leading-tight"
            >
              Why Smart Investors are Choosing <span className="text-forest-600 dark:text-forest-400">Kumbhalgarh</span>
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-gold-400/50 hover:bg-gold-400/5 transition-all duration-300 text-sm font-semibold text-foreground group"
            >
              View Investment Land
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </motion.div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side (Left) - Asymmetric image layout */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group border border-border"
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Beautiful fertile agricultural lands in Kumbhalgarh valley"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />

              {/* Float Glass Card inside image */}
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border-white/10 text-white">
                <span className="text-gold-300 font-heading text-4xl font-bold block mb-1">
                  18.4%
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-white/70 block mb-2">
                  Average Annual Yield
                </span>
                <p className="text-xs text-white/60 leading-relaxed">
                  Projected ROI on agricultural investments converted for eco-tourism resorts.
                </p>
              </div>
            </motion.div>

            {/* Micro Badge floating */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 bg-white dark:bg-zinc-900 card-shadow border border-border px-5 py-3 rounded-2xl z-10"
            >
              <div className="h-10 w-10 rounded-full bg-forest-50 dark:bg-forest-950/30 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-forest-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Growth Zone</span>
                <span className="text-sm font-extrabold text-foreground">Tier-1 Tourism Hub</span>
              </div>
            </motion.div>
          </div>

          {/* Reasons List (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10">
            {investmentReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 h-14 w-14 rounded-2xl bg-secondary group-hover:bg-forest-50 dark:group-hover:bg-forest-950/20 border border-border group-hover:border-forest-500/25 flex items-center justify-center shadow-sm group-hover:shadow transition-all duration-300">
                    <Icon className="h-6 w-6 text-forest-600 dark:text-forest-400 group-hover:text-forest-500 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-forest-700 dark:group-hover:text-forest-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
