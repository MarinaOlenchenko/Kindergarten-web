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
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center gap-4 px-5 sm:px-6 lg:px-8 2xl:h-24 2xl:gap-5">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F6B51E]/20 text-[#F6B51E] 2xl:h-14 2xl:w-14">
            <Sun aria-hidden="true" className="h-8 w-8 2xl:h-9 2xl:w-9" strokeWidth={2.5} />
          </span>
          <span className="display-font whitespace-nowrap text-xl font-semibold leading-none 2xl:text-2xl">
            <span className="block text-[#3F7B43]">Kita</span>
            <span className="block text-[#F05A28]">SonnenNest</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 2xl:flex" aria-label="Hauptnavigation">
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

        <div className="hidden shrink-0 2xl:block">
          <Button href="/kontakt" className="whitespace-nowrap !px-5 !py-3 text-[13px]">
            <CalendarDays aria-hidden="true" size={18} />
            Besichtigung vereinbaren
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#263238]/15 bg-white 2xl:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#263238]/10 bg-white px-6 py-6 2xl:hidden">
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
