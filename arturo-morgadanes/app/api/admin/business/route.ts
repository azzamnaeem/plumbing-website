import { NextRequest, NextResponse } from "next/server";
import { getBusinessConfig, saveBusinessConfig, BusinessConfig } from "@/lib/data";

// GET - Get business config
export async function GET() {
  try {
    const config = await getBusinessConfig();
    return NextResponse.json(config);
  } catch (error) {
    console.error("Error fetching business config:", error);
    return NextResponse.json(
      { error: "Error al cargar la configuración" },
      { status: 500 }
    );
  }
}

// PUT - Update business config
export async function PUT(request: NextRequest) {
  try {
    const config: BusinessConfig = await request.json();

    // Validate required fields
    if (!config.name || !config.contact?.phone) {
      return NextResponse.json(
        { error: "Nombre y teléfono son requeridos" },
        { status: 400 }
      );
    }

    await saveBusinessConfig(config);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating business config:", error);
    return NextResponse.json(
      { error: "Error al actualizar la configuración" },
      { status: 500 }
    );
  }
}
