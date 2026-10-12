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
      "Een kiosk in apotheken waar je in een ‘fast lane’ je producten kunt bestellen. Ik was bij Scala verantwoordelijk voor de UI/UX en de Front-end development van dit project.",
    image: "/img/pharmacy.jpg",
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
      "Een interactieve quiz met vragen over de omgeving waar ik verantwoordelijk was voor het design en Front-end development.",
    image: "/img/quiz.jpg",
    imageAlt: "Twee bezoekers spelen de interactieve quiz op een tablet",
    fit: "cover",
    position: "60% 50%",
    tone: "#f3e6bd",
    size: "narrow",
  },
  {
    slug: "ben-goossens",
    title: "Ben Goossens website",
    description: "Een website voor een autogarage. Design en web development.",
    image: "/img/ben-goossens.jpg",
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
      "Campagne voor het jeugdlintje met o.a. een branding, strategie en foto/video.",
    image: "/img/jeugdlintje.jpg",
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
    company: "Hollandsnieuwe",
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
    location: "Maastricht",
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
      "Nuxt",
      "TailwindCSS",
      "Figma",
      "WordPress",
      "RESTful API",
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
      "User Experience",
      "Wireframing",
      "Prototyping",
      "Testing",
      "Design System",
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
