import {
  LINKEDIN_OAUTH_AUTHORIZE_URL,
  LINKEDIN_OAUTH_SCOPES,
  getLinkedInConfig,
} from "./config";

export function buildLinkedInAuthorizationUrl(state: string): string {
  const { clientId, redirectUri } = getLinkedInConfig();

  if (!clientId || !redirectUri) {
    throw new Error(
      "LINKEDIN_CLIENT_ID and LINKEDIN_REDIRECT_URI are required for OAuth.",
    );
  }

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    state,
    scope: LINKEDIN_OAUTH_SCOPES.join(" "),
  });

  return `${LINKEDIN_OAUTH_AUTHORIZE_URL}?${params}`;
}
