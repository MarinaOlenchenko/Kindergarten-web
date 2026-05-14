import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import TagesablaufTimeline from "@/components/TagesablaufTimeline";

export default function TagesablaufPage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTitle eyebrow="Tagesablauf" title="Ein Tag in unserer Kita" text="Unser Tagesrhythmus gibt Orientierung und bleibt flexibel genug für Projekte, Wetter, Gruppendynamik und die Bedürfnisse der Kinder." />
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h2 className="display-font text-3xl font-semibold">Ruhig, lebendig, verlässlich</h2>
            <p className="mt-5 leading-8 text-[#263238]/75">
              Übergänge werden bei uns bewusst gestaltet. So wissen Kinder, was als Nächstes passiert, und können trotzdem jeden Tag neue Erfahrungen machen.
            </p>
          </div>
          <TagesablaufTimeline large />
        </div>
      </div>
    </AnimatedSection>
  );
}
