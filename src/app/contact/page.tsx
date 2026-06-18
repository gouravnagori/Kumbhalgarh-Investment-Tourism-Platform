"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 2: Will integrate with backend API
    alert("Thank you! Your message has been received. Our team will respond within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background pt-8 pb-20">
      <div className="luxury-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-heading text-foreground tracking-tight">
            We&apos;d Love to <span className="text-gradient-gold">Hear From You</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-3 font-light">
            Whether you&apos;re an investor, tourist, or dealer — our team in Kumbhalgarh is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-md space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/30 transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/30 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/30 transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Inquiry Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/30 transition-all text-sm appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="investment">Land / Property Investment</option>
                    <option value="hotel">Hotel / Resort Listing</option>
                    <option value="dealer">Dealer Partnership</option>
                    <option value="tourism">Tourism / Visit Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief subject of your inquiry"
                  className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/30 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in Kumbhalgarh..."
                  className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/30 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Office Card */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold font-heading text-foreground mb-6">
                Our Kumbhalgarh Office
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-forest-50 dark:bg-forest-950/30 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-terracotta-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Address
                    </span>
                    <p className="text-sm text-foreground">
                      Near Kumbhalgarh Fort Gate,<br />
                      Kelwara, Rajsamand, Rajasthan 313325
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-forest-50 dark:bg-forest-950/30 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Phone
                    </span>
                    <p className="text-sm text-foreground">+91 98XXX XXXXX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-forest-50 dark:bg-forest-950/30 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Email
                    </span>
                    <p className="text-sm text-foreground">hello@kumbhalgarh.in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-forest-50 dark:bg-forest-950/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Working Hours
                    </span>
                    <p className="text-sm text-foreground">
                      Mon – Sat: 9:00 AM – 7:00 PM<br />
                      Sun: 10:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-forest-800 to-forest-950 border border-forest-700/50 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <MessageCircle className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold font-heading mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-sm text-white/70 mb-6 font-light">
                  Get instant responses from our investment managers. Send us a message directly.
                </p>
                <a
                  href="https://wa.me/919800000000?text=Hi, I'm interested in Kumbhalgarh properties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80"
                alt="Kumbhalgarh Fort aerial"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="h-8 w-8 text-terracotta-500 mb-3" />
                <span className="text-sm font-bold text-foreground font-heading">
                  Google Maps Integration
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  Coming in Phase 4
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
