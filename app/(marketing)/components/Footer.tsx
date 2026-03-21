import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-teal py-16 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

        {/* Brand / Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center font-semibold text-white">
              V
            </div>
            <span className="text-[17px] font-semibold tracking-[-0.01em] text-white">
              Verify
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-white/60 max-w-[400px]">
            Control documental simplificado para empresas que valoran la eficiencia y el cumplimiento normativo.
          </p>
        </div>

        {/* Horizontal Links */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-14 text-[14px] text-white/70">
          <li><Link href="#" className="hover:text-white transition-colors">Características</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Integraciones</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Precios</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Roadmap</Link></li>
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[13px] text-white/50">© {new Date().getFullYear()} Verify. Todos los derechos reservados.</p>
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
    </footer>
  );
}
