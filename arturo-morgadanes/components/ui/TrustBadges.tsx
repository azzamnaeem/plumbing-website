"use client";

import { useEffect, useState } from "react";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { BusinessConfig } from "@/lib/data";

export function TrustBadges() {
  const { t } = useLanguage();
  const [business, setBusiness] = useState<BusinessConfig | null>(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const res = await fetch("/api/public/business");
        const data = await res.json();
        setBusiness(data);
      } catch (error) {
        console.error("Error fetching business:", error);
      }
    }
    fetchBusiness();
  }, []);

  // Default values while loading
  const experience = business?.stats?.experience || 15;
  const jobsCompleted = business?.stats?.jobsCompleted || 2000;
  const googleReviewScore = business?.stats?.googleReviewScore || 4.9;

  const badges = [
    {
      icon: Clock,
      title: `${experience} ${t("trust", "years")}`,
      subtitle: t("trust", "ofExperience"),
    },
    {
      icon: CheckCircle,
      title: `+${jobsCompleted}`,
      subtitle: t("trust", "jobsCompleted"),
    },
    {
      icon: Award,
      title: `${googleReviewScore} ${t("trust", "stars")}`,
      subtitle: t("trust", "onGoogle"),
    },
    {
      icon: Shield,
      title: t("trust", "guaranteeTitle"),
      subtitle: t("trust", "onAllWork"),
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <badge.icon className="w-10 h-10 text-blue-600 mb-3" />
              <p className="text-2xl font-bold text-gray-900">{badge.title}</p>
              <p className="text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
