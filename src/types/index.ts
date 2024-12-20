export type Event = {
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  link: string;
};

export type ColumnLayoutProps = {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  paragraph: string;
  imageWidth: number;
  imageHeight: number;
  className?: string;
  reverseOrder?: boolean;
  href?: string;
  ariaLabel?: string;
  label?: string;
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

export type Link = {
  id: number;
  href: string;
  label: string;
  external: boolean;
};

export type Footer = {
  id: number;
  text: string;
  link: Link[];
  social: Link[];
};

export type Navbar = {
  id: number;
  LogoLink: LogoLink;
  link: Link[];
};

export type BoxButton = {
  id: number;
  heading: string;
  paragraph: string;
  donation: Link;
};

export type Card = {
  id: number;
  icon: IconType;
  heading: string;
  paragraph: string;
};

export type ServedOver = {
  id: number;
  heading: string;
  paragraph: string;
  paragraph2: string;
};

export type SectionTopHero = {
  __component: SectionType.TOP_HERO;
  id: number;
  heading: string;
  image: Image;
  boxesButton: BoxButton[];
  servedOver: ServedOver;
};

export type GetInvolvedSection = {
  __component: SectionType.GET_INVOLVED;
  id: number;
  cards: Card[];
};
export type LayoutColumn = {
  heading: string;
  subHeading: string;
  paragraph: string;
  isReverse: boolean;
  image: Image;
  button: Link;
};

export type HeroSection = {
  __component: SectionType.HERO;
  id: number;
  hero: LayoutColumn;
};

export type AboutSection = {
  __component: SectionType.ABOUT;
  id: number;
  about: LayoutColumn;
};

export enum IconType {
  DONATION = 'Donation',
  VOLUNTEER = 'Volunteer',
  SPONSORSHIP = 'Sponsorship',
}

export const enum SectionType {
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

export type SectionData = SectionTopHero | HeroSection | GetInvolvedSection | AboutSection;
