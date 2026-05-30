import { unstable_cache } from "next/cache";
import { testimonials as fallbackTestimonials } from "@/lib/portfolio-data";
import type { Testimonial } from "@/types/portfolio";
import {
  fetchReceivedRecommendations,
  resolveAccessToken,
} from "./client";
import { getLinkedInConfig } from "./config";
import { mapRecommendationsToTestimonials } from "./map-recommendations";

function mergeTestimonialAvatars(
  testimonials: Testimonial[],
  fallbacks: Testimonial[],
): Testimonial[] {
  return testimonials.map((testimonial) => {
    const match = fallbacks.find(
      (fallback) =>
        fallback.author.toLowerCase() === testimonial.author.toLowerCase(),
    );

    if (!match) return testimonial;

    return {
      ...testimonial,
      imageUrl: testimonial.imageUrl ?? match.imageUrl,
      linkedinUsername:
        testimonial.linkedinUsername ?? match.linkedinUsername,
    };
  });
}

async function fetchTestimonialsFromLinkedIn(): Promise<Testimonial[]> {
  const token = await resolveAccessToken();
  if (!token) {
    throw new Error("No LinkedIn access token configured.");
  }

  const response = await fetchReceivedRecommendations(token);
  const elements = response.elements ?? [];

  if (elements.length === 0) {
    return fallbackTestimonials;
  }

  const mapped = await mapRecommendationsToTestimonials(elements, token);
  if (mapped.length === 0) return fallbackTestimonials;
  return mergeTestimonialAvatars(mapped, fallbackTestimonials);
}

const getCachedLinkedInTestimonials = unstable_cache(
  fetchTestimonialsFromLinkedIn,
  ["linkedin-recommendations"],
  { revalidate: 3600, tags: ["linkedin-recommendations"] },
);

export async function getTestimonials(): Promise<{
  testimonials: Testimonial[];
  source: "linkedin" | "fallback";
}> {
  const { isConfigured } = getLinkedInConfig();

  if (!isConfigured) {
    return { testimonials: fallbackTestimonials, source: "fallback" };
  }

  try {
    const testimonials = await getCachedLinkedInTestimonials();
    return { testimonials, source: "linkedin" };
  } catch (error) {
    console.error("LinkedIn recommendations fetch failed:", error);
    return { testimonials: fallbackTestimonials, source: "fallback" };
  }
}
