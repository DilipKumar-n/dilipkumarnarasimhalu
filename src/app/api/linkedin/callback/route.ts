import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { exchangeAuthorizationCode } from "@/lib/linkedin/client";

export const dynamic = "force-dynamic";

const STATE_COOKIE = "linkedin_oauth_state";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  if (error) {
    return NextResponse.json(
      { error, error_description: errorDescription },
      { status: 400 },
    );
  }

  if (!code || !state) {
    return NextResponse.json(
      { error: "Missing authorization code or state." },
      { status: 400 },
    );
  }

  const cookieStore = await cookies();
  const savedState = cookieStore.get(STATE_COOKIE)?.value;
  cookieStore.delete(STATE_COOKIE);

  if (!savedState || savedState !== state) {
    return NextResponse.json({ error: "Invalid OAuth state." }, { status: 400 });
  }

  try {
    const tokens = await exchangeAuthorizationCode(code);

    return NextResponse.json({
      message:
        "LinkedIn OAuth succeeded. Copy access_token into LINKEDIN_ACCESS_TOKEN in .env.local (and refresh_token if present).",
      access_token: tokens.access_token,
      expires_in: tokens.expires_in,
      refresh_token: tokens.refresh_token,
      scope: tokens.scope,
      note:
        "The Recommendation API requires LinkedIn partner approval for Reputation API. Use the Developer Portal token generator with Reputation scopes if available.",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Token exchange failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
