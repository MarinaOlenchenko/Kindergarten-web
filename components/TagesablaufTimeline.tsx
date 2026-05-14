import { timeline } from "@/data/timeline";

const colors = ["#6FAF7A", "#F6B51E", "#F26F5B", "#9BC8E8", "#6FAF7A", "#F6B51E", "#F26F5B"];

export default function TagesablaufTimeline({ large = false }: { large?: boolean }) {
  return (
    <div className={`rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${large ? "lg:p-12" : ""}`}>
      <div className="space-y-7">
        {timeline.map((item, index) => (
          <div key={item.time} className="grid grid-cols-[76px_24px_1fr] gap-4">
            <time className="pt-1 text-sm font-bold text-[#263238]/70">{item.time}</time>
            <div className="relative flex justify-center">
              <span className="mt-1 h-4 w-4 rounded-full ring-4 ring-white" style={{ backgroundColor: colors[index] }} />
              {index < timeline.length - 1 ? <span className="absolute top-7 h-[calc(100%+12px)] w-px bg-[#263238]/12" /> : null}
            </div>
            <div>
              <h3 className="font-extrabold">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#263238]/65">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
