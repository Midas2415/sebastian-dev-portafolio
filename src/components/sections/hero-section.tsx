import Image from "next/image";

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
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 backdrop-blur-xl">
                Desarrollador de Power Platform
              </span>

              {/* Main Title */}
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
                Transformando procesos empresariales con Power Platform
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                Desarrollo aplicaciones empresariales, automatizaciones
                inteligentes y soluciones escalables utilizando Microsoft Power
                Platform, React, Next.js y TypeScript.
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

              {/* Tech Cards */}
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                  <h3 className="font-semibold text-white">Power Apps</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Aplicaciones empresariales
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                  <h3 className="font-semibold text-white">Power Automate</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Automatización de procesos
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                  <h3 className="font-semibold text-white">Dataverse</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Gestión de datos empresarial
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative mx-auto w-full max-w-xl">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
                <Image
                  src="/Images/Foto_Fondo_Blanco.png"
                  alt="Foto de perfil de Sebastian Martinez"
                  width={900}
                  height={1200}
                  priority
                  className="rounded-[24px] object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute bottom-8 left-4 rounded-2xl border border-white/10 bg-[#0F172A]/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Especialidad
                </p>

                <p className="mt-1 font-semibold text-white">Power Platform</p>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute right-4 top-8 rounded-2xl border border-white/10 bg-[#0F172A]/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Stack
                </p>

                <p className="mt-1 font-semibold text-white">Next.js + React</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
