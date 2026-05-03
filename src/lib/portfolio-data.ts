import type {
  ExperienceItem,
  NavLink,
  ProjectItem,
  Skill,
  SocialLink,
  Testimonial,
} from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

export const heroData = {
  greeting: "Hello, I'm DIlip Kumar Narasimhalu.",
  role: "Frontend Engineer",
  location: "Based In India.",
  summary:
    "I'm DIlip Kumar Narasimhalu, a passionate Frontend Engineer specializing in building modern, responsive web applications using React, Next.js, and TypeScript. I focus on creating seamless user experiences with clean, maintainable code.",
};

export const skills: Skill[] = [
  { name: "React.js/Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Contentful CMS" },
  { name: "REST APIs" },
  { name: "Figma" },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2023 - Present",
    description:[
      "Leading frontend development initiatives, architecting scalable React applications, and mentoring junior developers. Improved application performance by 40% through optimization techniques."],
  },
  {
    role: "Frontend Developer",
    company: "Digital Innovations Ltd.",
    duration: "Jun 2021 - Dec 2022",
    description:[
      "Developed and maintained responsive web applications using React and Next.js. Collaborated with UX/UI designers to implement pixel-perfect designs and improved user engagement metrics."],
  },
  {
    role: "Junior Frontend Developer",
    company: "WebDev Studio",
    duration: "Jan 2020 - May 2021",
    description:[
      "Started career building frontend components and contributing to full-stack projects. Learned best practices in web development and established strong foundation in React and JavaScript."],
  },
];

export const aboutParagraphs: string[] = [
  "Frontend JavaScript Engineer with 12+ years of experience delivering scalable, high-performance applications using React.js, Next.js, Node.js, and TypeScript.", "Expertise performance optimization (reducing load times by up to 25%), scalable micro-frontends, responsive UI, and secure API integration.", "Strong background in ecommerce platforms, improving checkout conversions by 18%.", "Experienced in Agile delivery, cloud-based deployments (Azure), and CI/CD pipelines."];

export const projects: ProjectItem[] = [
  {
    id: "01",
    imageUrl: "/images/ess.png",
    title: "Emergency Service and State Super Australia",
    link: "https://www.esssuper.com.au",
    tags: ["React.js", "Node.js", "Tailwind CSS", "REST API's", "Azure Repo", "Azure CI/CD", "Contentful CMS", "Figma"],
    description:
      "Emergency Service and State Super Australia website offers to discover tools, resources, and expert support from ESSSuper to help you grow your super, understand investment options, and plan confidently for retirement.",
  },
  {
    id: "02",
    imageUrl: "/images/muralsyourway.png",
    title: "Murals Your Way",
    link: "https://www.muralsyourway.com",
    tags: ["React.js", "Node.js", "VTEX Commerce", "REST API's", "Tachyons", "GA/GTM", "Figma"],
    description:
      "Murals Your Way by Environmental Graphics, LLC was a custom wallpaper mural company based in Hopkins, Minnesota - transforming spaces for over 40 years, and family owned and operated since 1992. We believe in the power of custom wallpaper murals and their ability to reinvent a space. Whether it’s a child’s bedroom, medical office, restaurant, a family room, or anything in-between, we’re excited to work with you and make something beautiful.",
  },
  {
    id: "03",
    imageUrl: "/images/Jefferspet.png",
    title: "Jeffers Pet, Equine & Livestock | Animal & Pet Supplies Store",
    link: "https://jefferspet.com",
    tags: ["React.js", "Node.js", "VTEX Commerce", "REST API's", "Tachyons", "GA/GTM", "Figma"],
    description:
      "Jeffers official online store is your trusted source for pet products, vaccines, meds, Rx & veterinary supplies for animals including horses, pets, cattle & livestock. Your pet store for affordable pet supplies online with fast shipping.",
  },
  {
    id: "04",
    imageUrl: "/images/paragonsports.png",
    title: "Paragon Sports: NYC's Best Specialty Sports Store",
    link: "https://paragonsports.com",
    tags: ["React.js", "Node.js", "VTEX Commerce", "REST API's", "Tachyons", "GA/GTM", "Figma"],
    description:
      "Shop the best selection of sports apparel and outdoor gear at Paragon Sports in NYC. We specialize in ski, running, tennis, team sports, camping and more. Shop our wide variety of clothing, shoes and equipment today!",
  },
  {
    id: "05",
    imageUrl: "/images/rmo.png",
    title: "100% Pure & Natural Essential Oils | Rocky Mountain Oils",
    link: "https://www.rockymountainoils.com/",
    tags: ["React.js", "Node.js", "VTEX Commerce", "REST API's", "Tachyons", "GA/GTM", "Figma"],
    description:
      "Rocky Mountain Oils provides 100% pure essential oils and essential oil products for home, health and beauty so that you can confidently care for yourself and your family.",
  },
  {
    id: "06",
    imageUrl: "/images/walt-disney.png",
    title: "Walt Disney World Resort near Orlando, Florida – Official Site",
    link: "https://disneyworld.disney.go.com",
    tags: ["Protractor", "Mocha", "Javascript", "Jest"],
    description:
      "Welcome to Walt Disney World Resort in Orlando, FL. Enjoy exciting theme parks, resorts, dining and more. Plan your magical family vacation now!",
  },
  {
    id: "07",
    imageUrl: "/images/oracle-com.png",
    title: "Oracle | Cloud Applications and Cloud Platform",
    link: "https://www.oracle.com",
    tags: ["Javascript", "jQuery", "Oracle JET", "Oracle APEX"],
    description:
      "Oracle offers a comprehensive and fully integrated stack of cloud applications and cloud platform services..",
  },
  {
    id: "08",
    imageUrl: "/images/wolters-kluwer.png",
    title: "Wolters Kluwer - Combining Domain Expertise With Advanced Technology | Wolters Kluwer",
    link: "https://www.wolterskluwer.com",
    tags: ["Mozu", "jQuery", "Javascript", "Backbone.js", "Photoshop"],
    description:
      "Wolters Kluwer is a global provider of professional information, software, AI solutions, and services.  ",
  },
  {
    id: "09",
    imageUrl: "/images/volt.png",
    title: "Factory Direct Landscape Lighting  | VOLT® Lighting",
    link: "https://www.voltlighting.com",
    tags: ["Mozu", "jQuery", "Javascript", "Backbone.js", "Photoshop"],
    description:
      "Shop VOLT® for easy-to-install landscape lighting fixtures, low voltage transformers and LED outdoor light bulbs with lifetime warranties and fast shipping.",
  },
  {
    id: "10",
    imageUrl: "/images/oracle-opn.png",
    title: "Partners | Oracle India",
    link: "http://partners.oracle.com",
    tags: ["Javascript", "jQuery", "HTML", "CSS"],
    description:
      "Join Oracle PartnerNetwork and accelerate your business momentum and drive greater customer success.",
  },
  {
    id: "11",
    imageUrl: "/images/aims.png",
    title: "Top Colleges in Bangalore | AIMS Institutes",
    link: "https://www.theaims.ac.in",
    tags: ["Javascript", "jQuery", "HTML", "CSS"],
    description:
      "Looking for the top colleges in Bangalore? AIMS is a trusted choice, ranked among the best business colleges and best hospitality colleges in Bangalore.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    author: "Evren Shah",
    designation: "Designer",
  },
  {
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    author: "Flora sheen",
    designation: "Designer",
  },
  {
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    author: "Evren Shah",
    designation: "Designer",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/DilipKumar-n",
    handle: "github.com/DilipKumar-n",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dilipkumarn14",
    handle: "linkedin.com/in/dilipkumarn14",
  },
];

export const contactData = {
  title: "Let's talk for Something special",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email: "dilipkumarn14@gmail.com",
  phone: "8892363070",
};
