"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, User } from "lucide-react";
import Link from "next/link";

const blogCategories = [
  "All",
  "Investment",
  "Travel",
  "Wildlife",
  "History",
  "Festivals",
  "Food",
];

const featuredPost = {
  title: "Why Kumbhalgarh is Rajasthan's Next ₹1000 Cr Tourism Corridor",
  excerpt:
    "With the new national highway extension, the Rajasthan Government's eco-tourism subsidies, and growing international interest, Kumbhalgarh is poised to become the region's most valuable investment destination by 2028.",
  image:
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=80",
  category: "Investment",
  date: "June 12, 2026",
  author: "Team Kumbhalgarh",
  readTime: "8 min read",
  slug: "/blog/kumbhalgarh-tourism-corridor",
};

const posts = [
  {
    title: "Top 10 Agricultural Land Plots Under ₹2 Cr Near Kumbhalgarh Fort",
    excerpt:
      "Our handpicked selection of verified agricultural land parcels perfect for eco-resort development or long-term appreciation.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    category: "Investment",
    date: "June 8, 2026",
    readTime: "6 min read",
    slug: "/blog/top-10-agricultural-land",
  },
  {
    title: "The Complete Guide to Kumbhalgarh Fort: History, Architecture & Tips",
    excerpt:
      "Everything you need to know before visiting the fort — from the best time to visit to hidden chambers most tourists miss.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
    category: "History",
    date: "May 28, 2026",
    readTime: "12 min read",
    slug: "/blog/kumbhalgarh-fort-guide",
  },
  {
    title: "Wildlife Safari in Kumbhalgarh: Leopard Trails & Bird Watching",
    excerpt:
      "A comprehensive guide to planning your wildlife expedition in the Kumbhalgarh Wildlife Sanctuary — best routes, timings, and what to expect.",
    image:
      "https://images.unsplash.com/photo-1615959189197-48400dc26416?auto=format&fit=crop&w=800&q=80",
    category: "Wildlife",
    date: "May 20, 2026",
    readTime: "7 min read",
    slug: "/blog/wildlife-safari-guide",
  },
  {
    title: "Rajasthani Thali in Kumbhalgarh: Where to Eat Like Royalty",
    excerpt:
      "From dal baati churma to laal maas — discover the most authentic and heritage dining experiences around the fort.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    category: "Food",
    date: "May 15, 2026",
    readTime: "5 min read",
    slug: "/blog/rajasthani-food-guide",
  },
  {
    title: "Monsoon Magic: Best Time to See Kumbhalgarh in Its Full Glory",
    excerpt:
      "The Aravallis transform into a lush green paradise during July-September. Here's why monsoon is the secret season for Kumbhalgarh.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    category: "Travel",
    date: "May 5, 2026",
    readTime: "4 min read",
    slug: "/blog/monsoon-kumbhalgarh",
  },
  {
    title: "Dussehra at Kumbhalgarh: A Festival of Light and Sound",
    excerpt:
      "The annual Kumbhalgarh Festival features heritage light-and-sound shows, folk performances, and a spectacular fireworks display from the fort walls.",
    image:
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    date: "April 28, 2026",
    readTime: "6 min read",
    slug: "/blog/dussehra-festival",
  },
];

import { useState } from "react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-8 pb-20">
      <div className="luxury-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 block mb-2">
            Stories & Insights
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-heading text-foreground tracking-tight">
            The Kumbhalgarh Journal
          </h1>
          <p className="text-muted-foreground text-sm mt-2 font-light">
            Investment analysis, travel guides, heritage stories, and local culture
            — curated by our editorial team on the ground.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="group mb-16"
        >
          <Link
            href={featuredPost.slug}
            className="flex flex-col lg:flex-row bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-gold-400/20 transition-all duration-300"
          >
            <div className="lg:w-3/5 relative min-h-[300px] lg:min-h-[400px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover img-zoom absolute inset-0"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-terracotta-500/90 text-white rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground mb-4 group-hover:text-forest-600 dark:group-hover:text-forest-400 transition-colors leading-snug">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredPost.readTime}
                </span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-6">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-forest-600 border-forest-600 text-white shadow-md"
                  : "border-border text-muted-foreground bg-card hover:bg-accent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={post.slug}
                className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-gold-400/20 transition-all duration-300 h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-forest-950/80 text-gold-300 rounded-full border border-gold-400/20 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold font-heading text-foreground mb-3 group-hover:text-forest-600 dark:group-hover:text-forest-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1 font-light">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
