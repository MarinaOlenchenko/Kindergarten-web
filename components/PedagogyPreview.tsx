import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

const points = ["Individuelle Eingewöhnung", "Alltag mit festen Ritualen", "Spielerisches Lernen", "Enge Zusammenarbeit mit Eltern"];

export default function PedagogyPreview() {
  return (
    <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <h3 className="doodle-line display-font text-3xl font-semibold">Unser pädagogisches Konzept</h3>
          <p className="mt-10 leading-8 text-[#263238]/75">
            Wir arbeiten situationsorientiert, stärken die Selbstständigkeit der Kinder und schaffen eine Umgebung, in der jedes Kind gesehen wird.
          </p>
          <ul className="mt-7 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-semibold text-[#263238]/80">
                <CheckCircle2 aria-hidden="true" className="text-[#6FAF7A]" size={22} />
                {point}
              </li>
            ))}
          </ul>
          <Button href="/paedagogik" variant="secondary" className="mt-8">
            Konzept ansehen
          </Button>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full bg-[#FFF8EF]">
          <Image src="/images/painting.jpg" alt="Kinder malen im Kreativbereich" fill className="object-cover" sizes="340px" />
        </div>
      </div>
    </div>
  );
}
