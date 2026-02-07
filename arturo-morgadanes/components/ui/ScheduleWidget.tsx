"use client";

import { useEffect } from "react";
import { Calendar } from "lucide-react";

declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void;
      ns?: Record<string, unknown>;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

interface ScheduleWidgetProps {
  calLink?: string;
  buttonText?: string;
  className?: string;
}

export function ScheduleWidget({
  calLink,
  buttonText = "Agendar Cita",
  className = "",
}: ScheduleWidgetProps) {
  const link = calLink || process.env.NEXT_PUBLIC_CAL_LINK || "arturo-morgadanes";

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal("init", { origin: "https://cal.com" });
        window.Cal("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#1d4ed8" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://app.cal.com/embed/embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleClick = () => {
    if (window.Cal) {
      window.Cal("openModal", {
        calLink: link,
        config: {
          layout: "month_view",
          theme: "light",
        },
      });
    } else {
      // Fallback: open Cal.com in new tab
      window.open(`https://cal.com/${link}`, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      data-cal-link={link}
      className={`inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors ${className}`}
    >
      <Calendar className="w-5 h-5" />
      {buttonText}
    </button>
  );
}
