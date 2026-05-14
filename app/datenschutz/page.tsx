import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

export default function DatenschutzPage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <SectionTitle eyebrow="Rechtliches" title="Datenschutz" />
        <div className="rounded-[28px] bg-white p-8 leading-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzseite ist ein Platzhalter und beschreibt beispielhaft, welche Inhalte vor dem Livegang ergänzt werden sollten.
          </p>
          <h2 className="mt-8 font-extrabold">Verantwortliche Stelle</h2>
          <p>Kita SonnenNest, Musterstraße 12, 90402 Nürnberg, hallo@kita-sonnennest.de</p>
          <h2 className="mt-8 font-extrabold">Kontaktformulare</h2>
          <p>Übermittelte Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. In dieser Demo erfolgt keine serverseitige Speicherung.</p>
          <h2 className="mt-8 font-extrabold">Ihre Rechte</h2>
          <p>Sie haben grundsätzlich Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch.</p>
          <h2 className="mt-8 font-extrabold">Hinweis</h2>
          <p>Diese Datenschutzerklärung muss vor Veröffentlichung durch eine rechtlich geprüfte Fassung ersetzt werden.</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
