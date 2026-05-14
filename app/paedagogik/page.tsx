import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import { pedagogyPoints } from "@/data/features";

const texts = [
  "Wir greifen Interessen und Erlebnisse der Kinder auf und machen daraus alltagsnahe Lernmomente.",
  "Sprache entsteht beim Spielen, Essen, Streiten, Trösten und Erzählen. Wir begleiten diese Momente bewusst.",
  "Atelier, Musik, Bewegung und Natur geben Kindern viele Wege, sich auszudrücken.",
  "Die Eingewöhnung erfolgt behutsam, transparent und im Tempo des Kindes."
];

export default function PaedagogikPage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTitle eyebrow="Pädagogik" title="Unser pädagogisches Konzept" text="Kita SonnenNest verbindet klare Struktur mit viel Raum für kindliche Selbstwirksamkeit." />
        <div className="grid gap-6 md:grid-cols-2">
          {pedagogyPoints.map((point, index) => (
            <FeatureCard key={point.title} title={point.title} text={texts[index]} icon={point.icon} color={["#6FAF7A", "#F6B51E", "#F26F5B", "#6FAF7A"][index]} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
