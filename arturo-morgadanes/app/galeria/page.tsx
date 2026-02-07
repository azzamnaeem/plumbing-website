import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { galleryItems } from "@/content/gallery";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Galería de Trabajos",
  description: `Galería de trabajos realizados por ${business.name}. Fotos de antes y después de desatascos, reformas de baños, reparaciones y más. Vea la calidad de nuestro trabajo.`,
};

export default function GaleriaPage() {
  // Group items by service
  const serviceGroups = galleryItems.reduce(
    (acc, item) => {
      if (!acc[item.service]) {
        acc[item.service] = [];
      }
      acc[item.service].push(item);
      return acc;
    },
    {} as Record<string, typeof galleryItems>
  );

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería de Trabajos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vea algunos de los trabajos que he realizado. Fotos de antes y
            después para que pueda comprobar la calidad de mi trabajo.
          </p>
        </div>

        {/* Gallery by Service */}
        {Object.entries(serviceGroups).map(([service, items]) => (
          <section key={service} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
              {service}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Le gusta lo que ve?
          </h2>
          <p className="text-gray-600 mb-6">
            Contacte conmigo para obtener un presupuesto sin compromiso para su
            proyecto.
          </p>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Llamar: {business.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
