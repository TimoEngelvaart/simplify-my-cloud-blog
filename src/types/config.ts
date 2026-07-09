export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
    image_l: { url: string; alt: string };
    image_r: { url: string; alt: string };
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};
