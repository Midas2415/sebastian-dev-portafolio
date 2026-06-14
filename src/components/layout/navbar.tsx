import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#020817]/70 backdrop-blur-2xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Sebastian.dev
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Sobre mí
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Proyectos
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Habilidades
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Contacto
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}