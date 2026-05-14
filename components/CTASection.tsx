import Image from "next/image";
import { CalendarDays, MoveRight, Send } from "lucide-react";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F6B51E] py-12">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-6 lg:grid-cols-[180px_1fr_auto] lg:px-8">
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-8 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <Image src="/images/painting.jpg" alt="Bunte Kinderhände" fill className="object-cover" sizes="144px" />
        </div>
        <div>
          <Send aria-hidden="true" className="mb-3 text-white" size={28} />
          <h2 className="display-font text-4xl font-semibold text-[#263238]">Neugierig geworden?</h2>
          <p className="mt-3 max-w-2xl font-semibold leading-7 text-[#263238]/75">
            Vereinbaren Sie jetzt eine Besichtigung und lernen Sie unsere Kita persönlich kennen.
          </p>
        </div>
        <Button href="/kontakt" className="bg-[#3F7B43] hover:bg-[#356c39]">
          <CalendarDays aria-hidden="true" size={20} />
          Besichtigung vereinbaren
          <MoveRight aria-hidden="true" size={20} />
        </Button>
      </div>
    </section>
  );
}
