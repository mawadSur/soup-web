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
  paragraphs: string[];
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  reverseOrder?: boolean;
  mission?: boolean;
};

export enum EICONS {
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
};

type logoLink = {
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
  logoLink: logoLink;
  link: Link[];
};
