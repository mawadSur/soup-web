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

export type LogoLink = {
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
  image: Image;
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

export type GazaSupportSection = {
  __component: SectionType.ABOUT;
  id: number;
  gazaSupport: LayoutColumn;
};

export type HelpSection = {
  __component: SectionType.HELP;
  id: number;
  heading: string;
  help: Card[];
};

export type MediaSection = {
  __component: SectionType.MEDIA;
  id: number;
  medias: LogoLink[];
};

export type BackgroundImage = {
  __component: SectionType.MERCH | SectionType.BLUR_BACKGROUND;
  id: number;
  backgroundImage: LogoLink;
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
  BLUR_BACKGROUND = 'section.blur-background',
  HELP = 'section.help',
  MERCH = 'section.merch',
  ABOUT = 'section.about',
  MEDIA = 'section.media',
  LATEST_DONATIONS = 'section.latest-donations',
  GALLERY = 'section.gallery',
  LATEST_EVENT = 'section.latest-event',
  VOLUNTEER = 'section.volunteer',
  GAZA_SUPPORT = 'section.gaza-support',
}

export type SectionData = SectionTopHero | HeroSection | GetInvolvedSection | AboutSection | MediaSection;
