"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const gaId = measurementId || process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics with GDPR-compliant default consent */}
      <Script id="google-analytics-consent" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Default to denied - GDPR compliant
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });

          // Check if user has already consented
          (function() {
            try {
              var consent = localStorage.getItem('cookie_consent');
              if (consent) {
                var parsed = JSON.parse(consent);
                if (parsed.settings) {
                  gtag('consent', 'update', {
                    'analytics_storage': parsed.settings.analytics ? 'granted' : 'denied',
                    'ad_storage': parsed.settings.marketing ? 'granted' : 'denied',
                    'ad_user_data': parsed.settings.marketing ? 'granted' : 'denied',
                    'ad_personalization': parsed.settings.marketing ? 'granted' : 'denied'
                  });
                }
              }
            } catch(e) {}
          })();
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

// Custom event tracking (only fires if consent given)
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Predefined events for the plumber website
export const analyticsEvents = {
  formSubmission: () => trackEvent("form_submission", "contact"),
  whatsappClick: () => trackEvent("whatsapp_click", "communication"),
  phoneClick: () => trackEvent("phone_click", "communication"),
  appointmentScheduled: () => trackEvent("appointment_scheduled", "booking"),
  serviceView: (serviceName: string) =>
    trackEvent("service_view", "engagement", serviceName),
};

// Add gtag to window type
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}
