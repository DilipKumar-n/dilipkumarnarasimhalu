# Portfolio Website

Responsive and scalable portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- ESLint

## Folder Structure

```txt
src/
  app/
    api/linkedin/
      auth/route.ts          # Start OAuth flow
      callback/route.ts      # OAuth callback (returns tokens)
      recommendations/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    common/
      section-heading.tsx
    layout/
      footer.tsx
      header.tsx
    sections/
      about-section.tsx
      contact-section.tsx
      experience-section.tsx
      hero-section.tsx
      projects-section.tsx
      skills-section.tsx
      testimonials-section.tsx
  lib/
    linkedin/                # LinkedIn Recommendation API client
      auth.ts
      client.ts
      config.ts
      get-testimonials.ts
      map-recommendations.ts
      types.ts
    portfolio-data.ts        # Fallback testimonials when API is unavailable
  types/
    portfolio.ts
```

## LinkedIn Recommendations API

Testimonials are loaded from the [LinkedIn Recommendation API](https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/reputation-guides/recommendation) when credentials are configured, with static fallbacks in `portfolio-data.ts`.

1. Create an app at [LinkedIn Developers](https://www.linkedin.com/developers/apps).
2. Request access to the **Reputation API** (partner approval required for production use).
3. Copy `.env.example` to `.env.local` and set `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, and `LINKEDIN_REDIRECT_URI`.
4. Obtain a token:
   - Visit `/api/linkedin/auth` after `npm run dev`, sign in, then copy tokens from `/api/linkedin/callback`, or
   - Use the [token generator](https://www.linkedin.com/developers/tools/oauth/token-generator) in the Developer Portal.
5. Set `LINKEDIN_ACCESS_TOKEN` in `.env.local`.

Optional: set `LINKEDIN_RECOMMENDER_OVERRIDES` with JSON keyed by recommender person ID if profile lookups are restricted.

- `GET /api/linkedin/recommendations` — JSON list of testimonials (`source`: `linkedin` | `fallback`).
- Testimonials section revalidates cached LinkedIn data every hour.

## Scripts

- `npm run dev` - run local development server
- `npm run lint` - run lint checks
- `npm run build` - create production build
- `npm run start` - start production server

## Run Locally

```bash
npm install
npm run dev
```
