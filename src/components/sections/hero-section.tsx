"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

/* ─── Typewriter hook ─────────────────────────── */
function useTypewriter(texts: string[], speed = 60, pause = 2200) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ✅ Derive display directly — no useState needed, no effect side-effect
  const display = texts[textIndex]?.substring(0, charIndex) ?? "";

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      // Typing forward
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      // Pause at end of word, then start deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      // ✅ Wrap in setTimeout so setState is never called synchronously in the effect body
      timeout = setTimeout(() => {
        setDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return display;
}

/* ─── Floating particles ─────────────────────── */
interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

// ✅ useMemo with deterministic pseudo-random values via Math.sin/cos:
//    - No useEffect + setState (fixes the linter warning)
//    - Same values on server AND client (fixes SSR hydration mismatch)
//    - Visually indistinguishable from true random
function Particles() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: ((Math.sin(i * 127.1) + 1) / 2) * 100,
        size: ((Math.sin(i * 311.7) + 1) / 2) * 3 + 1,
        duration: ((Math.cos(i * 53.3) + 1) / 2) * 15 + 12,
        delay: ((Math.sin(i * 97.4) + 1) / 2) * 10,
        opacity: ((Math.cos(i * 173.9) + 1) / 2) * 0.5 + 0.2,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${p.x}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Component ──────────────────────────────── */
const typewriterTexts = [
  "Power Platform",
  "Power Apps",
  "Power Automate",
  "React & Next.js",
  "Dataverse",
];

const techCards = [
  {
    title: "Power Apps",
    desc: "Aplicaciones empresariales",
    icon: "⚡",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
    delay: 0,
    floatClass: "animate-float",
  },
  {
    title: "Power Automate",
    desc: "Automatización de procesos",
    icon: "🔄",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20",
    delay: 0.5,
    floatClass: "animate-float-reverse",
  },
  {
    title: "Dataverse",
    desc: "Gestión de datos empresarial",
    icon: "🗄️",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/20",
    delay: 1,
    floatClass: "animate-float-slow",
  },
];

export function HeroSection() {
  const typed = useTypewriter(typewriterTexts);

  return (
    <section className="relative min-h-screen overflow-hidden py-32 lg:py-40">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-10 line-grid opacity-40" />
      <div className="absolute inset-0 -z-10">
        {/* Main blue orb */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
        {/* Secondary cyan orb */}
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[80px]" />
        {/* Violet accent */}
        <div className="absolute -left-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/8 blur-[80px]" />
      </div>
      <Particles />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ══ LEFT SIDE ══════════════════════════════ */}
          <div className="max-w-2xl">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-400">
                Disponible para proyectos
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Transformando{" "}
              <span className="gradient-text">procesos empresariales</span>
              <br />
              con{" "}
              <span className="inline-block min-h-[1.2em] min-w-[4ch]">
                {typed}
                <span className="animate-blink ml-0.5 inline-block h-[0.85em] w-0.5 translate-y-1 rounded-full bg-blue-400" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
            >
              Desarrollo aplicaciones empresariales, automatizaciones
              inteligentes y soluciones escalables utilizando Microsoft Power
              Platform, React, Next.js y TypeScript.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-2xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <span className="relative z-10">Ver Proyectos</span>
                {/* shimmer sweep on hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              <a
                href="#contact"
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10"
              >
                <span className="relative z-10">Contáctame</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
            </motion.div>

            {/* Tech cards — staggered floating */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-14 grid grid-cols-3 gap-3"
            >
              {techCards.map((card) => (
                <div
                  key={card.title}
                  className={`${card.floatClass} rounded-2xl border ${card.border} bg-gradient-to-b ${card.color} p-4 backdrop-blur-xl`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="mb-2 text-2xl">{card.icon}</div>
                  <h3 className="text-sm font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-4 text-slate-400">
                    {card.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT SIDE ═════════════════════════════ */}
          <FadeIn delay={0.3}>
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-[40px] bg-blue-500/20 blur-[60px]" />
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-violet-500/10 to-transparent blur-[40px]" />

              {/* Photo card */}
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
                {/* Shimmer top border */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                <Image
                  src="/Images/Foto_Fondo_Blanco.png"
                  alt="Foto de perfil de Sebastian Martinez"
                  width={900}
                  height={1200}
                  priority
                  className="rounded-[28px] object-cover"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-3 left-3 right-3 h-32 rounded-b-[28px] bg-gradient-to-t from-[#020817]/60 to-transparent" />
              </div>

              {/* Floating badge — Especialidad */}
              <motion.div
                className="absolute -bottom-4 left-4 rounded-2xl border border-white/10 bg-[#0F172A]/95 px-5 py-4 shadow-xl shadow-black/40 backdrop-blur-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  Especialidad
                </p>
                <p className="mt-1 font-bold text-white">Power Platform</p>
                <div className="mt-1 flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-400">Disponible</span>
                </div>
              </motion.div>

              {/* Floating badge — Stack */}
              <motion.div
                className="absolute -right-4 top-10 rounded-2xl border border-white/10 bg-[#0F172A]/95 px-5 py-4 shadow-xl shadow-black/40 backdrop-blur-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  Stack
                </p>
                <p className="mt-1 font-bold text-white">Next.js + React</p>
                <p className="mt-0.5 text-xs text-blue-400">TypeScript</p>
              </motion.div>

              {/* Floating badge — Experience */}
              <motion.div
                className="absolute -left-6 top-1/3 rounded-xl border border-white/10 bg-[#0F172A]/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  Exp.
                </p>
                <p className="mt-1 text-xl font-black text-white">3+</p>
                <p className="text-xs text-slate-400">años</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
