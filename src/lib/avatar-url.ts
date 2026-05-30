export function getLinkedInAvatarUrl(linkedinUsername: string): string {
  return `https://unavatar.io/linkedin/${linkedinUsername}`;
}

export function getInitialsAvatarUrl(name: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=18181b&color=fff&size=128`;
}

export function resolveTestimonialImageUrl(testimonial: {
  author: string;
  imageUrl?: string;
  linkedinUsername?: string;
}): string {
  if (testimonial.imageUrl) return testimonial.imageUrl;
  if (testimonial.linkedinUsername) {
    return getLinkedInAvatarUrl(testimonial.linkedinUsername);
  }
  return getInitialsAvatarUrl(testimonial.author);
}
