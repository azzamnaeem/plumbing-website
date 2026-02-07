import { NextRequest, NextResponse } from "next/server";
import {
  getTestimonials,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
  Testimonial,
} from "@/lib/data";

// GET - Get all testimonials
export async function GET() {
  try {
    const testimonials = await getTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Error al cargar los testimonios" },
      { status: 500 }
    );
  }
}

// POST - Add new testimonial
export async function POST(request: NextRequest) {
  try {
    const testimonial: Testimonial = await request.json();

    // Validate required fields
    if (!testimonial.name || !testimonial.text || !testimonial.service) {
      return NextResponse.json(
        { error: "Nombre, texto y servicio son requeridos" },
        { status: 400 }
      );
    }

    await addTestimonial(testimonial);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return NextResponse.json(
      { error: "Error al añadir el testimonio" },
      { status: 500 }
    );
  }
}

// PUT - Update testimonial
export async function PUT(request: NextRequest) {
  try {
    const { index, testimonial }: { index: number; testimonial: Testimonial } =
      await request.json();

    if (typeof index !== "number" || index < 0) {
      return NextResponse.json(
        { error: "Índice inválido" },
        { status: 400 }
      );
    }

    await updateTestimonial(index, testimonial);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return NextResponse.json(
      { error: "Error al actualizar el testimonio" },
      { status: 500 }
    );
  }
}

// DELETE - Delete testimonial
export async function DELETE(request: NextRequest) {
  try {
    const { index }: { index: number } = await request.json();

    if (typeof index !== "number" || index < 0) {
      return NextResponse.json(
        { error: "Índice inválido" },
        { status: 400 }
      );
    }

    await deleteTestimonial(index);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return NextResponse.json(
      { error: "Error al eliminar el testimonio" },
      { status: 500 }
    );
  }
}
