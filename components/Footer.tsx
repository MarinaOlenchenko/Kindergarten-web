import Image from "next/image";
import Link from "next/link";
import { Heart, Instagram, Mail, Phone, Sun } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#3F7B43] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr_220px] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Sun aria-hidden="true" size={42} className="text-[#F6B51E]" />
            <span className="display-font text-2xl font-semibold leading-none">
              <span className="block">Kita</span>
              <span className="block">SonnenNest</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs leading-7 text-white/80">Liebevolle Betreuung, starke Werte und jeden Tag ein bisschen mehr Wachsen.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Phone, Mail].map((Icon, index) => (
              <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                <Icon aria-hidden="true" size={19} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 font-extrabold">Kontakt</h2>
          <p className="leading-7 text-white/80">Kita SonnenNest<br />Musterstraße 12<br />90402 Nürnberg</p>
          <p className="mt-4 leading-7 text-white/80">0911 12345678<br />hallo@kita-sonnennest.de</p>
        </div>
        <div>
          <h2 className="mb-5 font-extrabold">Öffnungszeiten</h2>
          <p className="leading-7 text-white/80">Mo - Fr: 07:30 - 16:30</p>
          <p className="mt-4 leading-7 text-white/80">Wir haben 30 Schließtage im Jahr.</p>
          <Heart aria-hidden="true" className="mt-6 text-white/80" />
        </div>
        <div>
          <h2 className="mb-5 font-extrabold">Links</h2>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/80 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative hidden min-h-[170px] overflow-hidden rounded-[40px] lg:block">
          <Image src="/Kindergarten-web/images/toys.jpg" alt="Holzspielzeug in der Kita" fill className="object-cover" sizes="220px" />
        </div>
      </div>
      <div className="border-t border-white/12 py-5 text-center text-sm text-white/70">© 2026 Kita SonnenNest. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
