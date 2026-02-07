"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Wrench,
  Building2,
  Image,
  MapPin,
  Plus,
  ArrowRight,
} from "lucide-react";

interface Stats {
  testimonials: number;
  businessName: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [testimonialsRes, businessRes] = await Promise.all([
          fetch("/api/admin/testimonials"),
          fetch("/api/admin/business"),
        ]);

        const testimonials = await testimonialsRes.json();
        const business = await businessRes.json();

        setStats({
          testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
          businessName: business.name || "Sin nombre",
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const quickActions = [
    {
      href: "/admin/testimonials",
      label: "Testimonios",
      description: "Gestionar opiniones de clientes",
      icon: MessageSquare,
      color: "bg-blue-500",
      action: "Añadir testimonio",
    },
    {
      href: "/admin/services",
      label: "Servicios",
      description: "Editar servicios ofrecidos",
      icon: Wrench,
      color: "bg-green-500",
      action: "Editar servicios",
    },
    {
      href: "/admin/business",
      label: "Negocio",
      description: "Información de contacto y horarios",
      icon: Building2,
      color: "bg-purple-500",
      action: "Actualizar info",
    },
    {
      href: "/admin/gallery",
      label: "Galería",
      description: "Fotos de antes/después",
      icon: Image,
      color: "bg-orange-500",
      action: "Añadir fotos",
    },
    {
      href: "/admin/cities",
      label: "Ciudades",
      description: "Zonas de servicio",
      icon: MapPin,
      color: "bg-red-500",
      action: "Editar zonas",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Bienvenido al panel de administración
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? "..." : stats?.testimonials || 0}
              </p>
              <p className="text-gray-600">Testimonios</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">6</p>
              <p className="text-gray-600">Servicios</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? "..." : stats?.businessName}
              </p>
              <p className="text-gray-600">Negocio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Acciones rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white`}
                >
                  <action.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{action.label}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {action.description}
                  </p>
                  <p className="text-sm text-blue-600 mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                    {action.action}
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Help section */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">
          ¿Cómo funciona?
        </h2>
        <ul className="text-blue-800 space-y-2">
          <li>
            • <strong>Testimonios:</strong> Añade, edita o elimina opiniones de clientes
          </li>
          <li>
            • <strong>Servicios:</strong> Actualiza precios, descripciones y FAQs
          </li>
          <li>
            • <strong>Negocio:</strong> Modifica teléfono, email, horarios y estadísticas
          </li>
          <li>
            • <strong>Galería:</strong> Sube fotos de trabajos realizados
          </li>
          <li>
            • <strong>Ciudades:</strong> Gestiona las zonas de servicio
          </li>
        </ul>
        <p className="text-blue-800 mt-4">
          Los cambios se aplican inmediatamente en el sitio web.
        </p>
      </div>
    </div>
  );
}
