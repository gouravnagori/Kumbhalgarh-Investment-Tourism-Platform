"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight, Shield } from "lucide-react";

const faqs = [
  {
    question: "Can outsiders buy agricultural land in Rajasthan?",
    answer: "Yes, anyone from India can purchase agricultural land in Rajasthan. However, non-farmers must obtain permission to convert the land use (under Section 90-A of the Land Revenue Act) for non-agricultural activities like resorts, schools, or housing. We assist with the complete conversion and registry processes.",
  },
  {
    question: "Why invest in Kumbhalgarh instead of Udaipur?",
    answer: "While Udaipur is a saturated market with high entry costs, Kumbhalgarh offers pristine, untouched landscapes at a fraction of the cost, combined with exponential tourism growth. With the construction of the new direct highways and rising resort demand, capital appreciation in Kumbhalgarh is outpacing Udaipur by 12-15% annually.",
  },
  {
    question: "How does the Kumbhalgarh Tiger Sanctuary status affect properties?",
    answer: "Certain zones adjacent to the sanctuary fall under the Eco-Sensitive Zone (ESZ). While strict construction rules apply within 1km of the forest boundary, properties outside this buffer benefit enormously from the surging interest in wildlife safari tourism, boosting demand for eco-lodges and luxury camps.",
  },
  {
    question: "What is the typical ROI timeline for resorts here?",
    answer: "A well-managed luxury resort or boutique homestay in Kumbhalgarh typically reaches break-even within 3 to 4 years. Average occupancy rates are 85% on weekends year-round, and over 90% during the peak winter season (October to March).",
  },
];

export function FaqCta() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-terracotta-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-400/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* FAQ Column (Left - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-500 mb-3 block">
                Information Hub
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion defaultValue={["item-0"]} className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <AccordionItem
                    value={`item-${idx}`}
                    className="border border-border rounded-2xl p-4 bg-card/50 hover:bg-card hover:border-gold-400/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-2 pr-8 focus-visible:ring-0">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-forest-500 shrink-0" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-3 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* CTA Column (Right - 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-gradient-to-br from-forest-800 to-forest-950 border border-forest-700/50 p-8 md:p-10 text-white overflow-hidden shadow-2xl"
            >
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-terracotta-400/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Shield className="h-10 w-10 text-gold-400 mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">
                  Looking for a Custom Consultation?
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-8 font-light">
                  Our investment managers specialize in land acquisition, legal due diligence, and construction clearances in the Kumbhalgarh zone. Schedule a private site visit.
                </p>

                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 font-bold shadow-lg hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    Contact Our Experts
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="text-center text-[10px] text-white/50 tracking-wider">
                    NO OBLIGATION • 100% CONFIDENTIALITY GUARANTEED
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
