"use client";

import { Phone } from "lucide-react";
import { business } from "@/content/business";

export function CallButton() {
  return (
    <a
      href={`tel:${business.phone}`}
      className="fixed bottom-6 left-6 z-50 sm:hidden flex items-center gap-2 bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
      aria-label="Llamar ahora"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
