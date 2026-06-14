import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    title: "Power Platform",
    skills: [
      "Power Apps (Canvas, Model-driven, Portals)",
      "Power Automate",
      "Dataverse",
      "Business Automation",
    ],
  },
  {
    title: "Development Tools",
    skills: ["GitHub", "REST APIs", "VS Code", "Postman", "Agile Workflow"],
  },
  {
    title: "UI/UX & Architecture",
    skills: [
      "Component Architecture",
      "Modern UI Design",
      "UX Principles",
      "Design Systems",
      "Clean Code",
      "Scalable Structure",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-white/5 py-32">
      <Container>
        <FadeIn>
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Skills
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Modern technologies and enterprise development expertise.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Focused on delivering scalable business solutions using Microsoft
              technologies, automation systems and modern frontend development
              practices.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]">
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
