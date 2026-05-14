import { Heart, Quote, Star } from "lucide-react";

export default function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1">
      <Quote aria-hidden="true" className="mb-3 text-[#F26F5B]/35" size={42} />
      <div className="mb-5 flex gap-1 text-[#F6B51E]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} aria-hidden="true" size={18} fill="currentColor" />
        ))}
      </div>
      <p className="leading-7 text-[#263238]/75">{text}</p>
      <div className="mt-7 flex items-center justify-between">
        <strong>{name}</strong>
        <Heart aria-hidden="true" className="text-[#6FAF7A]" />
      </div>
    </article>
  );
}
