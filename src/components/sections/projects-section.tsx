"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Zap, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { GlowCard } from "@/components/animations/glow-card";

const projects = [
  {
    number: "01",
    title: "Automatización de Aprobaciones Empresariales",
    description:
      "Flujos de trabajo de aprobación multi-etapa automatizados utilizando Power Automate e integraciones de Microsoft 365 para la gestión de solicitudes empresariales.",
    technologies: ["Power Automate", "Microsoft 365", "Dataverse"],
    impact:
      "Reducción de los tiempos de aprobación manual y mejora de la eficiencia operativa en los distintos departamentos.",
    icon: <Zap size={28} />,
    accent: "blue",
    gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    tagBg: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    metric: "60% más rápido",
    metricLabel: "en aprobaciones",
    featured: true,
  },
  {
    number: "02",
    title: "Power App de Gestión de Negocios",
    description:
      "Solución escalable en Power Apps para operaciones internas con acceso basado en roles y gestión de datos centralizada.",
    technologies: ["Power Apps", "Dataverse", "Interfaz Responsiva"],
    impact:
      "Flujos de trabajo centralizados y productividad mejorada para los equipos internos de negocio.",
    icon: <BarChart3 size={22} />,
    accent: "cyan",
    gradient: "from-cyan-600/20 via-cyan-500/10 to-transparent",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
    tagBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    metric: "3x",
    metricLabel: "productividad",
    featured: false,
  },
  {
    number: "03",
    title: "Solución de Tableros de Analítica",
    description:
      "Tableros interactivos para reportes de negocio y analítica operativa con integraciones del ecosistema Microsoft.",
    technologies: ["Power BI", "Dataverse", "Inteligencia de Negocios"],
    impact:
      "Toma de decisiones impulsada por datos a través de información operativa en tiempo real.",
    icon: <TrendingUp size={22} />,
    accent: "violet",
    gradient: "from-violet-600/20 via-violet-500/10 to-transparent",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    tagBg: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    metric: "Real-time",
    metricLabel: "analytics",
    featured: false,
  },
];

/* ─── Featured project card ─────────────────────── */
function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <GlowCard
      glowColor="rgba(59, 130, 246, 0.25)"
      className={`group relative overflow-hidden rounded-3xl border ${project.border} bg-gradient-to-br ${project.gradient} p-10 backdrop-blur-xl`}
    >
      {/* Project number watermark */}
      <span className="absolute right-8 top-4 select-none text-[8rem] font-black leading-none text-white/[0.03]">
        {project.number}
      </span>

      {/* Top bar */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${project.iconBg} ${project.iconColor} shadow-lg`}>
            {project.icon}
          </div>
          <div>
            <span className={`text-xs font-bold uppercase tracking-widest ${project.iconColor}`}>
              Proyecto Destacado
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.title}
            </h3>
          </div>
        </div>
        <motion.div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${project.border} ${project.iconBg} ${project.iconColor} transition-all duration-300 group-hover:scale-110`}
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {project.technologies.map((tech) => (
          <span key={tech} className={`rounded-full border px-4 py-1.5 text-sm font-medium ${project.tagBg}`}>
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom row: impact + metric */}
      <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 rounded-2xl border border-white/5 bg-black/20 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            Impacto de Negocio
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.impact}</p>
        </div>
        <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-black/20 px-8 py-4 text-center">
          <span className={`text-3xl font-black ${project.iconColor}`}>{project.metric}</span>
          <span className="mt-0.5 text-xs text-slate-500">{project.metricLabel}</span>
        </div>
      </div>
    </GlowCard>
  );
}

/* ─── Regular project card ──────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <GlowCard
      glowColor={`rgba(${project.accent === "cyan" ? "6,182,212" : "139,92,246"}, 0.2)`}
      className={`perspective-card group relative flex h-full flex-col overflow-hidden rounded-3xl border ${project.border} bg-gradient-to-br ${project.gradient} p-8 backdrop-blur-xl`}
    >
      {/* Number watermark */}
      <span className="absolute right-5 top-2 select-none text-6xl font-black leading-none text-white/[0.04]">
        {project.number}
      </span>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${project.iconBg} ${project.iconColor}`}>
          {project.icon}
        </div>
        <motion.div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${project.border} ${project.iconBg} ${project.iconColor} opacity-60 transition group-hover:opacity-100`}
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={15} />
        </motion.div>
      </div>

      <h3 className="mt-5 text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className={`rounded-full border px-3 py-1 text-xs font-medium ${project.tagBg}`}>
            {tech}
          </span>
        ))}
      </div>

      {/* Metric */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3">
        <span className="text-xs text-slate-500">Impacto clave</span>
        <span className={`text-sm font-bold ${project.iconColor}`}>{project.metric} {project.metricLabel}</span>
      </div>
    </GlowCard>
  );
}

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative border-t border-white/5 py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/6 blur-[100px]" />

      <Container>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
                Proyectos
              </span>
              <h2
                className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Soluciones que{" "}
                <span className="gradient-text">transforman negocios</span>.
              </h2>
            </div>
            <p className="max-w-sm text-slate-400">
              Automatización, sistemas escalables y experiencias modernas para
              equipos empresariales.
            </p>
          </div>
        </FadeIn>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12"
        >
          <FeaturedCard project={featured} />
        </motion.div>

        {/* Remaining projects grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
