import About from '@/components/about';
import BlurredBgComponent from '@/components/blurred-bg';
import Gallery from '@/components/gallery';
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

export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const REVALIDATE_TIME = 300;

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
  [SectionType.GAZA_SUPPORT]: GazaSupportSection,
  [SectionType.BLUR_BACKGROUND]: BlurredBgComponent,
  [SectionType.LATEST_DONATIONS]: LatestDonations,
  [SectionType.GALLERY]: Gallery,
  [SectionType.EVENT]: LatestEvent,
  [SectionType.VOLUNTEER]: Volunteer,
};
