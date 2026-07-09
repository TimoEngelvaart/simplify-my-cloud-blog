import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

// Brand identity (name, email, logo used for OG images and favicon)
export const identity: Identity = {
  name: "Simplify My Cloud",
  logo: "/logo-light.svg",
  email: "info@simplifymycloud.com",
};

// Author profile (photo used in hero and post bylines)
export const author = {
  name: "Timo Engelvaart",
  avatar: "/timo.jpg",
};

export const navBarLinks: NavBarLink[] = [
  { title: "Home",  url: "/" },
  { title: "About", url: "/about" },
  { title: "Blog",  url: "/blog" },
];

export const socialLinks: SocialLink[] = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/@simplifymycloud",
    icon: "mdi:youtube",
    external: true,
  },
  {
    title: "Email",
    url: "mailto:info@simplifymycloud.com",
    icon: "mdi:email",
    external: false,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Simplify My Cloud",
    description:
      "Cloud tutorials on Azure, Power Platform & AI by Timo Engelvaart.",
    image: identity.logo,
  },
  role: "DevOps Engineer",
  description:
    "I'm Timo Engelvaart, a DevOps engineer from the Netherlands. I make videos about Azure, Power Platform, and AI — and write companion guides here on the blog.",
  socialLinks,
  links: [
    {
      title: "Watch on YouTube",
      url: "https://www.youtube.com/@simplifymycloud",
      external: true,
    },
    {
      title: "Read the Blog",
      url: "/blog",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Simplify My Cloud",
    description:
      "Azure & Power Platform made simple. Practical guides and tutorials by Timo Engelvaart.",
    image: identity.logo,
  },
  subtitle: "Turn complex cloud into simple, shippable solutions.",
  about: {
    description: `
I'm **Timo Engelvaart**, a DevOps engineer from the Netherlands and the creator of **Simplify My Cloud**.
<br/><br/>
I work daily with **Azure** and the **Power Platform**—automating real processes for municipalities and teams. Here I share the exact **patterns, scripts, and blueprints** I use so you can copy, adapt, and ship faster.
<br/><br/>
**What you'll find here**
- Step-by-step builds for Azure & Power Platform
- Copy-paste snippets (PowerShell, Azure Functions, GitHub Actions)
- Companion guides for every YouTube video
`,
    image_l: { url: "/demo-1.jpg", alt: "Building apps that solve real problems" },
    image_r: { url: "/demo-2.jpg", alt: "Automation and cloud workflows" },
  },
  connect: {
    description: "Questions or ideas? I love hearing what you're building.",
    links: socialLinks,
  },
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Simplify My Cloud",
    description:
      "Guides and tutorials on Azure, Power Platform & AI by Timo Engelvaart.",
    image: identity.logo,
  },
  subtitle: "Companion guides for every YouTube video, plus standalone how-tos.",
};
