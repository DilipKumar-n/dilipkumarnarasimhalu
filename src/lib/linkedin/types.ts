export type LinkedInRecommendationStatus =
  | "PENDING"
  | "VISIBLE"
  | "HIDDEN"
  | "WITHDRAWN"
  | "REPLACED"
  | "CLOSED";

export type LinkedInRecommendation = {
  id: number;
  recommendationText?: string;
  recommendee?: string;
  recommendeeEntity?: string;
  recommender?: string;
  recommenderEntity?: string;
  relationship?: string;
  status?: LinkedInRecommendationStatus;
  visibilityForRecommender?: string;
  created?: number;
  lastModified?: number;
};

export type LinkedInRecommendationListResponse = {
  elements?: LinkedInRecommendation[];
  paging?: {
    count?: number;
    start?: number;
    links?: unknown[];
  };
};

export type LinkedInPersonName = {
  localized?: Record<string, string>;
  preferredLocale?: { country?: string; language?: string };
};

export type LinkedInPersonProfile = {
  id?: string;
  localizedFirstName?: string;
  localizedLastName?: string;
  firstName?: LinkedInPersonName;
  lastName?: LinkedInPersonName;
  headline?: { localized?: Record<string, string> };
};

export type RecommenderOverride = {
  author: string;
  designation: string;
  imageUrl?: string;
  linkedinUsername?: string;
};

export type RecommenderOverrides = Record<string, RecommenderOverride>;
