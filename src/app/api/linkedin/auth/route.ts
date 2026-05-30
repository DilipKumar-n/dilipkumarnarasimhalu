import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { buildLinkedInAuthorizationUrl } from "@/lib/linkedin/auth";
import { getLinkedInConfig } from "@/lib/linkedin/config";

export const dynamic = "force-dynamic";

const STATE_COOKIE = "linkedin_oauth_state";

export async function GET() {
  const { hasOAuth } = getLinkedInConfig();

  if (!hasOAuth) {
    return NextResponse.json(
      {
        error:
          "Set LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, and LINKEDIN_REDIRECT_URI.",
      },
      { status: 500 },
    );
  }

  const state = randomBytes(16).toString("hex");
  const cookieStore = await cookies();

  cookieStore.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });

  const url = buildLinkedInAuthorizationUrl(state);
  return NextResponse.redirect(url);
}
