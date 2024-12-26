import { getInstagramFeed } from '@/api/instagram';
import { BlurredBgComponent } from '@/components/blurred-bg';
import InstagramInfiniteGallery from '@/components/instagram-infinite-gallery';
import GazaSupportSection from '@/components/gaza-support-section';
import { SectionType } from '@/types';

export default async function GalleryPage() {
  const data = await getInstagramFeed();

  return (
    <>
      <BlurredBgComponent
        data={{
          __component: SectionType.BLUR_BACKGROUND,
          id: 11,
          backgroundImage: {
            id: 64,
            label: 'ignite hope and nourish the future',
            href: '',
            image: {
              id: 9,
              documentId: 'ohl5jgxcc1ns0i3awg5s9tag',
              name: 'food.webp',
              alternativeText: 'food photo',
              width: 1599,
              height: 738,
            },
          },
        }}
      />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-10 sm:pt-10 lg:pt-20">
        <InstagramInfiniteGallery data={data} />
      </div>
      <GazaSupportSection
        data={{
          __component: SectionType.GAZA_SUPPORT,
          id: 11,
          gazaSupport: {
            heading: '',
            paragraph: 'Your support fuels our mission. Every donation brings us closer to a hunger-free Gaza',
            isReverse: false,
            subHeading: 'PALESTINIANS IN GAZA NEED YOUR HELP NOW',
            image: {
              id: 15,
              documentId: 'w9vixjwwjz2xyli7ecjooqsa',
              name: 'kid2.webp',
              alternativeText: 'kid in gaza and food',
              width: 768,
              height: 648,
            },
            button: {
              id: 158,
              href: 'https://givebutter.com/gaza-soup-kitchen',
              label: 'DONATE NOW',
              external: true,
            },
          },
        }}
      />
    </>
  );
}
