import type { RecommenderOverrides } from "./types";

const LINKEDIN_API_BASE = "https://api.linkedin.com/v2";

export function getLinkedInConfig() {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const refreshToken = process.env.LINKEDIN_REFRESH_TOKEN;

  return {
    clientId,
    clientSecret,
    redirectUri,
    accessToken,
    refreshToken,
    isConfigured: Boolean(accessToken || (clientId && clientSecret)),
    hasOAuth: Boolean(clientId && clientSecret && redirectUri),
  };
}

export function parseRecommenderOverrides(): RecommenderOverrides {
  const raw = process.env.LINKEDIN_RECOMMENDER_OVERRIDES;
  if (!raw) return {};

  try {
    return JSON.parse(raw) as RecommenderOverrides;
  } catch {
    console.warn(
      "LINKEDIN_RECOMMENDER_OVERRIDES is not valid JSON; ignoring overrides.",
    );
    return {};
  }
}

export { LINKEDIN_API_BASE };

/** OAuth scopes — Reputation/Recommendation API requires LinkedIn partner approval. */
export const LINKEDIN_OAUTH_SCOPES = ["openid", "profile", "email"] as const;

export const LINKEDIN_OAUTH_AUTHORIZE_URL =
  "https://www.linkedin.com/oauth/v2/authorization";

export const LINKEDIN_OAUTH_TOKEN_URL =
  "https://www.linkedin.com/oauth/v2/accessToken";
