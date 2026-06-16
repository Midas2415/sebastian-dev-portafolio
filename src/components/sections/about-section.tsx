"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { GlowCard } from "@/components/animations/glow-card";
import { Container } from "@/components/ui/container";

/* ─── Bento card variants ──────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ─── Animated flow dots for Power Automate card ─ */
function FlowDots() {
  const nodes = ["Inicio", "Validar", "Aprobar", "Notificar", "Fin"];
  return (
    <div className="flex items-center gap-1.5 flex-wrap mt-4">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-1.5">
          <motion.div
            className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-medium text-cyan-300"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
          >
            {node}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.div
              className="h-px w-3 bg-gradient-to-r from-cyan-500/60 to-cyan-400/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Animated data orbs for Dataverse card ─────── */
function DataOrbs() {
  const orbs = [
    { label: "Entidades", color: "bg-violet-400", size: "h-10 w-10", pos: "top-2 left-4" },
    { label: "Relaciones", color: "bg-blue-400", size: "h-7 w-7", pos: "top-6 left-16" },
    { label: "Seguridad", color: "bg-emerald-400", size: "h-8 w-8", pos: "top-0 right-8" },
    { label: "API", color: "bg-amber-400", size: "h-6 w-6", pos: "top-8 right-20" },
  ];
  return (
    <div className="relative mt-4 h-20">
      {orbs.map((orb, i) => (
        <motion.div
          key={orb.label}
          className={`absolute ${orb.pos} ${orb.size} rounded-full ${orb.color} opacity-70 blur-sm`}
          animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-1.5">
        {orbs.map((orb) => (
          <span key={orb.label} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
            {orb.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Animated code snippet for Frontend card ──── */
function CodeSnippet() {
  const lines = [
    { text: "const App = () => {", color: "text-blue-300" },
    { text: "  const [data] = useState([]);", color: "text-slate-300" },
    { text: "  return <PowerApp data={data}/>;", color: "text-emerald-300" },
    { text: "};", color: "text-blue-300" },
  ];
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-white/5 bg-black/30 p-4 font-mono text-xs">
      <div className="mb-3 flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
      </div>
      {lines.map((line, i) => (
        <motion.p
          key={i}
          className={`leading-6 ${line.color}`}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
        >
          {line.text}
        </motion.p>
      ))}
      {/* Scan line */}
      <motion.div
        className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/5 py-32">
      {/* Subtle background glow */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]" />

      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
              Sobre mí
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Especializado en la creación de{" "}
              <span className="gradient-text">soluciones empresariales</span>{" "}
              modernas.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Me enfoco en diseñar soluciones escalables con Microsoft Power
              Platform, flujos de automatización, arquitecturas orientadas a
              datos y tecnologías frontend modernas.
            </p>
          </div>
        </FadeIn>

        {/* ── BENTO GRID ──────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">

          {/* Card 1 — Power Apps (large, 3 cols) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="md:col-span-3"
          >
            <GlowCard
              glowColor="rgba(59, 130, 246, 0.35)"
              className="h-full rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl shadow-lg shadow-blue-500/10">
                    ⚡
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">Power Apps</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    Desarrollo de aplicaciones empresariales escalables con
                    principios modernos de UX y arquitectura empresarial. Canvas,
                    Model-driven y Portal Apps.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-blue-400/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  Microsoft
                </span>
              </div>
              {/* Stats row */}
              <div className="mt-6 flex gap-6 border-t border-white/5 pt-5">
                {[["Canvas", "Apps"], ["Model", "Driven"], ["Power", "Pages"]].map(([a, b]) => (
                  <div key={a}>
                    <p className="text-xs text-slate-500">{a}</p>
                    <p className="text-sm font-semibold text-white">{b}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Card 2 — Power Automate (3 cols) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="md:col-span-3"
          >
            <GlowCard
              glowColor="rgba(6, 182, 212, 0.3)"
              className="h-full rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-3xl shadow-lg shadow-cyan-500/10">
                🔄
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">Power Automate</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Flujos de trabajo de automatización inteligente que optimizan
                procesos de negocio y aumentan la productividad operativa.
              </p>
              <FlowDots />
            </GlowCard>
          </motion.div>

          {/* Card 3 — Dataverse (2 cols) */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="md:col-span-2"
          >
            <GlowCard
              glowColor="rgba(139, 92, 246, 0.3)"
              className="h-full rounded-3xl border border-violet-500/15 bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl shadow-lg shadow-violet-500/10">
                🗄️
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">Dataverse</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Modelos de datos seguros y escalables para soluciones Microsoft
                de nivel empresarial.
              </p>
              <DataOrbs />
            </GlowCard>
          </motion.div>

          {/* Card 4 — Frontend (4 cols) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative md:col-span-4"
          >
            <GlowCard
              glowColor="rgba(52, 211, 153, 0.25)"
              className="h-full rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/8 via-emerald-500/3 to-transparent p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-3xl shadow-lg shadow-emerald-500/10">
                  💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Desarrollo Frontend</h3>
                  <p className="mt-2 leading-6 text-slate-400">
                    Interfaces responsivas y modernas con React, Next.js, TypeScript y
                    Tailwind CSS. Componentes accesibles y performantes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <CodeSnippet />
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
