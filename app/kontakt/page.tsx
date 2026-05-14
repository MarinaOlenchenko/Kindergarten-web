import { Mail, MapPin, Phone, Timer } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import KontaktForm from "@/components/KontaktForm";
import SectionTitle from "@/components/SectionTitle";

const info = [
  { title: "Öffnungszeiten", text: "Mo - Fr: 07:30 - 16:30", icon: Timer },
  { title: "Adresse", text: "Musterstraße 12, 90402 Nürnberg", icon: MapPin },
  { title: "Telefon", text: "0911 12345678", icon: Phone },
  { title: "E-Mail", text: "hallo@kita-sonnennest.de", icon: Mail }
];

export default function KontaktPage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTitle eyebrow="Kontakt" title="Kontakt & Besichtigung" text="Sie möchten uns kennenlernen? Schreiben Sie uns eine Nachricht oder vereinbaren Sie direkt eine Besichtigung." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[28px] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                  <Icon aria-hidden="true" className="mb-4 text-[#6FAF7A]" size={30} />
                  <h2 className="display-font text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-2 leading-7 text-[#263238]/75">{item.text}</p>
                </article>
              );
            })}
          </div>
          <KontaktForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
