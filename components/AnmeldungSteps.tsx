import { ArrowRight, Heart, Send, UsersRound } from "lucide-react";
import Button from "@/components/Button";

const steps = [
  { title: "Anfrage senden", text: "Füllen Sie unser Kontaktformular aus oder rufen Sie uns an.", icon: Send },
  { title: "Kennenlernen & Besichtigung", text: "Wir nehmen uns Zeit und zeigen Ihnen unsere Kita persönlich.", icon: UsersRound },
  { title: "Eingewöhnung planen", text: "Gemeinsam planen wir eine liebevolle Eingewöhnung für Ihr Kind.", icon: Heart }
];

export default function AnmeldungSteps() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <Icon aria-hidden="true" className="text-[#6FAF7A]" size={38} />
              </div>
              <span className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-12 items-center justify-center rounded-full bg-[#6FAF7A] text-sm font-extrabold text-white">
                {index + 1}
              </span>
              {index < steps.length - 1 ? <ArrowRight aria-hidden="true" className="absolute right-[-20px] top-10 hidden text-[#6FAF7A]/70 md:block" /> : null}
              <h3 className="font-extrabold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#263238]/65">{step.text}</p>
            </div>
          );
        })}
      </div>
      <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="mb-6 aspect-[4/3] rounded-[24px] bg-[url('/images/backpack-child.jpg')] bg-cover bg-center" />
        <Button href="/anmeldung" className="w-full">
          Jetzt Platz anfragen <ArrowRight aria-hidden="true" size={20} />
        </Button>
      </div>
    </div>
  );
}
