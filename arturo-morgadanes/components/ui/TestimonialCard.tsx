import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { getTranslatedTestimonial } from "@/content/testimonials";
import type { Locale } from "@/lib/i18n/config";

interface TestimonialCardProps {
  testimonial: Testimonial;
  locale?: Locale;
}

export function TestimonialCard({ testimonial, locale = "es" }: TestimonialCardProps) {
  const { text, service } = getTranslatedTestimonial(testimonial, locale);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-blue-100 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= testimonial.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 mb-4 italic">&quot;{text}&quot;</p>

      {/* Author */}
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">
          {testimonial.location} · {service}
        </p>
      </div>
    </div>
  );
}
