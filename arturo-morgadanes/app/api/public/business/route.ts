import { NextResponse } from "next/server";
import { getBusinessConfig } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const config = await getBusinessConfig();
    return NextResponse.json(config);
  } catch (error) {
    console.error("Error fetching business config:", error);
    return NextResponse.json({}, { status: 500 });
  }
}
