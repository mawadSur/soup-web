export type Event = {
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  link: string;
};

type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
};

type LogoLink = {
  id: number;
  label: string;
  href: string;
  image: Image;
};

type Link = {
  id: number;
  href: string;
  label: string;
  external: boolean;
};

type Social = {
  id: number;
  href: string;
  label: string;
  external: boolean;
};

export type Footer = {
  id: number;
  text: string;
  link: Link[];
  social: Social[];
};

export type Navbar = {
  id: number;
  LogoLink: LogoLink;
  link: Link[];
};
