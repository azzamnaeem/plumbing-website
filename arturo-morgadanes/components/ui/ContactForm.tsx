"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { services } from "@/content/services";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  servicio: string;
  mensaje: string;
  urgente: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
    urgente: false,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          servicio: "",
          mensaje: "",
          urgente: false,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-green-700">
          Gracias por contactar. Le responderé lo antes posible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-green-600 underline hover:no-underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nombre *
        </label>
        <input
          type="text"
          id="nombre"
          required
          value={formData.nombre}
          onChange={(e) =>
            setFormData({ ...formData, nombre: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Su nombre"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="telefono"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Teléfono *
        </label>
        <input
          type="tel"
          id="telefono"
          required
          value={formData.telefono}
          onChange={(e) =>
            setFormData({ ...formData, telefono: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="600 000 000"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email (opcional)
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="su@email.com"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="servicio"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Servicio necesitado
        </label>
        <select
          id="servicio"
          value={formData.servicio}
          onChange={(e) =>
            setFormData({ ...formData, servicio: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="">Seleccione un servicio</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Descripción del problema
        </label>
        <textarea
          id="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={(e) =>
            setFormData({ ...formData, mensaje: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
          placeholder="Describa brevemente su problema o lo que necesita..."
        />
      </div>

      {/* Urgent checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="urgente"
          checked={formData.urgente}
          onChange={(e) =>
            setFormData({ ...formData, urgente: e.target.checked })
          }
          className="w-5 h-5 text-red-600 rounded focus:ring-red-500 border-gray-300"
        />
        <label htmlFor="urgente" className="text-sm text-gray-700">
          <span className="font-medium text-red-600">Es urgente</span> -
          Necesito atención lo antes posible
        </label>
      </div>

      {/* Privacy notice */}
      <p className="text-xs text-gray-500">
        Al enviar este formulario, acepta nuestra{" "}
        <a href="/politica-privacidad" className="underline hover:no-underline">
          política de privacidad
        </a>
        . Sus datos serán utilizados únicamente para responder a su solicitud.
      </p>

      {/* Error message */}
      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          Error al enviar el mensaje. Por favor, intente de nuevo o llámenos
          directamente.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 disabled:bg-blue-400 transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </>
        )}
      </button>
    </form>
  );
}
