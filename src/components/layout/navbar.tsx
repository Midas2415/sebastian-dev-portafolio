"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[#020817]/80 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#" className="group flex items-center gap-2">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                S
              </span>
              <span className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-blue-300">
                Sebastian.dev
              </span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2"
                >
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Hover background pill */}
                  <span className="absolute inset-0 rounded-lg bg-white/0 transition-colors duration-200 group-hover:bg-white/5" />
                  {/* Active indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-blue-500/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  {/* Active bottom line */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-line"
                        className="absolute bottom-0.5 left-4 right-4 h-px rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
            {/* CTA button */}
            <motion.a
              href="mailto:sebas-24-lds@hotmail.com"
              className="btn-glow ml-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contactar
            </motion.a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/5 md:hidden"
            >
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}