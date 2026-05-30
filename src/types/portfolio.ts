export type NavLink = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  imageUrl: string;
  link: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  designation: string;
  imageUrl?: string;
  linkedinUsername?: string;
};

export type TestimonialDisplay = Testimonial & {
  avatarUrl: string;
};

export type SocialLink = {
  name: string;
  href: string;
  handle: string;
};
