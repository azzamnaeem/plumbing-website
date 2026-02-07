import { NextResponse } from "next/server";
import { getTestimonials } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const testimonials = await getTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json([], { status: 500 });
  }
}
