"use client";

import { MessageCircle } from "lucide-react";
import { business } from "@/content/business";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hola, necesito un fontanero para...");
  const url = `https://wa.me/${business.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  );
}
