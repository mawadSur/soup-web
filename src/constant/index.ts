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
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFw8bDxQPDxQdHRodHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABk3/9k=';
export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const REVALIDATE_TIME = 300;
export const INTERSECTION_THRESHOLD = 0.5;
export const DEFAULT_FETCH_LIMIT = 6;

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
