import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/verifycl/";
const INSTAGRAM_URL = "https://www.instagram.com/verifychile";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-teal py-16 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

        {/* Brand / Logo Section */}
        <div className="mb-10 flex flex-col items-center">
          <Link href="/" aria-label="Verify" className="mb-6 flex items-center justify-center py-1">
            <Image
              src="/brand/logo-white.png"
              alt="Verify"
              width={1124}
              height={292}
              className="block h-auto w-[132px] sm:w-[148px]"
              sizes="(min-width: 640px) 148px, 132px"
            />
          </Link>
          <p className="text-[15px] leading-relaxed text-white/60 max-w-[400px]">
            Control documental simplificado para empresas que valoran la eficiencia y el cumplimiento normativo.
          </p>
        </div>

        {/* Horizontal Links */}
        <ul className="mb-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[14px] text-white/70">
          <li><Link href="#learn-more" className="hover:text-white transition-colors">Problema</Link></li>
          <li><Link href="#plataforma" className="hover:text-white transition-colors">Plataforma</Link></li>
          <li><Link href="#segmentos" className="hover:text-white transition-colors">Segmentos</Link></li>
          <li><Link href="#waitlist" className="hover:text-white transition-colors">Acceso anticipado</Link></li>
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[13px] text-white/50">© {new Date().getFullYear()} Verify. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 text-white/40">
           <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-[18px] h-[18px]" strokeWidth={2} />
          </a>

        </div>
      </div>
    </footer>
  );
}
