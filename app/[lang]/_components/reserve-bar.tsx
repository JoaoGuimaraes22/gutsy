"use client";

import { useEffect, useState } from "react";

interface ReserveBarDict {
  cta_reserve: string;
  cta_order: string;
  order_url: string;
}

export default function ReserveBar({ dict }: { dict: ReserveBarDict }) {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    const onOpen = () => setModalOpen(true);
    const onClose = () => setModalOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("open-reservation", onOpen);
    window.addEventListener("close-reservation", onClose);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("open-reservation", onOpen);
      window.removeEventListener("close-reservation", onClose);
    };
  }, []);

  const visible = scrolled && !modalOpen;

  const openReservation = () => {
    window.dispatchEvent(new CustomEvent("open-reservation"));
  };

  return (
    <div
      className={`fixed bottom-2 inset-x-2 z-60 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="flex gap-1.5 rounded-xl bg-zinc-900/95 p-1.5 shadow-2xl backdrop-blur-sm">
        <button
          onClick={openReservation}
          className="flex-1 cursor-pointer rounded-lg bg-orange-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-700"
        >
          {dict.cta_reserve}
        </button>
        <a
          href={dict.order_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 cursor-pointer rounded-lg border border-zinc-700 py-2 text-center text-xs font-semibold text-zinc-100 transition-colors hover:bg-zinc-800"
        >
          {dict.cta_order}
        </a>
      </div>
    </div>
  );
}
