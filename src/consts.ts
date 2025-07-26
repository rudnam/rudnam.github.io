import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "rudnam",
  EMAIL: "rudnam01@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Rudnam's website",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I have an interest in.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/rudnam",
  },
  {
    NAME: "twitter",
    HREF: "https://x.com/rudnamm",
  },
];
