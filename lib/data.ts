import type { IconName } from "@/components/Icons";

export const profile = {
  name: "Sabien Douven",
  role: "Front-end Developer",
  tagline: "met een passie voor UX&UI",
  quote: { text: "People ignore design that ignore people.", author: "Frank Chimero" },
  email: "sabien_02@hotmail.com",
  website: { href: "https://sabiendouven.nl", label: "https://sabiendouven.nl" },
  location: "Beek, Nederland",
  linkedin: {
    href: "https://www.linkedin.com/in/sabiendouven",
    label: "linkedin.com/in/sabiendouven",
  },
} as const;

export const navItems = [
  { id: "home", label: "Home", long: "Home", icon: "home" },
  { id: "projecten", label: "Projecten", long: "Projecten", icon: "grid" },
  { id: "werk", label: "Werk", long: "Werkervaring", icon: "briefcase" },
  { id: "skills", label: "Skills", long: "Skills", icon: "sparkle" },
  { id: "contact", label: "Contact", long: "Contact", icon: "mail" },
] as const satisfies ReadonlyArray<{
  id: string;
  label: string;
  long: string;
  icon: IconName;
}>;

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  fit: "cover" | "contain";
  position: string;
  tone: string;
  size: "wide" | "narrow";
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "self-consulting-terminal",
    title: "Self Consulting Terminal",
    description:
      "Een kiosk in de apotheek waarmee klanten via een ‘fast lane’ snel zelf hun producten bestellen. Bij Scala ontwierp ik de interface en gebruikservaring en bouwde ik de front-end.",
    image: "/img/pharmacy-terminal.jpg",
    imageAlt:
      "Ontwerp van de Self Consulting Terminal: een kiosk met het scherm van Pharmacy Solution",
    fit: "contain",
    position: "50% 50%",
    tone: "linear-gradient(135deg, #ece8ff, #e2f5ea)",
    size: "wide",
  },
  {
    slug: "visit-zuid-limburg-quiz",
    title: "Visit Zuid-Limburg Experience quiz",
    description:
      "Een interactieve quiz op tablets waarmee bezoekers ontdekken hoeveel ze weten over Zuid-Limburg. Ik deed het design en bouwde de front-end.",
    image: "/img/quiz-visit-zuid-limburg.jpg",
    imageAlt: "Een bezoeker speelt de interactieve quiz op een tablet naast een groot scherm",
    fit: "cover",
    position: "50% 78%",
    tone: "#f3e6bd",
    size: "narrow",
  },
  {
    slug: "ben-goossens",
    title: "Ben Goossens website",
    description: "De website van een autogarage in Zuid-Limburg, gespecialiseerd in Volvo en Saab. Ik verzorgde het design en de development.",
    image: "/img/ben-goossens-website.jpg",
    imageAlt: "De website van Ben Goossens getoond op een iMac",
    fit: "contain",
    position: "50% 50%",
    tone: "linear-gradient(135deg, #e9edf7, #f4efe8)",
    size: "narrow",
    link: { href: "https://www.ben-goossens.nl", label: "www.ben-goossens.nl" },
  },
  {
    slug: "jeugdlintje",
    title: "Jeugdlintje Gemeente Maastricht",
    description:
      "Een campagne voor het Jeugdlintje van Gemeente Maastricht, met onder meer branding, strategie en foto en video.",
    image: "/img/jeugdlintje-campagne.jpg",
    imageAlt: "Het logo van het Jeugdlintje op een doek op het Vrijthof in Maastricht",
    fit: "cover",
    position: "50% 42%",
    tone: "#dfe3e6",
    size: "wide",
    link: {
      href: "https://studio-sowieso.nl/jeugdlintje/",
      label: "studio-sowieso.nl/jeugdlintje",
    },
  },
];

export type Job = {
  role: string;
  company: string;
  via?: string;
  period: string;
  location: string;
  /** Pad naar het logo in /public; zonder logo tonen we de initialen. */
  logo?: string;
  /** 'contain' toont het hele logo op een witte tegel (voor niet-vierkante logo's). */
  logoFit?: "cover" | "contain";
  initials?: string;
  current?: boolean;
};

export const experience: Job[] = [
  {
    role: "Front-end Developer",
    company: "hollandsnieuwe",
    via: "ilionx",
    period: "Sep 2024 – Heden",
    location: "Maastricht Airport",
    logo: "/img/logos/ilionx.png",
    logoFit: "contain",
    current: true,
  },
  {
    role: "Front-end Developer & UX/UI Designer",
    company: "Scala",
    period: "Feb 2022 – Jun 2024",
    location: "Sittard",
    logo: "/img/logos/scala.png",
  },
  {
    role: "Co-owner | Web developer & Designer",
    company: "Studio Sowieso",
    period: "Mrt 2020 – Heden",
    location: "Beek",
    logo: "/img/logos/sowieso.png",
    current: true,
  },
  {
    role: "Freelancer",
    company: "BIEN design",
    period: "Okt 2018 – Mrt 2020",
    location: "Geleen",
    logo: "/img/logos/bien.png",
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  icon: IconName;
  note?: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "development",
    title: "Development",
    icon: "code",
    skills: [
      "Vue JS",
      "React",
      "React Native",
      "Nuxt",
      "Next.js",
      "TailwindCSS",
      "WordPress",
      "RESTful API",
      "GraphQL",
      "HTML",
      "CSS",
      "JS",
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: "palette",
    skills: [
      "Adobe Creative Cloud",
      "Figma",
      "User Experience",
      "Wireframing",
      "Prototyping",
      "Testing",
      "Design System",
    ],
  },
  {
    id: "ai",
    title: "AI-ondersteund werken",
    icon: "sparkle",
    note: "Dagelijks zet ik AI in om code te reviewen, tickets te refinen en uit te voeren, tests te schrijven en kleine webapps te bouwen, zoals deze site.",
    skills: [
      "Claude",
      "GitHub Copilot",
      "Code reviews",
      "Tickets refinen",
      "AI skills",
      "Tests schrijven",
      "Webapps bouwen",
    ],
  },
];

export const education = [
  {
    school: "Educom",
    program: "Software Engineering Traineeship",
    years: "Aug 2021 – Dec 2022",
    logo: "/img/logos/educom.png",
  },
  {
    school: "Zuyd Hogeschool",
    program: "Communication & Multimedia Design",
    years: "2014 – 2018",
    logo: "/img/logos/zuyd.png",
  },
  {
    school: "Trevianum",
    program: "VWO",
    years: "2008 – 2014",
    logo: "/img/logos/trevianum.png",
  },
] as const;

export const languages = [
  { name: "Nederlands", level: "Native", dots: 5, flag: "nl" },
  { name: "Engels", level: "Goed", dots: 4, flag: "gb" },
  { name: "Duits", level: "Redelijk", dots: 3, flag: "de" },
] as const;
