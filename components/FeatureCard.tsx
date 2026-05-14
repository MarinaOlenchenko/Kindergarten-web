import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  color: string;
};

export default function FeatureCard({ title, text, icon: Icon, color }: FeatureCardProps) {
  return (
    <article className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(0,0,0,0.09)]">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] text-white" style={{ backgroundColor: color }}>
        <Icon aria-hidden="true" size={30} strokeWidth={2.4} />
      </div>
      <h3 className="display-font text-2xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-[#263238]/70">{text}</p>
    </article>
  );
}
