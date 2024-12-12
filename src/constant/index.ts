import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaSquareFacebook } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from "react-icons/lia";
import { PiHandHeart } from "react-icons/pi";

export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const CHILDRENSERVED = 1432805;

export const NAVIGATIONS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Donate', href: '/donate' },
  { label: 'Media', href: '/media' },
  { label: 'Events', href: '/event' },
  { label: 'Blog', href: '/blog' },
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

export const ABOUT = [
  "Chef Mahmoud, who always ended his videos by thanking his friends in the United States and signing off with the Arabic word “Mostamreen” (مستمرين) 💪, meaning “we will continue,” left a legacy of resilience and hope.His spirit lives on through our family and friends who now manage the different locations for us across North and South Gaza.",
  "This morning, two of our dedicated crew members in North Gaza served hot meals to those in need—pasta 🍝 at one location and Palestinian Maftool 🍲 at another.These two locations, roughly two miles apart, reflect the strength of our shared mission."
]

export const MEDIAS = [
  {
    image: "/Gaza-Soup-Kitchen.webp",
    url: "https://www.npr.org/2024/03/03/1235606468/in-north-gaza-a-local-soup-kitchen-tries-to-compensate-for-hunger-amid-dwindling"
  },
  {
    image: "/Gaza-Soup-Kitchen-2.webp",
    url: "https://www.npr.org/2024/07/16/nx-s1-5025629/a-palestinian-american-raises-more-than-1-million-to-feed-his-family-and-others-in-gaza"
  },
  {
    image: "/Gaza-Soup-Kitchen-3.webp",
    url: "/"
  }
]