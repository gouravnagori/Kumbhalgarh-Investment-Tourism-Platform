"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass shadow-sm"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="luxury-container flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div 
              className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300"
              style={{ position: "relative" }}
            >
              <span className="text-lg font-bold text-gold-300 font-heading">K</span>
              <div 
                className="absolute h-2.5 w-2.5 rounded-full bg-gold-400 border-2 border-background" 
                style={{ position: "absolute", top: "-2px", right: "-2px" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground font-heading leading-none">
                Kumbhalgarh
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Invest & Explore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                  link.highlight
                    ? "text-forest-700 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-900/30"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                )}
                style={{ position: "relative" }}
              >
                {link.label}
                {link.highlight && (
                  <span 
                    className="absolute h-1.5 w-1.5 rounded-full bg-gold-400" 
                    style={{ position: "absolute", top: "2px", right: "2px" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/properties"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              Explore Properties
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="lg:hidden h-10 w-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center">
                        <span className="text-sm font-bold text-gold-300 font-heading">K</span>
                      </div>
                      <span className="text-base font-bold font-heading">Kumbhalgarh</span>
                    </Link>
                  </div>

                  {/* Mobile Nav Links */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-1">
                      {NAV_LINKS.map((link, i) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors",
                              link.highlight
                                ? "text-forest-700 dark:text-forest-300 bg-forest-50/50 dark:bg-forest-900/20"
                                : "text-foreground/80 hover:bg-accent/50"
                            )}
                          >
                            {link.label}
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border space-y-4">
                      <Link
                        href="/login"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center py-3 px-4 rounded-xl text-sm font-medium border border-border hover:bg-accent transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/properties"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center py-3 px-4 rounded-xl text-sm font-semibold text-primary-foreground bg-gradient-to-r from-forest-600 to-forest-700 shadow-md"
                      >
                        Explore Properties
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-6 border-t border-border bg-muted/30">
                    <p className="text-xs text-muted-foreground text-center">
                      {SITE_CONFIG.description.slice(0, 80)}…
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
