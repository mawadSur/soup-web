import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaSquareFacebook } from "react-icons/fa6";

export const NAVIGATIONS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Causes', href: '/causes' },
  { label: 'Donate', href: '/donate' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Events', href: '/event' },
  { label: 'Contact', href: '/contact' }
];

export const SOCIALS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/alkabeer.alhani',
    icon: FaSquareFacebook,
  },
  {
    name: 'GitHub',
    href: 'https://www.instagram.com/gazasoupkitchen/',
    icon: FaInstagramSquare,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gaza-soup-kitchen/',
    icon: FaLinkedin,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/gazasoupkitchen.bsky.social',
    icon: FaBluesky,
  },
]
