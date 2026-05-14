import AnimatedSection from "@/components/AnimatedSection";
import AnmeldungForm from "@/components/AnmeldungForm";
import AnmeldungSteps from "@/components/AnmeldungSteps";
import SectionTitle from "@/components/SectionTitle";

export default function AnmeldungPage() {
  return (
    <>
      <AnimatedSection className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTitle eyebrow="Anmeldung" title="Anmeldung & freie Plätze" text="Senden Sie uns eine unverbindliche Anfrage. Wir melden uns persönlich zurück und besprechen die nächsten Schritte." />
          <AnmeldungForm />
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-[#EDF7EC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTitle title="Der Weg zu uns" centered />
          <AnmeldungSteps />
        </div>
      </AnimatedSection>
    </>
  );
}
