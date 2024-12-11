import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaSquareFacebook } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from "react-icons/lia";
import { PiHandHeart } from "react-icons/pi";

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
    name: 'Instagram',
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

export const INVOLVED_ITEMS = [
  {
    title: "Make Donation",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: PiHandHeart
  },
  {
    title: "Become A Volunteer",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: LiaHandshakeSolid
  },
  {
    title: "Sponsorship",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: LiaHandHoldingUsdSolid
  }
];