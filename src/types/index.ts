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
  width?: number;
  height?: number;
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

type Donation = {
  id: number;
  href: string;
  label: string;
  external: boolean;
};

export type BoxButton = {
  id: number;
  heading: string;
  paragraph: string;
  donation: Donation;
};

export type ServedOver = {
  id: number;
  heading: string;
  paragraph: string;
  paragraph2: string;
};

export type SectionTopHero = {
  __component: Sections;
  id: number;
  heading: string;
  image: Image;
  boxesButton: BoxButton[];
  servedOver: ServedOver;
};

export const enum Sections {
  TOP_HERO = 'section.top-hero',
  GET_INVOLVED = 'section.get-involved',
  HERO = 'section.hero',
  ABOUT = 'section.about',
  HELP_SECTION = 'section.help-section',
  LATEST_DONATIONS = 'section.latest-donations',
  GALLERY = 'section.gallery',
  LATEST_EVENT = 'section.latest-event',
  VOLUNTEER = 'section.volunteer',
}

export type SectionData = SectionTopHero;
