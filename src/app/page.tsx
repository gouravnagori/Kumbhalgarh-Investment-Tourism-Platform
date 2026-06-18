import { Hero } from "@/components/landing/hero";
import { InvestHighlights } from "@/components/landing/invest-highlights";
import { TourismHighlights } from "@/components/landing/tourism-highlights";
import { FeaturedShowcase } from "@/components/landing/featured-showcase";
import { FaqCta } from "@/components/landing/faq-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <InvestHighlights />
      <TourismHighlights />
      <FeaturedShowcase />
      <FaqCta />
    </div>
  );
}
