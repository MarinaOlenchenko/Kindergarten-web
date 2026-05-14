import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#6FAF7A]/25";

const variants = {
  primary: "bg-[#6FAF7A] text-white hover:bg-[#5f9d6a]",
  secondary: "border border-[#263238]/20 bg-white text-[#263238] hover:bg-[#FFF8EF]"
};

export default function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const { onClick } = props;
    return (
      <Link href={href} className={classes} onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
