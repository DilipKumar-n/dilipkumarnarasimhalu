import type { Testimonial } from "@/types/portfolio";
import {
  extractPersonId,
  fetchPersonProfile,
  profileToDisplayName,
  profileToHeadline,
} from "./client";
import { parseRecommenderOverrides } from "./config";
import type { LinkedInRecommendation } from "./types";

const RELATIONSHIP_LABELS: Record<string, string> = {
  RECOMMENDER_MANAGED_RECOMMENDEE: "Manager",
  RECOMMENDER_REPORTED_TO_RECOMMENDEE: "Reported to recommendee",
  RECOMMENDER_SENIOR_THAN_RECOMMENDEE: "Senior colleague",
  RECOMMENDEE_SENIOR_THAN_RECOMMENDER: "Senior colleague",
  WORKED_IN_SAME_GROUP: "Colleague",
  WORKED_IN_DIFFERENT_GROUPS: "Colleague",
  WORKED_IN_DIFFERENT_COMPANIES: "Colleague",
  RECOMMENDEE_IS_CLIENT_OF_RECOMMENDER: "Client",
  RECOMMENDER_IS_CLIENT_OF_RECOMMENDEE: "Client",
  RECOMMENDER_TAUGHT_RECOMMENDEE: "Mentor",
  RECOMMENDER_ADVISED_RECOMMENDEE: "Advisor",
  RECOMMENDER_STUDIED_WITH_RECOMMENDEE: "Peer",
};

function relationshipLabel(relationship?: string): string {
  if (!relationship) return "Professional contact";
  return RELATIONSHIP_LABELS[relationship] ?? "Professional contact";
}

export async function mapRecommendationsToTestimonials(
  recommendations: LinkedInRecommendation[],
  accessToken: string,
): Promise<Testimonial[]> {
  const overrides = parseRecommenderOverrides();
  const visible = recommendations.filter(
    (r) => r.status === "VISIBLE" && r.recommendationText?.trim(),
  );

  const testimonials = await Promise.all(
    visible.map(async (rec) => {
      const personId = rec.recommender
        ? extractPersonId(rec.recommender)
        : null;
      const override = personId ? overrides[personId] : undefined;

      let author = override?.author ?? "LinkedIn connection";
      let designation =
        override?.designation ?? relationshipLabel(rec.relationship);

      if (!override && personId) {
        const profile = await fetchPersonProfile(accessToken, personId);
        if (profile) {
          const name = profileToDisplayName(profile);
          if (name) author = name;
          const headline = profileToHeadline(profile);
          if (headline) designation = headline;
        }
      }

      return {
        quote: rec.recommendationText!.trim(),
        author,
        designation,
        imageUrl: override?.imageUrl,
        linkedinUsername: override?.linkedinUsername,
      };
    }),
  );

  return testimonials;
}
