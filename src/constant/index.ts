import About from '@/components/about';
import Gallery from '@/components/gallery';
import GalleryMasonrySection from '@/components/media-page';
import GetInvolved from '@/components/get-involved';
import HelpSection from '@/components/help-section';
import Hero from '@/components/hero';
import Mission from '@/components/mission';
import Media from '@/components/media';
import MerchSection from '@/components/merch-section';
import { IconType, SectionType } from '@/types';
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from 'react-icons/lia';
import { PiHandHeart } from 'react-icons/pi';

export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const REVALIDATE_TIME = 300;

export const ICON_MAP = {
  [IconType.DONATION]: PiHandHeart,
  [IconType.VOLUNTEER]: LiaHandshakeSolid,
  [IconType.SPONSORSHIP]: LiaHandHoldingUsdSolid,
};

export const COMPONENT_MAP = {
  [SectionType.TOP_HERO]: Hero,
  [SectionType.GET_INVOLVED]: GetInvolved,
  [SectionType.HERO]: Mission,
  [SectionType.ABOUT]: Media,
  [SectionType.MEDIA]: About,
  [SectionType.HELP]: HelpSection,
  [SectionType.MERCH]: MerchSection,
  [SectionType.GALLERY_MASONRY]: GalleryMasonrySection,
  [SectionType.GALLERY]: Gallery,
};

export const GALLERIES_PAGE = [
  { src: '/bg_3.jpg', width: 1920, height: 1080, alt: 'Background scene' },
  { src: '/bg_4.jpg', width: 1920, height: 1080, alt: 'Alternative background' },
  { src: '/cause-2.jpg', width: 1200, height: 800, alt: 'Charitable cause' },
  { src: '/cause-3.jpg', width: 1200, height: 800, alt: 'Community support initiative' },
  { src: '/cause-4.jpg', width: 1200, height: 800, alt: 'Humanitarian effort' },
  { src: '/cause-5.jpg', width: 1200, height: 800, alt: 'Social impact project' },
  { src: '/cause-6.jpg', width: 1200, height: 800, alt: 'Volunteer work' },
  { src: '/food.webp', width: 1000, height: 667, alt: 'Food distribution' },
  { src: '/food1.webp', width: 1000, height: 667, alt: 'Meal preparation' },
  { src: '/food2.webp', width: 1000, height: 667, alt: 'Cooking for community' },
  { src: '/food3.webp', width: 1000, height: 667, alt: 'Community kitchen' },
  { src: '/food4.webp', width: 1000, height: 667, alt: 'Feeding program' },
  { src: '/gaza-kid.webp', width: 800, height: 600, alt: 'Child in Gaza' },
  { src: '/gaza-kids.webp', width: 800, height: 600, alt: 'Children in Gaza' },
  { src: '/Gaza-Soup-Kitchen-2.webp', width: 1200, height: 800, alt: 'Soup kitchen scene' },
  { src: '/Gaza-Soup-Kitchen-3.webp', width: 1200, height: 800, alt: 'Community soup kitchen' },
  { src: '/Gaza-Soup-Kitchen.webp', width: 1200, height: 800, alt: 'Humanitarian soup kitchen' },
  { src: '/gazasoup-logo.webp', width: 500, height: 500, alt: 'Gazasoup organization logo' },
  { src: '/image_1.jpg', width: 1600, height: 1067, alt: 'Descriptive image one' },
  { src: '/image_2.jpg', width: 1600, height: 1067, alt: 'Descriptive image two' },
  { src: '/image_3.jpg', width: 1600, height: 1067, alt: 'Descriptive image three' },
  { src: '/mission-1024x864.webp', width: 800, height: 600, alt: 'Child portrait' },
  { src: '/kids.webp', width: 800, height: 600, alt: 'Group of children' },
  { src: '/MAHMOUD-ALMADHOUN.webp', width: 800, height: 600, alt: 'Mahmoud Almadhoun' },
  { src: '/merch.webp', width: 1000, height: 1000, alt: 'Merchandise display' },
];

export const MEDIAS_PAGE = [
  {
    name: 'ajnews.png',
    href: 'https://x.com/ajplus/status/1836828710978097187?t=N3SBlDhhJhQGNPsaTFoZlQ&s=08',
    width: 800,
    height: 600,
    alternativeText: 'AJ News',
  },
  {
    name: 'ajwhite-768x776.png',
    href: 'https://www.youtube.com/shorts/0XfYudScK1o',
    width: 768,
    height: 776,
    alternativeText: 'AJ White',
  },
  {
    name: 'cbc-768x771.jpg',
    href: 'https://www.cbc.ca/listen/live-radio/1-14-day-6/clip/16051274-a-local-soup-kitchen-gaza-helps-people-facing',
    width: 768,
    height: 771,
    alternativeText: 'CBC',
  },
  {
    name: 'DC-News-Now-768x765.jpg',
    href: 'https://www.dcnewsnow.com/news/local-news/virginia/northern-virginia-man-raising-money-for-familys-soup-kitchen-in-north-gaza/',
    width: 768,
    height: 765,
    alternativeText: 'DC News Now',
  },
  {
    name: 'FinancialTimes-768x748.jpg',
    href: 'https://www.ft.com/content/07081b5e-edbc-4e61-93f1-390e14cf6f09',
    width: 768,
    height: 748,
    alternativeText: 'Financial Times',
  },
  {
    name: 'foodbeast-768x761.png',
    href: 'https://www.foodbeast.com/news/brothers-launch-gaza-soup-kitchen-aiding-hundreds-of-families-during-ramadan/',
    width: 768,
    height: 761,
    alternativeText: 'Foodbeast',
  },
  {
    name: 'nbc-768x705.png',
    href: 'https://www.nbcnews.com/news/world/ramadan-gaza-palestinians-israel-war-famine-rcna142785',
    width: 768,
    height: 705,
    alternativeText: 'NBC',
  },
  {
    name: 'nbc2-768x736.png',
    href: 'https://www.nbcnews.com/news/world/gaza-soup-kitchen-bridges-efforts-brothers-thousands-miles-apart-rcna146593',
    width: 768,
    height: 736,
    alternativeText: 'NBC 2',
  },
  {
    name: 'npr-768x774.png',
    href: 'https://www.npr.org/2024/07/16/nx-s1-5025629/a-palestinian-american-raises-more-than-1-million-to-feed-his-family-and-others-in-gaza',
    width: 768,
    height: 774,
    alternativeText: 'NPR',
  },
  {
    name: 'npr-768x766.png',
    href: 'https://www.npr.org/2024/03/03/1235606468/in-north-gaza-a-local-soup-kitchen-tries-to-compensate-for-hunger-amid-dwindling',
    width: 768,
    height: 766,
    alternativeText: 'NPR',
  },
  {
    name: 'pbs-768x775.png',
    href: 'https://www.pbs.org/newshour/show/gazans-struggle-with-starvation-and-displacement-this-ramadan',
    width: 768,
    height: 775,
    alternativeText: 'PBS',
  },
  {
    name: 'wapo-768x890.png',
    href: 'https://www.washingtonpost.com/opinions/2024/04/03/gaza-famine-family-soupkitchen/',
    width: 768,
    height: 890,
    alternativeText: 'Washington Post',
  },
  {
    name: 'yahoo-768x733.png',
    href: 'https://www.yahoo.com/news/gaza-soup-kitchen-bridges-efforts-212433065.html',
    width: 768,
    height: 733,
    alternativeText: 'Yahoo',
  },
  {
    name: 'Ziet-768x773.jpg',
    href: 'https://www.zeit.de/politik/ausland/2024-05/gaza-middle-east-war-humanitarian-situation-israel-aid-organization/komplettansicht',
    width: 768,
    height: 773,
    alternativeText: 'Ziet',
  },
];
