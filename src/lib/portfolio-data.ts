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
    role: "Freelance Frontend Engineer",
    company: "Independent · Bengaluru",
    duration: "Aug 2025 – Present",
    description: [
      "Took a planned career break to support family priorities while continuing selective freelance and consulting work.",
      "Delivered frontend solutions using React.js, VTEX Commerce, and TypeScript for client projects.",
      "Explored modern frontend tooling and architectures including micro-frontends and performance optimization techniques.",
    ],
  },
  {
    role: "Technical Lead / Senior Frontend Engineer",
    company: "Wipro Ltd.",
    duration: "Jul 2024 – Aug 2025",
    description: [
      "Led a team delivering a React.js + TypeScript + Contentful CMS enterprise web app.",
      "Improved performance by 25% using code-splitting, lazy loading, and optimized rendering.",
      "Built REST APIs with Node.js/Express.js, reducing response time by 15%.",
      "Ensured mobile-first, responsive design with Tailwind CSS, boosting mobile traffic engagement.",
      "Mentored developers, conducted code reviews, and streamlined estimation processes, reducing delivery delays.",
    ],
  },
  {
    role: "Technical Lead / Senior Frontend Engineer",
    company: "Trika Technologies Pvt. Ltd.",
    duration: "Dec 2020 – Jun 2024",
    description: [
      "Delivered multiple e-commerce websites on VTEX Commerce using React.js, Node.js, and GraphQL.",
      "Developed and published loyalty rewards apps on VTEX marketplace, enhancing customer retention.",
      "Integrated 3rd party services (payment gateways, reviews, newsletter) via custom React components.",
      "Improved checkout flow conversion rate by 18% through UX and performance enhancements.",
      "Directed development sprints, enforced coding standards, and reduced QA defects.",
    ],
  },
  {
    role: "Sr. Associate – Projects (Frontend / Automation)",
    company: "Cognizant Technology Solutions",
    duration: "Oct 2019 – Dec 2020",
    description: [
      "Built HYDRA automation testing framework for Walt Disney World using Protractor.",
      "Achieved 80% test automation coverage, reducing manual QA by 100+ hours per release.",
      "Created reusable page objects, locators, and test suites to improve maintainability.",
      "Actively contributed to GitHub repos, peer reviews, and documentation updates.",
    ],
  },
  {
    role: "Web Developer",
    company: "Primus Global Technologies Pvt. Ltd.",
    duration: "May 2018 – Oct 2019",
    description: [
      "Built responsive web components with HTML, CSS, and JavaScript following Oracle standards.",
      "Delivered pixel-perfect PSD-to-HTML conversions, reducing UI defects by 30%.",
      "Developed dashboards and CRUD services using Oracle APEX + REST APIs.",
    ],
  },
  {
    role: "Interactive Developer",
    company: "Echidna Software Pvt. Ltd.",
    duration: "May 2016 – May 2018",
    description: [
      "Developed e-commerce sites on Kibo (Mozu) with HTML, CSS, JavaScript, and Backbone.js.",
      "Owned end-to-end delivery of pixel-perfect, SEO-compliant, and mobile-responsive websites.",
      "Built reusable widgets and interactive components for dynamic content management.",
    ],
  },
  {
    role: "Web Developer",
    company: "Primus Global Technologies Pvt. Ltd.",
    duration: "Feb 2015 – May 2016",
    description: [
      "Migrated Oracle Partner Network pages to modern layouts using Oracle WebCenter Content.",
      "Supported global partner requests, ensuring content accuracy and compliance.",
    ],
  },
  {
    role: "Software Developer",
    company: "STYRE Solutions Pvt. Ltd.",
    duration: "Dec 2012 – Jan 2015",
    description: [
      "Created responsive websites with HTML, CSS, and JavaScript by converting PSD to HTML.",
      "Handled end-to-end hosting, database schema design, and maintenance for client sites.",
    ],
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
    imageUrl: "/images/jefferspet.png",
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
      "I had the chance to work closely with Dilip during my contract role at Wipro, where I was part of the project as a Solutions Architect and he led the technical delivery as Tech Lead. From day one, Dilip impressed me with his calm, focused approach and deep technical expertise. He's one of those people who just gets things done — whether it's solving tricky integration challenges, guiding the team on implementation best practices, or jumping in to support others when things get tight. Dilip has a great way of translating high-level architecture into practical, scalable solutions that actually work. What I really appreciated about working with him was his collaborative style. He listens, challenges ideas when needed, and always keeps the bigger picture in mind. It made working together not just easy, but genuinely enjoyable. I'd happily work with Dilip again anytime and highly recommend him for any senior tech or leadership role. He's the kind of teammate every project needs.",
    author: "Jatin Waichal",
    designation: "Solutions Architect",
    linkedinUsername: "jatin-waichal",
  },
  {
    quote:
      "I had the pleasure of working closely with Dilip Kumar for nearly two years, during which he played a key role on our frontend development team. From the very beginning, Dilip demonstrated a deep passion for UI development and a remarkable ability to translate design concepts into pixel-perfect, high-performance user interfaces. Dilip has a sharp eye for detail — he doesn't just implement designs but ensures they align exactly with the designer's vision, paying close attention to spacing, typography, responsiveness, and interaction nuances. His commitment to quality is exceptional, and he takes pride in delivering work that meets the highest standards in both functionality and visual fidelity. What sets Dilip apart is not only his dedication but also his willingness to go the extra mile to meet tight deadlines without compromising quality. He consistently showed initiative and was quick to adapt to new frontend technologies, frameworks, and tools. Whether it was refining animations, optimizing performance, or debugging complex layout issues, Dilip approached every challenge with determination and skill. He also brought a collaborative and supportive attitude to the team, always open to feedback and ready to contribute wherever needed. His professionalism, reliability, and passion for frontend development made him an asset to our projects and a pleasure to work with. Dilip would be a strong addition to any team that values clean, scalable, and pixel-perfect frontend work. I truly look forward to working with him again.",
    author: "Pradeep Ramachandran",
    designation: "Senior Software Engineer",
    linkedinUsername: "pradeep-ramachandran-5467a9114",
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
