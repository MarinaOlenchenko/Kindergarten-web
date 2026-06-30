"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, MoveRight, Sun, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import Button from "@/components/Button";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#263238]/10 bg-white/90 backdrop-blur-xl">
      <div className="site-header__inner mx-auto flex h-[88px] max-w-[1280px] items-center gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="site-header__logo flex shrink-0 items-center gap-3">
          <span className="site-header__logo-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F6B51E]/20 text-[#F6B51E]">
            <Sun aria-hidden="true" className="site-header__logo-sun h-8 w-8" strokeWidth={2.5} />
          </span>
          <span className="site-header__logo-text display-font whitespace-nowrap text-xl font-semibold leading-none">
            <span className="block text-[#3F7B43]">Kita</span>
            <span className="block text-[#F05A28]">SonnenNest</span>
          </span>
        </Link>

        <nav className="site-header__nav hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2" aria-label="Hauptnavigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-1 py-2 text-[13px] font-bold leading-none transition ${
                  active ? "text-[#3F7B43]" : "text-[#263238] hover:text-[#3F7B43]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__cta hidden shrink-0">
          <Button href="/kontakt" className="whitespace-nowrap !px-5 !py-3 text-[13px]">
            <CalendarDays aria-hidden="true" size={18} />
            Besichtigung vereinbaren
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="site-header__menu ml-auto inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#263238]/15 bg-white"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="site-header__mobile border-t border-[#263238]/10 bg-white px-6 py-6">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-2" aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 font-bold ${pathname === item.href ? "bg-[#EDF7EC] text-[#3F7B43]" : "text-[#263238]"}`}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/kontakt" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Besichtigung vereinbaren <MoveRight aria-hidden="true" size={20} />
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
