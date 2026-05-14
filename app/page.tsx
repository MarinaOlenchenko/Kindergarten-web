import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnmeldungSteps from "@/components/AnmeldungSteps";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import PedagogyPreview from "@/components/PedagogyPreview";
import RoomCard from "@/components/RoomCard";
import SectionTitle from "@/components/SectionTitle";
import TagesablaufTimeline from "@/components/TagesablaufTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import { features } from "@/data/features";
import { rooms } from "@/data/rooms";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <AnimatedSection className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTitle title="Warum Familien unsere Kita wählen" text="Liebevolle Beziehungen, klare Rituale und Räume, die Kinder wirklich nutzen wollen." centered />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <PedagogyPreview />
          <div>
            <SectionTitle title="Unser Tagesablauf" text="Ein verlässlicher Rhythmus mit genug Freiheit für eigene Ideen." />
            <TagesablaufTimeline />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTitle title="Räume & Umgebung" centered />
          <div className="grid gap-6 md:grid-cols-3">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.title} {...room} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#EDF7EC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTitle title="So einfach funktioniert die Anmeldung" centered />
          <AnmeldungSteps />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTitle title="Das sagen Eltern" centered />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/anmeldung">
              Jetzt Platz anfragen <ArrowRight aria-hidden="true" size={20} />
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
