import About from '@/components/about';
import { BlurredBgComponent } from '@/components/blurred-bg';
import Gallery from '@/components/gallery';
import GalleryMasonrySection from '@/components/gallery-masonry-section';
import GazaSupportSection from '@/components/gaza-support-section';
import GetInvolved from '@/components/get-involved';
import HelpSection from '@/components/help-section';
import Hero from '@/components/hero';
import LatestDonations from '@/components/latest-donations';
import LatestEvent from '@/components/latest-event';
import MediaSection from '@/components/media-section';
import MerchSection from '@/components/merch-section';
import TopHero from '@/components/top-hero';
import Volunteer from '@/components/volunteer';
import { IconType, SectionType } from '@/types';
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from 'react-icons/lia';
import { PiHandHeart } from 'react-icons/pi';

export const BLUR_DATA_URL =
  'data:image/webp;base64,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},GhTuHMHFIQb2sPcAFYqOZw1pDdR5Olna8DmApcEzfI4gUARSa4RORp0Lz4eBtAAekKot7eYM9H94bcw6izgCmwS4k+4SYLK7d1Y3AxvAMeKbzPygzXjX6AIA0pTFB4IAKCNTQ098xwBqQAAAAADCLhoAAAAAA==';
export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const REVALIDATE_TIME = 1;

export const LATEST_DONATIONS = [
  {
    id: 1,
    name: 'Ivan Jacobson',
    amount: 300,
    cause: 'Children Needs Food',
    img: '/person_1.jpg',
    timestamp: '2024-05-01T12:00:00Z',
  },
  {
    id: 2,
    name: 'Ivan Jacobson',
    amount: 150,
    cause: 'Children Needs Food',
    img: '/person_2.jpg',
    timestamp: '2024-01-02T12:00:00Z',
  },
  {
    id: 3,
    name: 'Ivan Jacobson',
    amount: 250,
    cause: 'Children Needs Food',
    img: '/person_3.jpg',
    timestamp: '2024-01-03T12:00:00Z',
  },
];

export const iconMap = {
  [IconType.DONATION]: PiHandHeart,
  [IconType.VOLUNTEER]: LiaHandshakeSolid,
  [IconType.SPONSORSHIP]: LiaHandHoldingUsdSolid,
};

export const componentMap = {
  [SectionType.TOP_HERO]: TopHero,
  [SectionType.GET_INVOLVED]: GetInvolved,
  [SectionType.HERO]: Hero,
  [SectionType.ABOUT]: About,
  [SectionType.MEDIA]: MediaSection,
  [SectionType.HELP]: HelpSection,
  [SectionType.MERCH]: MerchSection,
  [SectionType.GALLERY_MASONRY]: GalleryMasonrySection,
  [SectionType.GAZA_SUPPORT]: GazaSupportSection,
  [SectionType.BLUR_BACKGROUND]: BlurredBgComponent,
  [SectionType.LATEST_DONATIONS]: LatestDonations,
  [SectionType.GALLERY]: Gallery,
  [SectionType.EVENT]: LatestEvent,
  [SectionType.VOLUNTEER]: Volunteer,
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
