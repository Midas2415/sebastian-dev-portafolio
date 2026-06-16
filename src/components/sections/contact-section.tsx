"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE } from "@/constants/site";

/* ─── Icon components ─────────────────────────── */
export function Linkedin({ size = 20, className, ...props }: React.ComponentPropsWithoutRef<"svg"> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Github({ size = 20, className, ...props }: React.ComponentPropsWithoutRef<"svg"> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/* ─── Animated background orbs ───────────────── */
function AnimatedOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[80px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[100px]"
        animate={{ x: [0, -80, 0], y: [0, 50, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

/* ─── Contact link card ───────────────────────── */
interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  accent: string;
  border: string;
  iconBg: string;
  delay: number;
  external?: boolean;
}

function ContactCard({ href, icon, label, sublabel, accent, border, iconBg, delay, external = false }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group relative flex items-center gap-5 overflow-hidden rounded-3xl border ${border} bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06]`}
    >
      {/* Shimmer on hover */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {/* Icon */}
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconBg} ${accent} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">{sublabel}</p>
        <p className={`mt-0.5 text-xl font-bold text-white`}>{label}</p>
      </div>

      {/* Arrow */}
      <motion.div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${border} ${accent} opacity-0 transition-all duration-300 group-hover:opacity-100`}
        whileHover={{ rotate: external ? 45 : 0 }}
      >
        {external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
      </motion.div>
    </motion.a>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-white/5 py-32">
      <AnimatedOrbs />

      <Container>
        <FadeIn>
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
              Contacto
              <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
            </span>

            <h2
              className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Construyamos algo{" "}
              <span className="gradient-text">increíble</span>{" "}
              juntos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Abierto a colaborar en proyectos de Power Platform, iniciativas
              de automatización y desarrollo frontend moderno. Hablemos.
            </p>

            {/* Primary CTA */}
            <motion.a
              href={`mailto:${SITE.email}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={20} />
              Envíame un mensaje
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </FadeIn>

        {/* Contact cards */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-4">
          <ContactCard
            href={`mailto:${SITE.email}`}
            icon={<Mail size={24} />}
            label={SITE.email}
            sublabel="Email directo"
            accent="text-blue-400"
            border="border-blue-500/15"
            iconBg="bg-blue-500/15"
            delay={0.1}
          />
          <ContactCard
            href={SITE.socials.linkedin}
            icon={<Linkedin size={24} />}
            label="Sebastian Jaramillo"
            sublabel="LinkedIn"
            accent="text-cyan-400"
            border="border-cyan-500/15"
            iconBg="bg-cyan-500/15"
            delay={0.2}
            external
          />
          <ContactCard
            href={SITE.socials.github}
            icon={<Github size={24} />}
            label="Midas2415"
            sublabel="GitHub"
            accent="text-violet-400"
            border="border-violet-500/15"
            iconBg="bg-violet-500/15"
            delay={0.3}
            external
          />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          {/* Gradient separator */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">© 2026 {SITE.name}. Todos los derechos reservados.</p>
            <p className="text-sm text-slate-500">
              Creado con{" "}
              <span className="text-blue-400">Next.js</span>,{" "}
              <span className="text-cyan-400">TypeScript</span> y{" "}
              <span className="text-violet-400">Tailwind CSS</span>.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
