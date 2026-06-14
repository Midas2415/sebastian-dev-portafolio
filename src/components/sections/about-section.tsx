import { Code2, Workflow, Database, LayoutDashboard } from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const expertise = [
  {
    title: "Power Apps",
    description:
      "Building scalable business applications with modern UX principles and enterprise architecture.",
    icon: LayoutDashboard,
  },
  {
    title: "Power Automate",
    description:
      "Designing intelligent automation workflows that optimize business processes and productivity.",
    icon: Workflow,
  },
  {
    title: "Dataverse",
    description:
      "Structuring secure and scalable data models for enterprise-grade Microsoft solutions.",
    icon: Database,
  },
  {
    title: "Frontend Development",
    description:
      "Creating modern responsive interfaces using React, Next.js, TypeScript and Tailwind CSS.",
    icon: Code2,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/5 py-32">
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              About
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Specialized in building modern business solutions with Microsoft
              technologies.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I focus on designing scalable enterprise solutions using Microsoft
              Power Platform, automation workflows, data-driven architectures
              and modern frontend technologies. My goal is to create efficient,
              maintainable and user-centered digital experiences.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
