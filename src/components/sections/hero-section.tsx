import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Main Blue Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Secondary Cyan Glow */}
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <FadeIn>
        <div className="max-w-5xl">
          {/* Badge */}
          <span className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 backdrop-blur-xl">
            Desarrollador de Power Platform
          </span>

          {/* Main Title */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-8xl">
            Creando soluciones empresariales con prácticas de desarrollo modernas.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Especializado en Microsoft Power Platform, flujos de trabajo de automatización,
            soluciones empresariales escalables y experiencias frontend modernas.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40">
              Ver Proyectos
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10">
              Contáctame
            </button>
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}