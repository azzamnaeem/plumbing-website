"use client";

import { Construction } from "lucide-react";

export default function CitiesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ciudades</h1>
        <p className="text-gray-600 mt-1">Gestiona las zonas de servicio</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <Construction className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Próximamente
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          El editor de ciudades estará disponible pronto. Por ahora, puedes
          editar las ciudades directamente en el archivo{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            content/cities.ts
          </code>
        </p>
      </div>
    </div>
  );
}
