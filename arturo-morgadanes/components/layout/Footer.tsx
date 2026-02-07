"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Settings } from "lucide-react";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, locale } = useLanguage();

  const openCookieSettings = () => {
    // Clear cookie consent to re-show the banner
    localStorage.removeItem("cookie_consent");
    window.location.reload();
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {business.name}
            </h3>
            <p className="mb-4">{t("footer", "tagline")}</p>
            <div className="space-y-2">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {business.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {business.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t("footer", "servicesTitle")}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {locale === "en" && service.nameEn ? service.nameEn : service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t("footer", "hoursTitle")}</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>{t("footer", "weekdays")}</p>
                  <p className="text-white font-medium">
                    {business.hours.weekdays}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>{t("footer", "saturday")}</p>
                  <p className="text-white font-medium">
                    {business.hours.saturday}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>{t("footer", "sunday")}</p>
                  <p className="text-white font-medium">
                    {locale === "en" ? "24h Emergency" : business.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t("footer", "linksTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  {t("nav", "home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-white transition-colors"
                >
                  {t("nav", "services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="hover:text-white transition-colors"
                >
                  {t("nav", "gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="hover:text-white transition-colors"
                >
                  {t("nav", "about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  {t("nav", "contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <Link
              href="/politica-privacidad"
              className="hover:text-white transition-colors"
            >
              {t("footer", "privacyPolicy")}
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/politica-cookies"
              className="hover:text-white transition-colors"
            >
              {t("footer", "cookiePolicy")}
            </Link>
            <span className="text-gray-600">|</span>
            <button
              onClick={openCookieSettings}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Settings className="w-3 h-3" />
              {t("footer", "cookieSettings")}
            </button>
          </div>

          <div className="text-center text-sm">
            <p>
              © {currentYear} {business.name}. {t("footer", "rights")}
            </p>
            <p className="mt-2">
              {t("footer", "professional")} {business.serviceRadius}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
