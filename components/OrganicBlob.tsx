type OrganicBlobProps = {
  className?: string;
  color?: string;
};

export default function OrganicBlob({ className = "", color = "bg-[#F6B51E]/30" }: OrganicBlobProps) {
  return <div aria-hidden="true" className={`organic-radius pointer-events-none absolute ${color} ${className}`} />;
}
