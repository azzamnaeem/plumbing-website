"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/content/business";
import { useLanguage } from "@/lib/i18n";

interface MobileNavProps {
  isOpen: boolean;
  links: Array<{ href: string; label: string }>;
  onClose: () => void;
}

export function MobileNav({ isOpen, links, onClose }: MobileNavProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <nav className="flex flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium border-b"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile CTAs */}
      <div className="p-4 space-y-3">
        <a
          href={`tel:${business.phone}`}
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold w-full"
        >
          <Phone className="w-5 h-5" />
          {t("common", "callNow")}
        </a>
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold w-full"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
