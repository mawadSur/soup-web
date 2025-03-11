export enum SocialIcons {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  BLUESKY = 'bluesky',
}

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
  logoLink: LogoLink;
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
  time: string;
  location: string;
  href: string;
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

export type HelpSection = {
  __component: SectionType.HELP;
  id: number;
  heading: string;
  help: Card[];
};

export type About = {
  __component: SectionType.MEDIA;
  id: number;
  medias: LogoLink[];
};

export type GallerySection = {
  __component: SectionType.GALLERY;
  id: number;
  heading: string;
  gallery: Image[];
};

export type GalleryMasonrySection = {
  __component: SectionType.GALLERY_MASONRY;
  id: number;
  heading: string;
  gallery: LogoLink[];
};

export interface InstagramItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url: string;
}

export type InstagramPost = {
  posts: InstagramItem[];
};

export enum IconType {
  DONATION = 'Donation',
  VOLUNTEER = 'Volunteer',
  SPONSORSHIP = 'Sponsorship',
}

export enum SectionType {
  TOP_HERO = 'section.top-hero',
  GET_INVOLVED = 'section.get-involved',
  HERO = 'section.hero',
  HELP = 'section.help',
  GALLERY_MASONRY = 'section.gallery-masonry',
  MERCH = 'section.merch',
  ABOUT = 'section.about',
  MEDIA = 'section.media',
  GALLERY = 'section.gallery',
}

export type SectionData =
  | SectionTopHero
  | HeroSection
  | GetInvolvedSection
  | AboutSection
  | About
  | GallerySection
  | GalleryMasonrySection
  | HelpSection;
