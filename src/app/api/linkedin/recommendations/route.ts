import { NextResponse } from "next/server";
import { getTestimonials } from "@/lib/linkedin/get-testimonials";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { testimonials, source } = await getTestimonials();
    return NextResponse.json({ testimonials, source });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load recommendations";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
