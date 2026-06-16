"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  accent: string;
  border: string;
  bar: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Power Platform",
    icon: "⚡",
    color: "from-blue-500/15 via-blue-500/5 to-transparent",
    accent: "text-blue-400",
    border: "border-blue-500/15",
    bar: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Power Apps (Canvas, Model-driven)", level: 90 },
      { name: "Power Automate", level: 88 },
      { name: "Dataverse", level: 82 },
      { name: "Power Pages / Portals", level: 75 },
    ],
  },
  {
    title: "Desarrollo Frontend",
    icon: "💻",
    color: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    accent: "text-emerald-400",
    border: "border-emerald-500/15",
    bar: "from-emerald-500 to-teal-400",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Diseño Responsivo", level: 90 },
    ],
  },
  {
    title: "Herramientas de Desarrollo",
    icon: "🛠️",
    color: "from-amber-500/15 via-amber-500/5 to-transparent",
    accent: "text-amber-400",
    border: "border-amber-500/15",
    bar: "from-amber-500 to-orange-400",
    skills: [
      { name: "Git / GitHub", level: 84 },
      { name: "APIs REST", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 78 },
    ],
  },
  {
    title: "UI/UX & Arquitectura",
    icon: "🎨",
    color: "from-violet-500/15 via-violet-500/5 to-transparent",
    accent: "text-violet-400",
    border: "border-violet-500/15",
    bar: "from-violet-500 to-purple-400",
    skills: [
      { name: "Sistemas de Diseño", level: 85 },
      { name: "Principios UX/UI", level: 88 },
      { name: "Arquitectura de Componentes", level: 83 },
      { name: "Código Limpio & Escalable", level: 87 },
    ],
  },
];

function SkillBar({
  name,
  level,
  barGradient,
  index,
}: {
  name: string;
  level: number;
  barGradient: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="group"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
          {name}
        </span>
        <motion.span
          className="text-xs font-bold text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.08 }}
        >
          {level}%
        </motion.span>
      </div>
      {/* Track */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        {/* Fill */}
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${barGradient} shadow-sm`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2 + index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-white/5 py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-600/5 blur-[100px]" />

      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
              Habilidades
            </span>
            <h2
              className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Tecnologías y experiencia en{" "}
              <span className="gradient-text">desarrollo empresarial</span>.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Enfocado en ofrecer soluciones escalables con tecnologías
              Microsoft, automatización y prácticas modernas de desarrollo
              frontend.
            </p>
          </div>
        </FadeIn>

        {/* Skills grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative overflow-hidden rounded-3xl border ${category.border} bg-gradient-to-br ${category.color} p-8 backdrop-blur-xl transition-all duration-300`}
            >
              {/* Top shimmer line */}
              <div className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${category.accent}`} />

              {/* Header */}
              <div className="mb-7 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className={`text-xl font-bold ${category.accent}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    barGradient={category.bar}
                    index={i}
                  />
                ))}
              </div>

              {/* Average score pill */}
              <div className="mt-6 flex justify-end">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${category.accent} border-current opacity-50`}
                >
                  {Math.round(
                    category.skills.reduce((s, sk) => s + sk.level, 0) /
                      category.skills.length
                  )}
                  % avg
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pills scroll row */}
        <FadeIn delay={0.4}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] py-6 backdrop-blur-xl">
            <div className="flex animate-[scroll_20s_linear_infinite] gap-4 px-6 hover:[animation-play-state:paused]">
              {[
                "Next.js", "TypeScript", "React", "Power Apps", "Power Automate",
                "Dataverse", "Tailwind CSS", "GitHub", "Postman", "REST APIs",
                "Next.js", "TypeScript", "React", "Power Apps", "Power Automate",
              ].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
