"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie, Settings } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type ConsentSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_COOKIE_NAME = "cookie_consent";
const CONSENT_VERSION = "1.0";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });
  const { t, isLoaded } = useLanguage();

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(consent);
        if (parsed.version !== CONSENT_VERSION) {
          // Consent version changed, ask again
          setShowBanner(true);
        } else {
          setSettings(parsed.settings);
          applyConsent(parsed.settings);
        }
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  const applyConsent = (consentSettings: ConsentSettings) => {
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(
      new CustomEvent("cookieConsent", { detail: consentSettings })
    );

    // Enable/disable analytics based on consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: consentSettings.analytics ? "granted" : "denied",
        ad_storage: consentSettings.marketing ? "granted" : "denied",
      });
    }
  };

  const saveConsent = (consentSettings: ConsentSettings) => {
    const consentData = {
      version: CONSENT_VERSION,
      settings: consentSettings,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consentData));
    setSettings(consentSettings);
    applyConsent(consentSettings);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomSettings = () => {
    saveConsent(settings);
  };

  if (!showBanner || !isLoaded) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[60]" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {!showSettings ? (
            // Main Banner
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Cookie className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {t("cookies", "title")}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {t("cookies", "description")}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    {t("cookies", "moreInfo")}{" "}
                    <Link
                      href="/politica-cookies"
                      className="text-blue-600 underline hover:no-underline"
                    >
                      {t("footer", "cookiePolicy")}
                    </Link>{" "}
                    &{" "}
                    <Link
                      href="/politica-privacidad"
                      className="text-blue-600 underline hover:no-underline"
                    >
                      {t("footer", "privacyPolicy")}
                    </Link>
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                    >
                      {t("cookies", "acceptAll")}
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      {t("cookies", "acceptNecessary")}
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="flex items-center justify-center gap-2 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      {t("cookies", "configure")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {t("footer", "cookieSettings")}
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label={t("common", "close")}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-gray-900">
                      {t("cookies", "necessary")}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t("cookies", "necessaryDesc")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-gray-900">
                      {t("cookies", "analytics")}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t("cookies", "analyticsDesc")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.analytics}
                      onChange={(e) =>
                        setSettings({ ...settings, analytics: e.target.checked })
                      }
                      className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-gray-900">
                      {t("cookies", "marketing")}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t("cookies", "marketingDesc")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.marketing}
                      onChange={(e) =>
                        setSettings({ ...settings, marketing: e.target.checked })
                      }
                      className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveCustomSettings}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  {t("cookies", "savePreferences")}
                </button>
                <button
                  onClick={acceptAll}
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  {t("cookies", "acceptAll")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Hook to get current consent settings
export function useConsent() {
  const [consent, setConsent] = useState<ConsentSettings | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsent(parsed.settings);
      } catch {
        setConsent(null);
      }
    }

    const handleConsent = (event: CustomEvent<ConsentSettings>) => {
      setConsent(event.detail);
    };

    window.addEventListener(
      "cookieConsent",
      handleConsent as EventListener
    );
    return () => {
      window.removeEventListener(
        "cookieConsent",
        handleConsent as EventListener
      );
    };
  }, []);

  return consent;
}
