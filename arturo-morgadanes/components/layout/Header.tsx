"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/content/business";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav", "home") },
    { href: "/servicios", label: t("nav", "services") },
    { href: "/galeria", label: t("nav", "gallery") },
    { href: "/sobre-mi", label: t("nav", "about") },
    { href: "/contacto", label: t("nav", "contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-blue-700">
              {business.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Language Toggle */}
          <div className="flex items-center gap-3">
            <LanguageToggle />

            <a
              href={`tel:${business.phone}`}
              className="hidden sm:flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{business.phone}</span>
              <span className="lg:hidden">{t("common", "call")}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label={t("common", "menu")}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        links={navLinks}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
