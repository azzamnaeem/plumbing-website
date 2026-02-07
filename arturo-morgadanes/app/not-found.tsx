import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { business } from "@/content/business";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-100">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que busca no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Llamar
          </a>
        </div>
      </div>
    </div>
  );
}
