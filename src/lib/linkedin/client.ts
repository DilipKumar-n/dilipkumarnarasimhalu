import {
  LINKEDIN_API_BASE,
  LINKEDIN_OAUTH_TOKEN_URL,
  getLinkedInConfig,
} from "./config";
import type {
  LinkedInPersonProfile,
  LinkedInRecommendationListResponse,
} from "./types";

const RESTLI_HEADERS = {
  "X-Restli-Protocol-Version": "2.0.0",
  Accept: "application/json",
} as const;

type TokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  scope?: string;
};

export function extractPersonId(personUrn: string): string | null {
  const match = personUrn.match(/urn:li:person:([^,)]+)/);
  return match?.[1] ?? null;
}

async function linkedInFetch<T>(
  path: string,
  accessToken: string,
  init?: RequestInit,
): Promise<T> {
  const url = path.startsWith("http") ? path : `${LINKEDIN_API_BASE}${path}`;

  const response = await fetch(url, {
    ...init,
    headers: {
      ...RESTLI_HEADERS,
      Authorization: `Bearer ${accessToken}`,
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `LinkedIn API ${response.status}: ${body || response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function exchangeAuthorizationCode(
  code: string,
): Promise<TokenResponse> {
  const { clientId, clientSecret, redirectUri } = getLinkedInConfig();

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error(
      "LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, and LINKEDIN_REDIRECT_URI are required.",
    );
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(LINKEDIN_OAUTH_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`LinkedIn token exchange failed: ${text}`);
  }

  return response.json() as Promise<TokenResponse>;
}

export async function refreshAccessToken(): Promise<string> {
  const { clientId, clientSecret, refreshToken } = getLinkedInConfig();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, and LINKEDIN_REFRESH_TOKEN are required.",
    );
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(LINKEDIN_OAUTH_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`LinkedIn token refresh failed: ${text}`);
  }

  const data = (await response.json()) as TokenResponse;
  return data.access_token;
}

export async function resolveAccessToken(): Promise<string | null> {
  const { accessToken, refreshToken } = getLinkedInConfig();
  if (accessToken) return accessToken;

  if (refreshToken) {
    try {
      return await refreshAccessToken();
    } catch (error) {
      console.error("LinkedIn token refresh failed:", error);
    }
  }

  return null;
}

/** Recommendations received by the authenticated member. */
export async function fetchReceivedRecommendations(
  accessToken: string,
): Promise<LinkedInRecommendationListResponse> {
  const query = new URLSearchParams({
    q: "recipient",
    statusFilters: "List(VISIBLE)",
  });

  return linkedInFetch<LinkedInRecommendationListResponse>(
    `/recommendation?${query}`,
    accessToken,
  );
}

function localizedName(field?: {
  localized?: Record<string, string>;
}): string {
  if (!field?.localized) return "";
  const values = Object.values(field.localized);
  return values[0] ?? "";
}

/** Best-effort profile lookup for a recommender (partner apps may have broader access). */
export async function fetchPersonProfile(
  accessToken: string,
  personId: string,
): Promise<LinkedInPersonProfile | null> {
  try {
    return await linkedInFetch<LinkedInPersonProfile>(
      `/people/(id:${personId})?projection=(id,localizedFirstName,localizedLastName,firstName,lastName,headline)`,
      accessToken,
    );
  } catch {
    return null;
  }
}

export function profileToDisplayName(profile: LinkedInPersonProfile): string {
  const first =
    profile.localizedFirstName ||
    localizedName(profile.firstName) ||
    "";
  const last =
    profile.localizedLastName || localizedName(profile.lastName) || "";
  return [first, last].filter(Boolean).join(" ").trim();
}

export function profileToHeadline(profile: LinkedInPersonProfile): string {
  if (!profile.headline?.localized) return "";
  return Object.values(profile.headline.localized)[0] ?? "";
}
