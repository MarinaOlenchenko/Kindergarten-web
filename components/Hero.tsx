import Image from "next/image";
import { ArrowRight, CalendarDays, Heart, Leaf, UsersRound, Utensils } from "lucide-react";
import Button from "@/components/Button";
import OrganicBlob from "@/components/OrganicBlob";

const benefits = [
  { title: "Kleine Gruppen", text: "Individuelle Betreuung", icon: UsersRound, color: "bg-[#6FAF7A]" },
  { title: "Frische Mahlzeiten", text: "Gesunde Küche", icon: Utensils, color: "bg-[#F6B51E]" },
  { title: "Natur & Bewegung", text: "Täglich draußen", icon: Leaf, color: "bg-[#F26F5B]" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <OrganicBlob className="-left-20 top-0 h-44 w-44" color="bg-[#6FAF7A]/25" />
      <OrganicBlob className="-right-16 bottom-0 h-52 w-52" color="bg-[#F6B51E]/35" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F26F5B]/18 text-[#F26F5B]">
              <Heart aria-hidden="true" size={18} fill="currentColor" />
            </span>
            Liebevolle Betreuung in Nürnberg
          </div>
          <h1 className="display-font text-5xl font-semibold leading-[1.04] text-[#263238] md:text-7xl">
            Ein Ort, an dem Kinder wachsen, spielen und sich <span className="text-[#6FAF7A]">wohlfühlen.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#263238]/75">
            Unsere Kita begleitet Kinder im Alter von 1 bis 6 Jahren mit Wärme, Struktur und viel Raum für Neugier.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/anmeldung">
              Platz anfragen <ArrowRight aria-hidden="true" size={20} />
            </Button>
            <Button href="/paedagogik" variant="secondary">
              Konzept ansehen <ArrowRight aria-hidden="true" size={20} />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="image-mask relative aspect-[1.24/1] overflow-hidden bg-[#EDF7EC] shadow-[0_24px_70px_rgba(63,123,67,0.18)]">
            <Image
              src="/Kindergarten-web/images/hero-kindergarten.jpg"
              alt="Kinder spielen im Garten der Kita"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-8 right-4 max-w-[300px] rounded-[28px] bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.12)] sm:right-8">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F6B51E] text-[#263238]">
                <CalendarDays aria-hidden="true" size={26} />
              </span>
              <div>
                <h2 className="display-font text-2xl font-semibold leading-tight">Freie Plätze ab September</h2>
                <Button href="/anmeldung" variant="secondary" className="mt-4 border-0 px-0 py-0 text-[#3F7B43] shadow-none hover:bg-transparent">
                  Jetzt unverbindlich anfragen <ArrowRight aria-hidden="true" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:col-span-2">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white ${item.color}`}>
                  <Icon aria-hidden="true" size={25} />
                </span>
                <div>
                  <h3 className="font-extrabold">{item.title}</h3>
                  <p className="text-sm text-[#263238]/65">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
