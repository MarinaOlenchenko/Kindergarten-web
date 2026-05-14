"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/Button";

const inputClass = "min-h-12 rounded-2xl border border-[#263238]/15 bg-white px-4 py-3 outline-none transition focus:border-[#6FAF7A] focus:ring-4 focus:ring-[#6FAF7A]/15";

export default function KontaktForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="grid gap-5">
        <label className="grid gap-2 font-bold">Name<input className={inputClass} name="name" required /></label>
        <label className="grid gap-2 font-bold">E-Mail<input className={inputClass} name="email" type="email" required /></label>
        <label className="grid gap-2 font-bold">Telefon<input className={inputClass} name="telefon" type="tel" /></label>
        <label className="grid gap-2 font-bold">Nachricht<textarea className={`${inputClass} min-h-36 resize-y`} name="nachricht" required /></label>
      </div>
      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit">
          Nachricht senden <Send aria-hidden="true" size={20} />
        </Button>
        {sent ? <p className="font-bold text-[#3F7B43]">Vielen Dank! Ihre Nachricht wurde vorbereitet.</p> : null}
      </div>
    </form>
  );
}
