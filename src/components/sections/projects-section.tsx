import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

const projects = [
  {
    title: "Enterprise Approval Automation",
    description:
      "Automated multi-stage approval workflows using Power Automate and Microsoft 365 integrations for enterprise request management.",
    technologies: ["Power Automate", "Microsoft 365", "Dataverse"],
    impact:
      "Reduced manual approval times and improved operational efficiency across departments.",
  },
  {
    title: "Business Management Power App",
    description:
      "Developed a scalable Power Apps solution for internal business operations with role-based access and centralized data management.",
    technologies: ["Power Apps", "Dataverse", "Responsive UI"],
    impact:
      "Centralized workflows and improved productivity for internal business teams.",
  },
  {
    title: "Analytics Dashboard Solution",
    description:
      "Designed interactive dashboards for business reporting and operational analytics using Microsoft ecosystem integrations.",
    technologies: ["Power BI", "Dataverse", "Business Intelligence"],
    impact:
      "Enabled data-driven decision making through real-time operational insights.",
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
              Projects
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Enterprise solutions focused on automation and modern business
              experiences.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A selection of projects focused on business automation, scalable
              systems, modern interfaces and enterprise productivity solutions.
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
                      Business Impact
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
