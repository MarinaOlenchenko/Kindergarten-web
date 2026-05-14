import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import { values } from "@/data/features";
import { HeartHandshake, Home, MapPin, Sparkles } from "lucide-react";

const icons = [HeartHandshake, Sparkles, Home, MapPin];

export default function UeberUnsPage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTitle eyebrow="Über uns" title="Über Kita SonnenNest" text="Wir sind eine herzliche Kita in Nürnberg, die Kinder achtsam begleitet und Familien als echte Partner versteht." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <FeatureCard key={value.title} title={value.title} text={value.text} icon={icons[index]} color={["#6FAF7A", "#F6B51E", "#F26F5B", "#6FAF7A"][index]} />
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {[
            ["Unsere Werte", "Geborgenheit, Respekt, Neugier und Gemeinschaft prägen jeden Tag. Wir geben Kindern einen sicheren Rahmen und viel Raum zum Ausprobieren."],
            ["Unser Team", "Unser pädagogisches Team arbeitet aufmerksam, reflektiert und mit Freude. Regelmäßiger Austausch sorgt dafür, dass jedes Kind gut gesehen wird."],
            ["Für Familien in Nürnberg", "Wir möchten ein verlässlicher Ort für Familien sein: persönlich, transparent und gut erreichbar im Alltag."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <h2 className="display-font text-3xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-[#263238]/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
