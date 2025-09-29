import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Simplify My Cloud",
  logo: "/logo.png",
  email: "info@simplifymycloud.com",
};

export const Logo: Identity = {
  name: "Simplify My Cloud",
  logo: "/timo.jpeg",
  email: "info@simplifymycloud.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/TimWitzdam",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:info@simplifymycloud.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Simplify My Cloud",
    description:
      "I'm Timo Engelvaart, a DevOps engineer from the Netherlands who enjoys automating workflows and building smart solutions in the cloud.",
    image: identity.logo,
  },
  role: "DevOps Engineer",
  description:
    "I'm Timo Engelvaart, a DevOps engineer from the Netherlands who enjoys automating workflows and building smart solutions in the cloud.",
  socialLinks: socialLinks,
  links: [
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Simplify My Cloud",
    description:
      "Azure & Power Platform made simple. Practical guides, scripts, and app blueprints by Timo Engelvaart.",
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
- Opinionated, production-ready setups that stay simple
`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Building apps that solve real problems",
    },
    image_r: {
      url: "/demo-2.jpg",
      alt: "Automation and cloud workflows",
    },
  },
  connect: {
    description: `Questions or ideas? I love hearing what you're building. Connect with me below.`, // Markdown is supported
    links: socialLinks,
  },
};


// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
