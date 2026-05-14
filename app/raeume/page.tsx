import AnimatedSection from "@/components/AnimatedSection";
import RoomCard from "@/components/RoomCard";
import SectionTitle from "@/components/SectionTitle";
import { rooms } from "@/data/rooms";

export default function RaeumePage() {
  return (
    <AnimatedSection className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTitle eyebrow="Räume" title="Unsere Räume" text="Warme Materialien, klare Zonen und viel Licht schaffen Orte, an denen Kinder aktiv sein und zur Ruhe kommen können." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.title} {...room} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
