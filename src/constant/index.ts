import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaSquareFacebook } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from "react-icons/lia";
import { PiHandHeart } from "react-icons/pi";

export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const CHILDRENSERVED = 1432805;

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

export const HELPS = [
  {
    image: "/food1.webp",
    title: "A RECIPE FOR RESILIENCE",
    description:
      "This isn't just a soup — it's a recipe for resilience, simmering on the stoves of Gaza, feeding bodies and souls alike. Each bowl serves not just sustenance but a steadfast vow: to fortify, to nourish, to endure.",
  },
  {
    image: "/food2.webp",
    title: "HANDS UNITED IN SERVICE",
    description:
      "Amidst the steam of hearty soups, we find the warmth of shared hope. Every ladleful carries the spirit of community and the promise of sustenance for the children of Gaza.​",
  },
  {
    image: "/food3.webp",
    title: "THE WARMTH OF SHARED HOPE​",
    description:
      "In the quiet corners of resilience, even the smallest hands come together to lift more than just a meal — they raise the foundation of tomorrow on the strength of solidarity.​",
  },
  {
    image: "/food4.webp",
    title: "NURTURING COMMUNITY​",
    description:
      "This is where hope simmers, where every serving is a pledge of solidarity. Here, we do not just feed the hungry, we nurture the soul of Gaza, one pot, one person, one community at a time.​",
  }
]
