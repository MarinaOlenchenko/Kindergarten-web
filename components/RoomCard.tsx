import Image from "next/image";

type RoomCardProps = {
  title: string;
  text: string;
  image: string;
};

export default function RoomCard({ title, text, image }: RoomCardProps) {
  return (
    <article className="group relative min-h-[260px] overflow-hidden rounded-[28px] bg-[#263238] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <h3 className="display-font text-2xl font-semibold">{title}</h3>
        <p className="mt-2 font-medium text-white/90">{text}</p>
      </div>
    </article>
  );
}
