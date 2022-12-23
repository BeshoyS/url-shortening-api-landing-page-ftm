import { ReactNode } from "react";
import {
  GrFacebook,
  GrTwitter,
  GrPinterest,
  GrInstagram,
} from "react-icons/gr";

interface links {
  name: string;
  url: string;
}

export interface footerLinksTypes {
  title: string;
  links: links[];
}
export interface footerSocialsTypes extends links {
  icon: ReactNode;
}

export const footerLinks: footerLinksTypes[] = [
  {
    title: "Features",
    links: [
      {
        name: "Link Shortening",
        url: "#",
      },
      {
        name: "Branded Links",
        url: "#",
      },
      {
        name: "Analytics",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Developers",
        url: "#",
      },
      {
        name: "Support",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About",
        url: "#",
      },
      {
        name: "Our Team",
        url: "#",
      },
      {
        name: "Careers",
        url: "#",
      },
      {
        name: "Contact",
        url: "#",
      },
    ],
  },
];

export const footerSocials: footerSocialsTypes[] = [
  {
    name: "Facebook",
    icon: <GrFacebook />,
    url: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: <GrTwitter />,
    url: "https://www.twitter.com/",
  },
  {
    name: "Pinterest",
    icon: <GrPinterest />,
    url: "https://www.pinterest.com/",
  },
  {
    name: "Instagram",
    icon: <GrInstagram />,
    url: "https://www.instagram.com/",
  },
];
