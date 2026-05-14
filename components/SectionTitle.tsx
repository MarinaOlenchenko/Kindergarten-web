type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, text, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 font-bold uppercase tracking-[0.16em] text-[#6FAF7A]">{eyebrow}</p> : null}
      <h2 className="display-font text-4xl font-semibold leading-tight text-[#263238] md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-[#263238]/75">{text}</p> : null}
    </div>
  );
}
