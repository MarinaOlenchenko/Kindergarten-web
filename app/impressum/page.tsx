import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

export default function ImpressumPage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <SectionTitle eyebrow="Rechtliches" title="Impressum" />
        <div className="rounded-[28px] bg-white p-8 leading-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <h2 className="display-font text-3xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p className="mt-4">Kita SonnenNest<br />Musterstraße 12<br />90402 Nürnberg</p>
          <h2 className="mt-8 font-extrabold">Vertreten durch</h2>
          <p>Max Mustermann</p>
          <h2 className="mt-8 font-extrabold">Kontakt</h2>
          <p>Telefon: 0911 12345678<br />E-Mail: hallo@kita-sonnennest.de</p>
          <h2 className="mt-8 font-extrabold">Hinweis</h2>
          <p>Dies ist ein Platzhalter-Impressum und muss vor Veröffentlichung rechtlich geprüft und mit echten Betreiberangaben ergänzt werden.</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
