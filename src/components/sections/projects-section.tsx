import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

const projects = [
  {
    title: "Automatización de Aprobaciones Empresariales",
    description:
      "Flujos de trabajo de aprobación multi-etapa automatizados utilizando Power Automate e integraciones de Microsoft 365 para la gestión de solicitudes empresariales.",
    technologies: ["Power Automate", "Microsoft 365", "Dataverse"],
    impact:
      "Reducción de los tiempos de aprobación manual y mejora de la eficiencia operativa en los distintos departamentos.",
  },
  {
    title: "Power App de Gestión de Negocios",
    description:
      "Desarrollo de una solución escalable en Power Apps para operaciones internas de negocio con acceso basado en roles y gestión de datos centralizada.",
    technologies: ["Power Apps", "Dataverse", "Interfaz Responsiva"],
    impact:
      "Flujos de trabajo centralizados y productividad mejorada para los equipos internos de negocio.",
  },
  {
    title: "Solución de Tableros de Analítica",
    description:
      "Diseño de tableros interactivos para reportes de negocios y analítica operativa utilizando integraciones del ecosistema de Microsoft.",
    technologies: ["Power BI", "Dataverse", "Inteligencia de Negocios"],
    impact:
      "Toma de decisiones impulsada por datos a través de información operativa en tiempo real.",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative border-t border-white/5 py-32">
      <Container>
        <FadeIn>
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Proyectos
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Soluciones empresariales enfocadas en la automatización y experiencias de negocio modernas.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Una selección de proyectos enfocados en la automatización de negocios, sistemas escalables, interfaces modernas y soluciones de productividad empresarial.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]">
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  {/* Title + Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition group-hover:text-white">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                      Impacto de Negocio
                    </p>

                    <p className="mt-3 leading-7 text-slate-300">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
