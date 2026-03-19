import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-teal py-16 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

        {/* Brand / Logo Section */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center font-semibold text-white">
              V
            </div>
            <span className="text-[17px] font-semibold tracking-[-0.01em] text-white">
              Verify
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-white/60 mb-8 max-w-[320px]">
            Control documental simplificado para empresas que valoran la eficiencia y el cumplimiento normativo.
          </p>
          <div className="flex items-center gap-4 text-white/40">
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-[18px] h-[18px]" strokeWidth={2} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-[18px] h-[18px]" strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 gap-8 md:justify-items-end lg:justify-items-center">
          {/* Column 1: Producto */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium mb-5 text-[14px]">Producto</h3>
            <ul className="flex flex-col gap-3.5 text-[14px] text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Características</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integraciones</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Precios</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Column 2: Recursos */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium mb-5 text-[14px]">Recursos</h3>
            <ul className="flex flex-col gap-3.5 text-[14px] text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Documentación</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Casos de Uso</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Centro de Ayuda</Link></li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          {/* <div className="flex flex-col">
            <h3 className="text-white font-medium mb-5 text-[14px]">Empresa</h3>
            <ul className="flex flex-col gap-3.5 text-[14px] text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carreras</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
        <p>© {new Date().getFullYear()} Verify. Todos los derechos reservados.</p>
        <div className="flex items-center gap-6">
          {/* <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacidad</Link> */}
          {/* <Link href="#" className="hover:text-white transition-colors">Cookies</Link> */}
        </div>
      </div>
    </footer>
  );
}
